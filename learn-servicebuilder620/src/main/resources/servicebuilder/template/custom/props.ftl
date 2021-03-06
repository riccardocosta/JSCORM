##
## Properties Override
##

    #
    # Specify where to get the overridden properties. Updates should not be made
    # on this file but on the overridden version of this file.
    #
    include-and-override=${r"${base.path}"}/service-ext.properties

##
## Build
##

    build.namespace=${portletShortName}
    build.number=${buildNumber?c}
    build.date=${currentTimeMillis?c}
    build.auto.upgrade=false

##
## Spring
##

    #
    # Input a list of comma delimited Spring configurations. These will be
    # loaded after the bean definitions specified in the
    # portalContextConfigLocation parameter in web.xml.
    #
    spring.configs=\
        WEB-INF/learn-persistence-sb/base-spring.xml,\
        \
        WEB-INF/learn-persistence-sb/hibernate-spring.xml,\
        WEB-INF/learn-persistence-sb/infrastructure-spring.xml,\
        \
        WEB-INF/learn-persistence-sb/cluster-spring.xml,\
        \
        WEB-INF/learn-persistence-sb/portlet-spring.xml,\
        \
        WEB-INF/learn-persistence-sb/dynamic-data-source-spring.xml,\
        WEB-INF/learn-persistence-sb/shard-data-source-spring.xml,\
        \
        WEB-INF/learn-persistence-sb/ext-spring.xml