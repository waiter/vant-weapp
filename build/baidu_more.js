const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const swan = `${root}/example_swan`;

console.log('--------------------------------------------------------');
console.log('开始执行Node脚本');

const allFile = {
  _un: [],
  wxs: [],
  js: [],
  swan: [],
};

function readDirSync(pp) {
  const pa = fs.readdirSync(pp);
  pa.forEach((ele) => {
    const np = `${pp}/${ele}`;
    const info = fs.statSync(np);
    if (info.isDirectory()) {
      readDirSync(np);
    } else {
      const pos = ele.lastIndexOf('.');
      if (pos > -1 && pos + 1 < ele.length) {
        const ext = ele.substr(pos + 1);
        allFile[ext] = allFile[ext] ? allFile[ext] : [];
        allFile[ext].push(np);
      } else {
        allFile._un.push(np);
      }
    }
  });
}

function deleteall(pp) {
  let files = [];
  if (fs.existsSync(pp)) {
    files = fs.readdirSync(pp);
    files.forEach((file) => {
      const curPath = `${pp}/${file}`;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteall(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pp);
  }
}

function copyFile(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}

readDirSync(swan);

// console.log(allFile.wxs);

allFile.wxs.forEach(it => {
  let isNeedSave = false;
  let data = fs.readFileSync(it, 'utf-8');
  if (data.indexOf('module.exports.') > -1) {
    throw new Error('暂未支持: ' + it);
  }
  if (data.indexOf('getRegExp') > -1) {
    console.log('存在getRegExp: ' + it);
  }
  if (data.indexOf('module.exports =') > -1) {
    data = data.replace(/module\.exports =/, 'export default')
    isNeedSave = true;
  }
  if (isNeedSave) {
    fs.writeFileSync(it, data);
  }
});

allFile.swan.forEach(it => {
  let isNeedSave = false;
  let data = fs.readFileSync(it, 'utf-8');

  // 替换所有 wxs
  if (data.indexOf('<wxs ') > -1) {
    data = data.replace(/<wxs /g, '<filter ');
    data = data.replace(/<\/wxs>/g, '</filter>');
    if (data.indexOf('module.exports.') > -1) {
      throw new Error('暂未支持: ' + it);
    }
    if (data.indexOf('getRegExp') > -1) {
      console.log('存在getRegExp: ' + it);
    }
    if (data.indexOf('module.exports =') > -1) {
      data = data.replace(/module\.exports =/, 'export default')
    }
    isNeedSave = true;
    // console.log(data);
    // throw new Error('hhhh')
  }

  // 替换不带协议头的图片
  if (data.indexOf('src="//') > -1) {
    data = data.replace(/src="\/\//g, 'src="https//');
    isNeedSave = true;
  }

  // 替换未被完全转换的 wx-if
  if (/wx-(if|elif|else|for)=/.test(data)) {
    console.log('存在未替换的wx-: ', it);
    data = data.replace(/wx-(if|elif|else|for)=/g, 's-$1=');
    isNeedSave = true;
  }

  // 替换全部样式中的 __ ，有风险，但是不替换容易各自样式异常
  if (/__/.test(data)) {
    data = data.replace(/__/g, '___');
    isNeedSave = true;
  }

  if (isNeedSave) {
    fs.writeFileSync(it, data);
  }
});

allFile.css.forEach(it => {
  let isNeedSave = false;
  let data = fs.readFileSync(it, 'utf-8');

  // 替换全部样式中的 __ ，有风险，但是不替换容易各自样式异常
  if (/__/.test(data)) {
    data = data.replace(/__/g, '___');
    isNeedSave = true;
  }

  if (isNeedSave) {
    fs.writeFileSync(it, data);
  }
});

allFile.js.forEach(it => {
  let isNeedSave = false;
  let data = fs.readFileSync(it, 'utf-8');

  // 替换全部样式中的 __ ，有风险，但是不替换容易各自样式异常
  if (/__/.test(data)) {
    data = data.replace(/__/g, '___');
    isNeedSave = true;
  }

  if (isNeedSave) {
    fs.writeFileSync(it, data);
  }
});

function checkAppId() {
  const appid = '16294727';
  // 让百度项目能直接认出appId
  fs.writeFileSync(`${swan}/project.swan.json`, JSON.stringify({
    appid,
    setting: {
      urlCheck: false
    }
  }));
}

checkAppId();
