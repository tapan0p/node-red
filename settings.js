module.exports = {
    flowFile: "flows.json",
    flowFilePretty: true,
  
    uiPort: process.env.PORT || 1880,
  
  
    nodesExcludes: [],
  
    diagnostics: {
      enabled: true,
      ui: true,
    },
    runtimeState: {
      enabled: false,
      ui: false,
    },
    logging: {
      console: {
        level: "info",
        metrics: false,
        audit: false,
      },
    },
  
    exportGlobalContextKeys: false,
  
    externalModules: {},
  
    editorTheme: {
      palette: {},
  
      projects: {
        enabled: false,
        workflow: {
          mode: "manual",
        },
      },
  
      codeEditor: {
        lib: "monaco",
        options: {},
      },
  
      markdownEditor: {
        mermaid: {
          enabled: true,
        },
      },
  
      multiplayer: {
        enabled: false,
      },
    },
  
    functionExternalModules: true,
  
    functionTimeout: 0,
  
    functionGlobalContext: {},
  
    debugMaxLength: 1000,
  
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
  };
  