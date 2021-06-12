import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Typography, Button, ListItem, withStyles } from '@material-ui/core';

const UploadResume = () => {
    const [selecetdFiles, setSelectedFiles] = useState();
    const [progress, setProgress] = useState(0);


    return(
        <div className="mg20">
        {currentFile && (
          <Box className="mb25" display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
            </Box>
          </Box>)
        }

        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={this.selectFile} />
          <Button
            className="btn-choose"
            variant="outlined"
            component="span" >
             Choose Files
          </Button>
        </label>
        <div className="file-name">
        {selectedFiles && selectedFiles.length > 0 ? selectedFiles[0].name : null}
        </div>
        <Button
          className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          disabled={!selectedFiles}
          onClick={this.upload}>
          Upload
        </Button>

        <Typography variant="subtitle2" className={`upload-message ${isError ? "error" : ""}`}>
          {message}
        </Typography>

        <Typography variant="h6" className="list-header">
          List of Files
          </Typography>
        <ul className="list-group">
          {fileInfos &&
            fileInfos.map((file, index) => (
              <ListItem
                divider
                key={index}>
                <a href={file.url}>{file.name}</a>
              </ListItem>
            ))}
        </ul>
      </div >
    )
}

export default UploadResume;