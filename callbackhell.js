//here i have to tackele three problems firstly i have to write a dunnmy function to download data from url 
//then i have to save that downloaded dummy data in a file and return the file name then i have to upload the file 
//written in last step to a new URL 


function Fetchcoustumdata(url , fn) {
    console.log("starting fetching data from ",url)
    setTimeout(function process() {
        console.log("download process complete");
        let response = "dummy data downloaded";
        fn(response);
    },3000);
}

function DownloadCoustumdata(data , fn) {
    console.log("starting download process in a file",data);
    setTimeout(function process (){
        console.log("data completed printed");
        let uploadresponse="success.txt";
        fn(uploadresponse);
    },4000);
}
function UploadDataToNewURL(uploadresponse, url2 , fn) 
{
    console.log("data uploading begin from 1st url to 2nd url")
    setTimeout(function process(){
        console.log("file", uploadresponse ,"uploaded successfully to" , url2 );
        let finalresponse ="upload completed Successfully";
        fn(finalresponse);
    },5000);
}


Fetchcoustumdata("www.google.com",function downloadcallback(response){
    console.log("download response is ",response);
    DownloadCoustumdata(response,function writeCoustumData(uploadresponse){
        console.log("new file data is written in ",uploadresponse);
        UploadDataToNewURL(uploadresponse , "www.drive.google.com",function UploadDataToNewURL(uploadresponse){
            console.log("data uploaded to a new url ");
        });
    });
});