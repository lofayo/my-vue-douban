/**
 * 根据传入的星级数字，序列为一个数组
 */
const starArray = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1]
]

function addStarArray(subjects) {
  // 根据subjects为数组或json对象，选择性的加星
  // 给数组里的每个subject加星
  if (Array.isArray(subjects)) {
    for (let i = 0; i < subjects.length; i++) {
      let stars = subjects[i].rating.stars
      subjects[i].rating['star'] = starArray[Math.round(stars / 10)]
    }
  } else {
    // 给单个json对象的subject
    let stars = subjects.rating.stars
    subjects.rating['star'] = starArray[Math.round(stars / 10)]
  }

}

// 判断空json对象的方法
function isEmptyJson(json) {
  let result = true;
  for (let key in json) {
    result = false;
    break;
  }
  return result;
}

export default {
  addStarArray: addStarArray,
  isEmptyJson: isEmptyJson
}
