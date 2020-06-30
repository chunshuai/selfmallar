// import data from './three.js-dev/examples/webgl_geometry_teapot.html';
import React from 'react';
import { Carousel, Flex, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import PropTypes from "prop-types";

import LoadingHoc from "../../../../common/loading/loading-hoc.jsx";
import Layout from "../../../../common/layout/layout.jsx";
import { createForm } from 'rc-form';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {AMFLoader} from 'three/examples/jsm/loaders/AMFLoader';


let cartProps;
let buyProps;

class Web3D extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };


    }

    componentWillMount() {
        console.groupCollapsed("web3d页");

    }

    componentDidMount() {
        // WxManager.share();
        this.init4();
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
    init4 = () => {
        var camera, scene, renderer;
        var width = this.mount.clientWidth;
        var high = this.mount.clientHeight;
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x999999);
    
        scene.add(new THREE.AmbientLight(0x999999));
    
        camera = new THREE.PerspectiveCamera(35, this.mount.clientWidth / this.mount.clientHeight, 1, 500);
    
        // Z is up for objects intended to be 3D printed.
    
        camera.up.set(0, 0, 1);
        camera.position.set(0, - 9, 6);
    
        camera.add(new THREE.PointLight(0xffffff, 0.8));
    
        scene.add(camera);
    
        var grid = new THREE.GridHelper(50, 50, 0xffffff, 0x555555);
        grid.rotateOnAxis(new THREE.Vector3(1, 0, 0), 90 * (Math.PI / 180));
        scene.add(grid);
    
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
        this.mount.appendChild(renderer.domElement);
    
        var loader = new AMFLoader();
        var path="./source/models/amf/rook.amf";
        loader.load(path, function (amfobject) {
    
          scene.add(amfobject);
          render();
    
        });
    
        var controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', render);
        controls.target.set(0, 1.2, 2);
        controls.update();
    
        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
          camera.aspect = width / high;
          camera.updateProjectionMatrix();
    
          renderer.setSize(width,high);
          render();
    
          // camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
          // camera.updateProjectionMatrix();
    
          // renderer.setSize(this.mount.clientWidth , this.mount.clientHeight);
    
          // render();
    
        }
    
        function render() {
    
          renderer.render(scene, camera);
    
        }
    
      }
    init = () => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, this.mount.clientWidth / this.mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
        this.mount.appendChild(renderer.domElement);
        camera.position.z = 5;
        var axis = new THREE.AxisHelper(3);
        scene.add(axis);
        this.createCube()
        // this.createLine()
        this.animate();

    }

    createCube = () => {
        const geometry = new THREE.BoxGeometry(1, 2, 1, 4);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.cube = cube
        this.scene.add(cube);
    }

    createLine = () => {
        const material = new THREE.LineBasicMaterial({ color: 0x0f00ff }) //定义线的材质
        const geometry = new THREE.Geometry()
        geometry.vertices.push(new THREE.Vector3(-2, 0, 0))
        geometry.vertices.push(new THREE.Vector3(0, 2, 0)); //相当于是从 将前两个坐标连成一条线
        // geometry.vertices.push(new THREE.Vector3( 2, 0, 0) );
        const line = new THREE.Line(geometry, material)
        this.line = line
        line.position.x = -1
        line.position.y = 2
        this.scene.add(line)
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        // this.line.rotation.x += 0.02;
        // this.cube.translate(this.state.localX, this.state.localY, this.state.localZ);
        this.renderer.render(this.scene, this.camera);
    }




    render() {


        // var data = require("html-loader!./three.js-dev/examples/webgl_geometry_teapot.html");

        return <Layout>
            <div
                id="canvas"
                style={{ width: '100%', height: '100%', background: '#666' }}
                ref={(mount) => { this.mount = mount }}
            />
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
// const BasicInputExampleWrapper = createForm()(Web3D);
// export default BasicInputExampleWrapper;
export default LoadingHoc(Web3D);

// Web3D.contextTypes = {
//     router: PropTypes.object.isRequired
// };