import CodeHighlighter from '@components/CodeHighlighter';
import React from 'react';
import './BasicWebpack.css';

function BasicWebpack() {
  const data = {
    path: `
    /*
    src 폴더안에 index.js가 있고 dist 폴더가 존재해야 터미널에서 명령어로 webpack를 실행할수있다.
    /dist , /src/index.js

    wewbpack 실행시 target이란 어떤 환경에서 실행되는지 설정해주는것! 웹팩에게 어떠한 환경인지 알려준다.
    npx webpack --target=node
     */
    `,
    path2: `
    const path = require("path");
    // D:\\webpack_prac\\01_webpack\\src 내가 사용한 파일의 절대 경로
    console.log(__dirname);

    const pathTest = path.resolve(__dirname, "abc");
    // D:\\webpack_prac\\01_webpack\\src\\abc 내가 사용한 파일의 절대 경로에서 abc 추가!
    console.log(pathTest);
    `,
    path3: `
    // __dirname 과 path 내장모듈로 경로를 만든다.
    const path = require("path");
    module.exports = {
      // main이 되는 파일 경로
      entry: "./src/index.js",
      // 파일이 생성되는 경로이고, 절대경로로 설정해주어야한다. __dirname으로 파일 경로 생성
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
      },
      // 웹팩이 인식할수있도록 환경이 무엇인지 target으로 설정
      target: "node",
    };

    `,
    path4:`
    // Loader
    module.exports ={
        module:{
            rules:[loader1,loader2..]
        }
    }`
  };
  return (
    <div>
      <div className="r_con">
        <h2>webpack</h2>
        <p>
          <a href="https://webpack.js.org/" target="_blank">
            Webpack
          </a>
          이란 번들러이다.
        </p>
        <div>웹팩은 모듈들을 모아 번들링을 해주는 것!</div>
        <p>bundle이 중요한 이유</p>
        <ul>
          <li>- 모듈을 모아주기 때문에 모듈을 로드하기 위해 검색하는 시간이 단축 .</li>
          <li>- 사용되지 않는 코드를 제거해준다</li>
          <li>- 파일 크기를 줄여준다.</li>
        </ul>
        <div className="box_container">
          <h3>1. Webpack 기본 설정</h3>
          <div className="content_box">
            <h4>- 기본</h4>
            <div>우선 package.json 생성</div>
            <CodeHighlighter type="javascript" content="npm init -y" />
            <div>- Webpack 설치</div>
            <p>webpack-cli 는 웹팩 명령어를 실행해줄 수 있는 패키지이다.</p>
            <CodeHighlighter type="javascript" content=" npm i webpack webpack-cli --save-dev" />
            <div>- Webpack 실행</div>
            <p>
              npx 란 node_modules 폴더에서 실행파일을 찾아 실행할수 있게 해주는 명령어이다.(node_modules/.bin
              폴더에접근하여 실행)
            </p>
            <CodeHighlighter type="javascript" content=" npx webpack" />
            <CodeHighlighter type="javascript" content={data.path} />
          </div>
          <div className="content_box">
            <div className="title">1. Webpack 설정 파일</div>
            <p>내장 모듈인 path와 __dirname를 사용하여 entry와 out Webpack 설정을 해준다.</p>
            <CodeHighlighter type="javascript" content={data.path2} />
            <CodeHighlighter type="javascript" content={data.path3} />
          </div>
          <div className="content_box">
            <div>Loader</div>
            <p>Loader 설정</p>
            <CodeHighlighter type="javascript" content={data.path4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicWebpack;
