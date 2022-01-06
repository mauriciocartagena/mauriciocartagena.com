export const OpenPdf = ({
  filePdf,
  title = "Mauricio Cartagena - Certificates",
}) => {
  const pdfWindow = window.open(filePdf);

  const URI = filePdf;
  const html = `
	  <html>
	    <head>
	      <title>${title}</title>
	    </head>
	    <body style="margin:0">
	      <embed width="100%" height="100%" src=${filePdf} type="application/pdf">
	    </body>
	  </html>
	`;

  pdfWindow.document.write(html);
  pdfWindow.document.close();
  pdfWindow.history.pushState(null, null, URI);
};
