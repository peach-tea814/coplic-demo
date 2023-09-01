// 动态计算宽高
// ratio 比例16:9 ratio = "16:9"
// width\height 传入的设备的宽和高

function calculateVideoSize(ratio, width, height) {
  //将 ratio 字符串按照 : 分隔成两个字符串，并使用 map() 方法将其转化为数字类型，得到 ratioArr 数组为 [16, 9]。
  const ratioArr = ratio.split(":").map(Number);
  const styleObj = {
    videoWidth: "",
    videoHeight: "",
  };
  // 根据宽度计算高度
  const videoHeight = (width * ratioArr[1]) / ratioArr[0];
  styleObj.videoWidth = width;
  styleObj.videoHeight = videoHeight;
  //如果高度大于设备高度，那么视频的高度为设备的高度，再根据高度计算宽度。
  if (videoHeight > height) {
    console.log("高度超出了");
    styleObj.videoHeight = height;
    // 根据高度计算宽度
    // styleObj.videoWidth = (height / ratioArr[1]) * ratioArr[0];
    styleObj.videoWidth = height * (ratioArr[0] / ratioArr[1]);
  }
  return styleObj;
}

const a = calculateVideoSize("16:9", 390, 844);
const b = calculateVideoSize("16:9", 844, 390);
console.log("竖屏", a);
console.log("横屏", b);
console.log(16 / 9);
console.log(390 * 1.777);
