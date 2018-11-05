function treeObj(originObj) {
  let objClone = Array.isArray(originObj) ? [] : {}
  if (originObj && typeof originObj === 'object') {
    for (var key in originObj) {
      if (originObj.hasOwnProperty(key)) {
        if (originObj[key] && typeof originObj[key] === 'object') {
          objClone[key] = treeObj(originObj[key])
        } else {
          objClone[key] = originObj[key]
        }
      }
    }
  }
  if (!Array.isArray(originObj)) {
    objClone['children'] = []
  }
  return objClone
}

export function toTreeData(data, attributes) {
  let resData = data;
  let tree = [];

  for (let i = 0; i < resData.length; i++) {

    if (resData[i][attributes.parentId] === '' || resData[i][attributes.parentId] === null || resData[i][attributes.parentId] === 'None' || (attributes.root && resData[i][attributes.parentId] === attributes.root)) {
      tree.push(treeObj(resData[i]));
      resData.splice(i, 1);
      i--;
    }
  }

  run(tree)
  function run(chiArr) {
    if (resData.length !== 0) {
      for (let i = 0; i < chiArr.length; i++) {
        for (let j = 0; j < resData.length; j++) {
          if (chiArr[i][attributes.id] === resData[j][attributes.parentId]) {
            let obj = treeObj(resData[j]);
            chiArr[i].children.push(obj);
            resData.splice(j, 1);
            j--;
          }
        }
        run(chiArr[i].children);
      }
    }
  }
  return tree;
}