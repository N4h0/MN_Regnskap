import './Link.css';


const PDF_FILE_URL = "https://localhost:5173/file_pdf.pdf";
function Link() {
    const downloadFileAtURL = (url) => {
        //funksjonen blob vil laste ned dokumentet i samme fane, istedet for enda en fane 
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };

    return (
        <>
            <h1>Frister</h1>
            <div className="container">
                <div className="box">
                    <h2>Sole Proprietorship</h2>
                    <h3>Advance tax is paid to the bureau&rsquo;s office and is due for payment in four equal installments:</h3>
                    <ul>
                        <li>March 15</li>
                        <li>May 15</li>
                        <li>September 15</li>
                        <li>November 15</li>
                    </ul>
                    <h3>Additional</h3>
                    <p>If the preliminary tax calculation shows that the offset tax is greater than the paid advance tax, you can pay additional advance.</p>
                    <p><strong>May 31</strong> is the deadline for payment of additional advances to avoid residual tax and interest rate surcharges on the residual tax.</p>
                </div>
                <div className="box">
                    <h2>General </h2>
                    <h3> Sales Tax:</h3>
                    <ol>
                        <li>term due 10th April</li>
                        <li>term due 10th June</li>
                        <li>term due 31st August</li>
                        <li>term due 10th October</li>
                        <li>term due 10th December</li>
                        <li>term due 10th February</li>
                    </ol>
                    <h3>A message</h3>
                    <p>Deadline for submission of the month salary payments is the 5th of the following month.</p>
                    <h3>Social security and tax deductions:</h3>
                    <ol>
                        <li>term due 15th March</li>
                        <li>term due 15th May</li>
                        <li>term due 15th July</li>
                        <li>term due 15th September</li>
                        <li>term due 15th November</li>
                        <li>term due 15th January</li>
                    </ol>
                </div>
            </div>
            <div className="Link">
                <h2>Important links</h2>
                <ul>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 1</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 2</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 3</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 4</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 5</a></li>
                </ul>
            </div>


        </>
    );
}
export default Link;