import React, {useEffect, useState} from "react";
import "./becam.scss";

import {message, Upload} from "antd";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";

import {Link} from "react-router-dom";
import {Power3, TimelineMax} from "gsap";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

function _animation() {
    let t1 = new TimelineMax();
    useEffect(() => {
        t1.from(".upload_anim_1", 2, {
            opacity: 0,
            y: "20%",
            ease: Power3.easeInOut
        })
            .from(".upload_anim_2", 1, {
                opacity: 0,
                y: "20%",
                ease: Power3.easeInOut
            })
            .from(".upload_anim_3", 1, {
                opacity: 0,
                y: "20%",
                ease: Power3.easeInOut
            })
            .from(".becam_info", 1, {
                opacity: 0,
                y: "20%",
                ease: Power3.easeInOut
            });
    }, []);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
}

function Index() {
    _animation();
    const [state, setState] = useState({
        loading: false,
        imageUrls: []
    });

    const handleChange = (info, i) => {
        if (info.file.status === "uploading") {
            setState({...state, loading: true});
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                let imgs = state.imageUrls;
                imgs[i] = imageUrl;
                setState({
                    ...state,
                    loading: false,
                    imageUrls: imgs
                });
            });
        }
    };

    const uploadButton = (
        <div>
            {state.loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div className='ant-upload-text'>Upload</div>
        </div>
    );

    const {imageUrls} = state;

    function displayUploads(size) {
        const uploads = [];

        for (let i = 1; i <= size; i++) {
            uploads.push(
                <Upload
                    name='avatar'
                    listType='picture-card'
                    className={"avatar-uploader upload_anim_" + i}
                    showUploadList={false}
                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                    beforeUpload={beforeUpload}
                    onChange={info => handleChange(info, i)}
                >
                    {imageUrls[i] ? (
                        <div
                            className='image'
                            style={{
                                backgroundImage: `url(${imageUrls[i]})`
                            }}
                        ></div>
                    ) : (
                        uploadButton
                    )}
                </Upload>
            );
        }

        return uploads;
    }

    return (
        <div className='becam_model'>
            {displayUploads(3)}

            <div className='becam_info'>
                <div className='midle_input'>
                    <div className='group_input'>
                        <span>name :</span>
                        <input className='input' type='text' placeholder='artkodes'/>
                    </div>
                    <div className='group_input'>
                        <span>email :</span>
                        <input
                            className='input'
                            type='email'
                            placeholder='hello@artkodes.com'
                        />
                    </div>
                    <div className='group_input'>
                        <span>phone :</span>
                        <input
                            className='input'
                            type='number'
                            placeholder='04 76 87 31 89'
                        />
                    </div>
                    <div className='group_input'>
                        <span>city :</span>
                        <input className='input' type='text' placeholder='Lyon'/>
                    </div>
                </div>

                <Link to={"/"}>
                    <button className='btn'>continue</button>
                </Link>
            </div>
        </div>
    );
}

export default Index;
