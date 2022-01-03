//NS1 to NS2 Converter
function fixTex999tarea(textarea) {
    textarea.value = textarea.value
        .replaceAll("ns.sleep (", "await ns.sleep(")
        .replaceAll("ns.sleep(", "await ns.sleep(")
        .replaceAll("ns.grow (", "await ns.grow(")
        .replaceAll("ns.grow(", "await ns.grow(")
        .replaceAll("ns.hack (", "await ns.hack(")
        .replaceAll("ns.hack(", "await ns.hack(")
        .replaceAll("ns.prompt (", "await ns.prompt(")
        .replaceAll("ns.prompt(", "await ns.prompt(")
        .replaceAll("ns.scp (", "await ns.scp(")
        .replaceAll("ns.scp(", "await ns.scp(")
        .replaceAll("ns.weaken (", "await ns.weaken(")
        .replaceAll("ns.weaken(", "await ns.weaken(")
        .replaceAll("ns.wget (", "await ns.wget(")
        .replaceAll("ns.wget(", "await ns.wget(")
        .replaceAll("ns.write (", "await ns.write(")
        .replaceAll("ns.write(", "await ns.write(")
        .replaceAll("ns.writePort (", "await ns.writePort(")
        .replaceAll("ns.writePort(", "await ns.writePort(")
        .replaceAll("args [", "ns.args [")
        .replaceAll("args[", "ns.args[")
        .replaceAll("alert (", "ns.alert(")
        .replaceAll("alert(", "ns.alert(")
        .replaceAll("sleep (", "await ns.sleep(")
        .replaceAll("sleep(", "await ns.sleep(")
        .replaceAll("atExit (", "ns.atExit(")
        .replaceAll("atExit(", "ns.atExit(")
        .replaceAll("brutessh (", "ns.brutessh(")
        .replaceAll("brutessh(", "ns.brutessh(")
        .replaceAll("cacheUpgradeCost (", "ns.cacheUpgradeCost(")
        .replaceAll("cacheUpgradeCost(", "ns.cacheUpgradeCost(")
        .replaceAll("calculateExp (", "ns.calculateExp(")
        .replaceAll("calculateExp(", "ns.calculateExp(")
        .replaceAll("calculateSkill (", "ns.calculateSkill(")
        .replaceAll("calculateSkill(", "ns.calculateSkill(")
        .replace(/\bclear\s*\(/g, "ns.clear(")
        .replace(/\bclear*\(/g, "ns.clear(")
        .replaceAll("clearLog (", "ns.clearLog(")
        .replaceAll("clearLog(", "ns.clearLog(")
        .replaceAll("clearPort (", "ns.clearPort(")
        .replaceAll("clearPort(", "ns.clearPort(")
        .replaceAll("deleteServer (", "ns.deleteServer(")
        .replaceAll("deleteServer(", "ns.deleteServer(")
        .replaceAll("disableLog (", "ns.disableLog(")
        .replaceAll("disableLog(", "ns.disableLog(")
        .replaceAll("enableLog (", "ns.enableLog(")
        .replaceAll("enableLog(", "ns.enableLog(")
        .replaceAll("exec (", "ns.exec(")
        .replaceAll("exec(", "ns.exec(")
        .replaceAll("exit (", "ns.exit(")
        .replaceAll("exit(", "ns.exit(")
        .replaceAll("fileExists (", "ns.fileExists(")
        .replaceAll("fileExists(", "ns.fileExists(")
        .replaceAll("flags (", "ns.flags(")
        .replaceAll("flags(", "ns.flags(")
        .replaceAll("ftpcrack (", "ns.ftpcrack(")
        .replaceAll("ftpcrack(", "ns.ftpcrack(")
        .replaceAll("getBitNodeMultipliers (", "ns.getBitNodeMultipliers(")
        .replaceAll("getBitNodeMultipliers(", "ns.getBitNodeMultipliers(")
        .replaceAll("getFavorToDonate (", "ns.getFavorToDonate(")
        .replaceAll("getFavorToDonate(", "ns.getFavorToDonate(")
        .replaceAll("getGrowTime (", "ns.getGrowTime(")
        .replaceAll("getGrowTime(", "ns.getGrowTime(")
        .replaceAll("getHackingLevel (", "ns.getHackingLevel(")
        .replaceAll("getHackingLevel(", "ns.getHackingLevel(")
        .replaceAll("getHackingMultipliers (", "ns.getHackingMultipliers(")
        .replaceAll("getHackingMultipliers(", "ns.getHackingMultipliers(")
        .replaceAll("getHacknetMultipliers (", "ns.getHacknetMultipliers(")
        .replaceAll("getHacknetMultipliers(", "ns.getHacknetMultipliers(")
        .replaceAll("getHostname (", "ns.getHostname(")
        .replaceAll("getHostname(", "ns.getHostname(")
        .replaceAll("getOwnedSourceFiles (", "ns.getOwnedSourceFiles(")
        .replaceAll("getOwnedSourceFiles(", "ns.getOwnedSourceFiles(")
        .replaceAll("getPlayer (", "ns.getPlayer(")
        .replaceAll("getPlayer(", "ns.getPlayer(")
        .replaceAll("getPortHandle (", "ns.getPortHandle(")
        .replaceAll("getPortHandle(", "ns.getPortHandle(")
        .replaceAll("getPurchasedServerCost (", "ns.getPurchasedServerCost(")
        .replaceAll("getPurchasedServerCost(", "ns.getPurchasedServerCost(")
        .replaceAll("getPurchasedServerLimit (", "ns.getPurchasedServerLimit(")
        .replaceAll("getPurchasedServerLimit(", "ns.getPurchasedServerLimit(")
        .replaceAll("getPurchasedServerMaxRam (", "ns.getPurchasedServerMaxRam(")
        .replaceAll("getPurchasedServerMaxRam(", "ns.getPurchasedServerMaxRam(")
        .replaceAll("getPurchasedServers (", "ns.getPurchasedServers(")
        .replaceAll("getPurchasedServers(", "ns.getPurchasedServers(")
        .replaceAll("getRunningScript (", "ns.getRunningScript(")
        .replaceAll("getRunningScript(", "ns.getRunningScript(")
        .replaceAll("getScriptExpGain (", "ns.getScriptExpGain(")
        .replaceAll("getScriptExpGain(", "ns.getScriptExpGain(")
        .replaceAll("getScriptIncome (", "ns.getScriptIncome(")
        .replaceAll("getScriptIncome(", "ns.getScriptIncome(")
        .replaceAll("getScriptLogs (", "ns.getScriptLogs(")
        .replaceAll("getScriptLogs(", "ns.getScriptLogs(")
        .replaceAll("getScriptName (", "ns.getScriptName(")
        .replaceAll("getScriptName(", "ns.getScriptName(")
        .replaceAll("getScriptRam (", "ns.getScriptRam(")
        .replaceAll("getScriptRam(", "ns.getScriptRam(")
        .replaceAll("getServer (", "ns.getServer(")
        .replaceAll("getServer(", "ns.getServer(")
        .replaceAll("getServerBaseSecurityLevel (", "ns.getServerBaseSecurityLevel(")
        .replaceAll("getServerBaseSecurityLevel(", "ns.getServerBaseSecurityLevel(")
        .replaceAll("getServerGrowth (", "ns.getServerGrowth(")
        .replaceAll("getServerGrowth(", "ns.getServerGrowth(")
        .replaceAll("getServerMaxMoney (", "ns.getServerMaxMoney(")
        .replaceAll("getServerMaxMoney(", "ns.getServerMaxMoney(")
        .replaceAll("getServerMaxRam (", "ns.getServerMaxRam(")
        .replaceAll("getServerMaxRam(", "ns.getServerMaxRam(")
        .replaceAll("getServerMinSecurityLevel (", "ns.getServerMinSecurityLevel(")
        .replaceAll("getServerMinSecurityLevel(", "ns.getServerMinSecurityLevel(")
        .replaceAll("getServerMoneyAvailable (", "ns.getServerMoneyAvailable(")
        .replaceAll("getServerMoneyAvailable(", "ns.getServerMoneyAvailable(")
        .replaceAll("getServerNumPortsRequired (", "ns.getServerNumPortsRequired(")
        .replaceAll("getServerNumPortsRequired(", "ns.getServerNumPortsRequired(")
        .replaceAll("getServerRam (", "ns.getServerRam(")
        .replaceAll("getServerRam(", "ns.getServerRam(")
        .replaceAll("getServerRequiredHackingLevel (", "ns.getServerRequiredHackingLevel(")
        .replaceAll("getServerRequiredHackingLevel(", "ns.getServerRequiredHackingLevel(")
        .replaceAll("getServerSecurityLevel (", "ns.getServerSecurityLevel(")
        .replaceAll("getServerSecurityLevel(", "ns.getServerSecurityLevel(")
        .replaceAll("getServerUsedRam (", "ns.getServerUsedRam(")
        .replaceAll("getServerUsedRam(", "ns.getServerUsedRam(")
        .replaceAll("getTimeSinceLastAug (", "ns.getTimeSinceLastAug(")
        .replaceAll("getTimeSinceLastAug(", "ns.getTimeSinceLastAug(")
        .replaceAll("getWeakenTime (", "ns.getWeakenTime(")
        .replaceAll("getWeakenTime(", "ns.getWeakenTime(")
        .replaceAll("grow (", "await ns.grow(")
        .replaceAll("grow(", "await ns.grow(")
        .replaceAll("growthAnalyze (", "ns.growthAnalyze(")
        .replaceAll("growthAnalyze(", "ns.growthAnalyze(")
        .replaceAll("growthAnalyzeSecurity (", "ns.growthAnalyzeSecurity(")
        .replaceAll("growthAnalyzeSecurity(", "ns.growthAnalyzeSecurity(")
        .replaceAll("hack (", "await ns.hack(")
        .replaceAll("hack(", "await ns.hack(")
        .replaceAll("hackAnalyze (", "ns.hackAnalyze(")
        .replaceAll("hackAnalyze(", "ns.hackAnalyze(")
        .replaceAll("hackAnalyzeChance (", "ns.hackAnalyzeChance(")
        .replaceAll("hackAnalyzeChance(", "ns.hackAnalyzeChance(")
        .replaceAll("hackAnalyzeSecurity (", "ns.hackAnalyzeSecurity(")
        .replaceAll("hackAnalyzeSecurity(", "ns.hackAnalyzeSecurity(")
        .replaceAll("hackAnalyzeThreads (", "ns.hackAnalyzeThreads(")
        .replaceAll("hackAnalyzeThreads(", "ns.hackAnalyzeThreads(")
        .replaceAll("hacknetServerCost (", "ns.hacknetServerCost(")
        .replaceAll("hacknetServerCost(", "ns.hacknetServerCost(")
        .replaceAll("hackTime (", "ns.hackTime(")
        .replaceAll("hackTime(", "ns.hackTime(")
        .replaceAll("hashGainRate (", "ns.hashGainRate(")
        .replaceAll("hashGainRate(", "ns.hashGainRate(")
        .replaceAll("hashUpgradeCost (", "ns.hashUpgradeCost(")
        .replaceAll("hashUpgradeCost(", "ns.hashUpgradeCost(")
        .replaceAll("hasRootAccess (", "ns.hasRootAccess(")
        .replaceAll("hasRootAccess(", "ns.hasRootAccess(")
        .replaceAll("httpworm (", "ns.httpworm(")
        .replaceAll("httpworm(", "ns.httpworm(")
        .replaceAll("isLogEnabled (", "ns.isLogEnabled(")
        .replaceAll("isLogEnabled(", "ns.isLogEnabled(")
        .replaceAll("isRunning (", "ns.isRunning(")
        .replaceAll("isRunning(", "ns.isRunning(")
        .replace(/\bkill\s*\(/g, "ns.kill(")
        .replace(/\bkill*\(/g, "ns.kill(")
        .replaceAll("killall (", "ns.killall(")
        .replaceAll("killall(", "ns.killall(")
        .replace(/\bls\s*\(/g, "ns.ls(")
        .replace(/\bls*\(/g, "ns.ls(")
        .replaceAll("nFormat (", "ns.nFormat(")
        .replaceAll("nFormat(", "ns.nFormat(")
        .replaceAll("nuke (", "ns.nuke(")
        .replaceAll("nuke(", "ns.nuke(")
        .replaceAll("peek (", "ns.peek(")
        .replaceAll("peek(", "ns.peek(")
        .replace(/\bprint\s*\(/g, "ns.print(")
        .replace(/\bprint*\(/g, "ns.print(")
        .replaceAll("prompt (", "await ns.prompt(")
        .replaceAll("prompt(", "await ns.prompt(")
        .replace(/\bps\s*\(/g, "ns.ps(")
        .replace(/\bps*\(/g, "ns.ps(")
        .replaceAll("purchaseServer (", "ns.purchaseServer(")
        .replaceAll("purchaseServer(", "ns.purchaseServer(")
        .replaceAll("read (", "ns.read(")
        .replaceAll("read(", "ns.read(")
        .replaceAll("readPort (", "ns.readPort(")
        .replaceAll("readPort(", "ns.readPort(")
        .replaceAll("relaysmtp (", "ns.relaysmtp(")
        .replaceAll("relaysmtp(", "ns.relaysmtp(")
        .replace(/\brm\s*\(/g, "ns.rm(")
        .replace(/\brm*\(/g, "ns.rm(")
        .replaceAll("run (", "ns.run(")
        .replaceAll("run(", "ns.run(")
        .replaceAll("scan (", "ns.scan(")
        .replaceAll("scan(", "ns.scan(")
        .replaceAll("scp (", "await ns.scp(")
        .replaceAll("scp(", "await ns.scp(")
        .replaceAll("scriptKill (", "ns.scriptKill(")
        .replaceAll("scriptKill(", "ns.scriptKill(")
        .replaceAll("scriptRunning (", "ns.scriptRunning(")
        .replaceAll("scriptRunning(", "ns.scriptRunning(")
        .replaceAll("serverExists (", "ns.serverExists(")
        .replaceAll("serverExists(", "ns.serverExists(")
        .replace(/\bsleep\s*\(/g, "await ns.sleep(")
        .replace(/\bsleep*\(/g, "await ns.sleep(")
        .replaceAll("spawn (", "ns.spawn(")
        .replaceAll("spawn(", "ns.spawn(")
        .replace(/\bsprintf\s*\(/g, "ns.sprintf(")
        .replace(/\bsprintf*\(/g, "ns.sprintf(")
        .replaceAll("sqlinject (", "ns.sqlinject(")
        .replaceAll("sqlinject(", "ns.sqlinject(")
        .replaceAll("tail (", "ns.tail(")
        .replaceAll("tail(", "ns.tail(")
        .replaceAll("tFormat (", "ns.tFormat(")
        .replaceAll("tFormat(", "ns.tFormat(")
        .replaceAll("toast (", "ns.toast(")
        .replaceAll("toast(", "ns.toast(")
        .replaceAll("tprint (", "ns.tprint(")
        .replaceAll("tprint(", "ns.tprint(")
        .replaceAll("tprintf (", "ns.tprintf(")
        .replaceAll("tprintf(", "ns.tprintf(")
        .replaceAll("tryWritePort (", "ns.tryWritePort(")
        .replaceAll("tryWritePort(", "ns.tryWritePort(")
        .replaceAll("unlockUpgrade (", "ns.unlockUpgrade(")
        .replaceAll("unlockUpgrade(", "ns.unlockUpgrade(")
        .replaceAll("vsprintf (", "ns.vsprintf(")
        .replaceAll("vsprintf(", "ns.vsprintf(")
        .replaceAll("weaken (", "await ns.weaken(")
        .replaceAll("weaken(", "await ns.weaken(")
        .replaceAll("weakenAnalyze (", "ns.weakenAnalyze(")
        .replaceAll("weakenAnalyze(", "ns.weakenAnalyze(")
        .replaceAll("wget (", "await ns.wget(")
        .replaceAll("wget(", "await ns.wget(")
        .replaceAll("write (", "await ns.write(")
        .replaceAll("write(", "await ns.write(")
        .replaceAll("writePort (", "await ns.writePort(")
        .replaceAll("writePort(", "await ns.writePort(")

    .replaceAll("bladeburner.", "ns.bladeburner.")
        .replaceAll("codingcontract.", "ns.codingcontract.")
        .replaceAll("corporation.", "ns.corporation.")
        .replaceAll("formulas.", "ns.formulas.")
        .replaceAll("gang.", "ns.gang.")
        .replaceAll("hacknet.", "ns.hacknet.")
        .replaceAll("sleeve.", "ns.sleeve.")
        .replaceAll("stanek.", "ns.stanek.")
        .replace(/\bstock./g, "ns.stock.")
        .replace(/\bui./g, "ns.ui.")

    .replaceAll("await await", "await")
        .replaceAll("await ns.ns.", "await")
        .replaceAll("ns.await", "ns.")
        .replaceAll("ns. ", "ns.")
        .replaceAll("ns.ns.ns.ns.", "ns.")
        .replaceAll("ns.ns.ns.", "ns.")
        .replaceAll("ns.ns.", "ns.")
        .replaceAll("ns. ns.", "ns.")

    // If textarea has no "@param" and "main(ns)" yet, add both etc.
    if (!textarea.value.includes("@param {NS}") && !textarea.value.includes("main (ns)") && !textarea.value.includes("main(ns)")) {
        textarea.value = '/** @param {NS} ns **/\nexport async function main(ns) {\n' + textarea.value + '\n}'
    }

    // If textarea has no "@param" but has "main(ns)", add "@param"
    if (!textarea.value.includes("@param {NS}") && (textarea.value.includes("main (ns)") || textarea.value.includes("main(ns)"))) {
        textarea.value = '/** @param {NS} ns **/\n' + textarea.value

    }

    // If textarea has no "main(ns)" but has "@param", add "main(ns)"
    if (textarea.value.includes("@param {NS}") && !textarea.value.includes("main (ns)") && !textarea.value.includes("main(ns)")) {
        textarea.value = textarea.value.replaceAll("/** @param {NS} ns **/", "")
        textarea.value = '/** @param {NS} ns **/\nexport async function main(ns) {\n' + textarea.value + '\n}'
    }

};

function fixtext999() {
    let textarea = document.getElementById("textarea3");
    textarea.select();
    fixTex999tarea(textarea);
}