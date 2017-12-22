package org.jahia.modules.react;

import graphql.annotations.annotationTypes.GraphQLDefaultValue;
import graphql.annotations.annotationTypes.GraphQLField;
import graphql.annotations.annotationTypes.GraphQLName;
import graphql.annotations.annotationTypes.GraphQLTypeExtension;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import org.jahia.bin.Render;
import org.jahia.modules.graphql.provider.dxm.node.GqlJcrNode;
import org.jahia.modules.graphql.provider.dxm.node.NodeHelper;
import org.jahia.services.SpringContextSingleton;
import org.jahia.services.content.JCRNodeWrapper;
import org.jahia.services.content.JCRSessionFactory;
import org.jahia.services.content.decorator.JCRSiteNode;
import org.jahia.services.content.nodetypes.ConstraintsHelper;
import org.jahia.services.render.RenderContext;
import org.jahia.services.render.RenderService;
import org.jahia.services.render.Resource;
import org.jahia.settings.SettingsBean;
import org.jahia.utils.LanguageCodeConverters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@GraphQLTypeExtension(GqlJcrNode.class)
public class ReactGQLExtender {

    public static final Logger logger = LoggerFactory.getLogger(ReactGQLExtender.class);

    private GqlJcrNode node;
    private RenderContext renderContext;

    public ReactGQLExtender(GqlJcrNode node) {
        this.node = node;
    }

    @GraphQLField
    public RenderResult getRenderedView(@GraphQLName("view") String view, @GraphQLName("templateType") String templateType, @GraphQLName("contextConfiguration") String contextConfiguration,
                                        @GraphQLName("language") String language, DataFetchingEnvironment environment) {
        try {
            RenderService renderService = (RenderService) SpringContextSingleton.getBean("RenderService");

            if (contextConfiguration == null) {
                contextConfiguration = "module";
            }

            if (language == null) {
                language = node.getNode().getResolveSite().getDefaultLanguage();
                if (language == null) {
                    language = "en";
                }
            }

            HttpServletRequest request = ((GraphQLContext) environment.getContext()).getRequest().get();
            HttpServletResponse response = ((GraphQLContext) environment.getContext()).getResponse().get();

            JCRNodeWrapper node = NodeHelper.getNodeInLanguage(this.node.getNode(), language);

            Resource r = new Resource(node, templateType, view, contextConfiguration);
//            request.setAttribute("mode", "edit");
//
//            request = new HttpServletRequestWrapper(request) {
//                @Override
//                public String getParameter(String name) {
//                    if (contextParams != null && contextParams.containsKey(name)) {
//                        return contextParams.get(name).get(0);
//                    }
//                    return super.getParameter(name);
//                }
//
//                @Override
//                public Map getParameterMap() {
//                    Map r = new HashMap(super.getParameterMap());
//                    if (contextParams != null) {
//                        for (Map.Entry<String, List<String>> entry : contextParams.entrySet()) {
//                            r.put(entry.getKey(), entry.getValue().toArray(new String[entry.getValue().size()]));
//                        }
//                    }
//                    return r;
//                }
//
//                @Override
//                public Enumeration getParameterNames() {
//                    return new Vector(getParameterMap().keySet()).elements();
//                }
//
//                @Override
//                public String[] getParameterValues(String name) {
//                    if (contextParams != null && contextParams.containsKey(name)) {
//                        List<String> list = contextParams.get(name);
//                        return list.toArray(new String[list.size()]);
//                    }
//                    return super.getParameterValues(name);
//                }
//            };

            renderContext = new RenderContext(request, response, JCRSessionFactory.getInstance().getCurrentUser());
            //            renderContext.setEditMode(editMode);
//            if ("contributemode".equals(configName)) {
//                renderContext.setContributionMode(true);
//            }
            renderContext.setMainResource(r);

//            EditConfiguration editConfiguration = null;
//            if (configName != null) {
//                editConfiguration = (EditConfiguration) SpringContextSingleton.getBean(configName);
//            }
//            renderContext.setEditModeConfig(editConfiguration);

//            String permission = null;

//            if (editConfiguration != null) {
//                permission = editConfiguration.getRequiredPermission();
//                renderContext.setServletPath(editConfiguration.getDefaultUrlMapping());
//            } else {
            renderContext.setServletPath(Render.getRenderServletPath());
//            }
//
//            if (permission != null) {
//                if (!node.getResolveSite().hasPermission(permission)) {
//                    throw new GWTJahiaServiceException(Messages.getInternal("label.gwt.error.access.denied", uiLocale));
//                }
//            }
//
//            if (contextParams != null) {
//                for (Map.Entry<String, List<String>> entry : contextParams.entrySet()) {
//                    r.getModuleParams().put(entry.getKey(), entry.getValue().get(0));
//                }
//            }

            JCRSiteNode site = node.getResolveSite();
            renderContext.setSite(site);
//            if (channelIdentifier != null) {
//                Channel activeChannel = channelService.getChannel(channelIdentifier);
//                if (activeChannel != null) {
//                    renderContext.setChannel(activeChannel);
//                }
//            }

            response.setCharacterEncoding(SettingsBean.getInstance().getCharacterEncoding());
            String res = renderService.render(r, renderContext);

            return new RenderResult(res);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    public class RenderResult {
        private  String output;

        public RenderResult(String output) {
            this.output = output;
        }

        @GraphQLField
        public String getOutput() {
            return output;
        }

        @GraphQLField
        public String getConstraints() {
            String constraints = null;
            try {
                constraints = ConstraintsHelper.getConstraints(renderContext.getMainResource().getNode());
                if (constraints == null) {
                    constraints = "";
                }
            } catch (RepositoryException e) {
                throw new RuntimeException(e);
            }
            return constraints;
        }

    }

}
