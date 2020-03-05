// 悬浮窗位置
let x = 0
let y = 0
// 悬浮窗是否显示
showStatus = false

/**
 * 替换文案
 * @param {string} content 原文案
 */
function replaceSentence(content) {
  let tklPattern = /([a-zA-Z0-9]{11})/
  let onSalePattern = /【在售价】(\S+)元/
  let afterPattern = /【抢购价】(\S+)元/

  let tkl = tklPattern.exec(content)[0]
  let onSale = onSalePattern.exec(content)[1]
  let after = afterPattern.exec(content)[1]
  let title = content.split('\n')[0]
  let result =
    "❤️❤️❤️❤️❤️❤️❤️❤️\n" + title +"\n【原价】 " +
    onSale +
    "元\n【券后价】" +
    after +
    "元\n-------------------\n復製这条(" +
    tkl +
    ")\n进入【Tao宝】即可抢购"
  return result
}

function showFloat() {
  w.setPosition(x, y)
  showStatus = true
}

function hideFloat() {
  x = w.getX()
  y = w.getY()
  w.setPosition(-1000, -1000)
  showStatus = false
}

// 初始化
var w = floaty.window(
  <frame gravity="center">
    <button text="复制修改后的文案" id="copybtn" />
  </frame>
)
w.setAdjustEnabled(true)
w.exitOnClose()
x = device.width * 0.05
y = device.height * 0.52
w.setPosition(x, y)
w.copybtn.click(function() {
  if (textContains("【在售价】").exists()) {
    let textArea = textContains("【在售价】").findOne()
    let text = textArea.text()
    let result = replaceSentence(text)
    setClip(result)
    toast("复制成功")
  } else {
    toast('请前往分享界面')
  }
})
// hideFloat()

// 进程：仅在复制文案界面，显示悬浮窗
// setInterval(() => {
//   let flag = text("复制文案").exists() || desc('复制文案').exists()
//   if (flag) {
//     if (!showStatus) {
//       showFloat()
//     }
//   } else {
//     if (showStatus) {
//       hideFloat()
//     }
//   }
// }, 100)

setInterval(() => {
}, 1000);