// import data from './three.js-dev/examples/webgl_geometry_teapot.html';
import React from 'react';
import { Carousel, Flex, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import PropTypes from "prop-types";

import LoadingHoc from "../../../../common/loading/loading-hoc.jsx";
import Layout from "../../../../common/layout/layout.jsx";
import { createForm } from 'rc-form';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';


let cartProps;
let buyProps;

class WebAR extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };


    }

    componentWillMount() {
        console.groupCollapsed("WebAR页");

    }

    componentDidMount() {
        // WxManager.share();
        // this.init();
    }

    // componentWillUnmount() {
    //     console.groupEnd();
    // }



    // // 父组件调用子组件的方法
    // onRef = (ref) => {
    //     this.child = ref
    // };

    // handleAction(e) {
    //     this.setState({ action: e });
    // }
   



    render() {


        // var data = require("html-loader!./three.js-dev/examples/webgl_geometry_teapot.html");

        return <Layout>
            <div
                style={{margin:0}}
            />
            
            复制 <a href="#">https://39.96.182.123/demo/arobjdemo/basic.html</a>,在Safari或者Google浏览器打开
            {/* <iframe
                title="resg"
                srcDoc={data}
                style={{ width: '100%', border: '0px', height: '1100px' }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                scrolling="auto"
            /> */}
        </Layout>
    }
}
// const BasicInputExampleWrapper = createForm()(WebAR);
// export default BasicInputExampleWrapper;
export default LoadingHoc(WebAR);

WebAR.contextTypes = {
    router: PropTypes.object.isRequired
};