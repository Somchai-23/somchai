function MyBlogs(){
    var title = "xxx";
    var description = "Yyy...";
    let enabled = true;
    const p1 = 2.14;
    //alert ("title: "+title);
    console.log("enabled: "+enabled);
return(
    <div ClassName = "m-3">
        <p><strong>หัวข้อ :</strong> {title}</p>
        <p><strong>รายละเอียด </strong>: {description}</p>
    </div>
)
}
export default MyBlogs;