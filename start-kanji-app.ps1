$ErrorActionPreference = "Stop"

$appDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 5177
$url = "http://localhost:$port/index.html"

Set-Location $appDir

Write-Host ""
Write-Host "かんじサポートを起動します。"
Write-Host "Chromeで $url を開きます。"
Write-Host "終了するときは、この画面で Ctrl + C を押してください。"
Write-Host ""

if (Get-Command chrome.exe -ErrorAction SilentlyContinue) {
  Start-Process chrome.exe $url
} else {
  Start-Process $url
}

if (Get-Command py -ErrorAction SilentlyContinue) {
  py -m http.server $port
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server $port
} else {
  Write-Host "Pythonが見つかりませんでした。index.htmlを直接Chromeで開いてください。"
  Read-Host "Enterで閉じます"
}
