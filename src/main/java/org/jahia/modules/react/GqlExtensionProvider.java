package org.jahia.modules.react;

import org.jahia.modules.graphql.provider.dxm.DXGraphQLExtensionsProvider;
import org.osgi.service.component.annotations.Component;

import java.util.*;

@Component
public class GqlExtensionProvider implements DXGraphQLExtensionsProvider {

    @Override
    public Collection<Class<?>> getExtensions() {
        List<Class<?>> l = new ArrayList<Class<?>>();
        l.add(ReactGQLExtender.class);
        return l;
    }

}
