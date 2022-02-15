    "version": "0.2.0",
    "configurations": [
        {
            "args": [
                "-u",
                "bdd",
                "--timeout",
                "999999",
                "--colors",
                "${file}"
                
            ],
            "internalConsoleOptions": "openOnSessionStart",
            "name": "Mocha Tests",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "pwa-node"
        }
      
    ]
}