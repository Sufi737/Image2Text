import React from "react";

const DragDropFile = ({setImage}) => {

    const [dragActive, setDragActive] = React.useState(false);
    const [filename, setFilename] = React.useState("No image uploaded");

    const inputRef = React.useRef(null);
  
    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            let file = e.dataTransfer.files[0]
            if (file.type != "image/png" && file.type !="image/jpeg" && file.type != "image/jpg") {
                setFilename("The uploaded file type is not supported. Make sure you are uploading an image")
            } else {
                setFilename(file.name)
            }
            setImage(file)
        }
    };

    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            let file = e.target.files[0]
            if (file.type != "image/png" && file.type !="image/jpeg" && file.type != "image/jpg") {
                setFilename("The uploaded file type is not supported. Make sure you are uploading an image")
            } else {
                setFilename(file.name)
            }
            setImage(file)
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div id="image-upload-wrapper">
            <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                <div>
                    <p>Drag and drop your file here or</p>
                    <button className="upload-button" onClick={onButtonClick}>Upload Image</button>
                    <div id="filename">{filename}</div>
                </div> 
                </label>
                { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </form>
        </div>
    );
};

export default DragDropFile;