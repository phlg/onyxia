import * as catalog from "./catalog";
import * as deploymentRegionManagement from "./deploymentRegionManagement";
import * as fileExplorer from "./fileExplorer";
import * as secretExplorer from "./secretExplorer";
import * as launcher from "./launcher";
import * as publicIp from "./publicIp";
import * as restorableConfigManagement from "./restorableConfigManagement";
import * as serviceManagement from "./serviceManagement";
import * as userAuthentication from "./userAuthentication";
import * as userConfigs from "./userConfigs";
import * as secretsEditor from "./secretsEditor";
import * as s3Credentials from "./s3Credentials";
import * as k8sCredentials from "./k8sCredentials";
import * as vaultCredentials from "./vaultCredentials";
import * as userAccountManagement from "./userAccountManagement";
import * as sqlOlapShell from "./sqlOlapShell";
import * as dataExplorer from "./dataExplorer";
import * as projectManagement from "./projectManagement";

export const usecases = {
    catalog,
    deploymentRegionManagement,
    fileExplorer,
    secretExplorer,
    launcher,
    publicIp,
    restorableConfigManagement,
    serviceManagement,
    userAuthentication,
    userConfigs,
    secretsEditor,
    s3Credentials,
    k8sCredentials,
    vaultCredentials,
    userAccountManagement,
    sqlOlapShell,
    dataExplorer,
    projectManagement
};
