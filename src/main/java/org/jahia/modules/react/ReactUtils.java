package org.jahia.modules.react;

import org.jahia.modules.javascriptloader.api.NodeModule;
import org.jahia.modules.javascriptloader.api.NodeModulesRegistry;
import org.jahia.osgi.BundleUtils;

import java.util.Map;

public class ReactUtils {

    public static String getPackage(String name) {
        NodeModulesRegistry registry = BundleUtils.getOsgiService(NodeModulesRegistry.class, null);
        for (NodeModule nodeModule : registry.getInstalledModules()) {
            Map<String,Object> s = (Map<String, Object>) nodeModule.getProperties().get("jahia");
            if (s != null && s.containsKey("components")) {
                String n = ((Map<String,String>)s.get("components")).get(name);
                if (n != null) {
                    return nodeModule.getName();
                }
            }
        }
        return null;
    }

    public static String getImport(String name) {
        NodeModulesRegistry registry = BundleUtils.getOsgiService(NodeModulesRegistry.class, null);
        for (NodeModule nodeModule : registry.getInstalledModules()) {
            Map<String,Object> s = (Map<String, Object>) nodeModule.getProperties().get("jahia");
            if (s != null && s.containsKey("components")) {
                String n = ((Map<String,String>)s.get("components")).get(name);
                if (n != null) {
                    return n;
                }
            }
        }
        return null;
    }
}
