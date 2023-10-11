const downloadButton = document.getElementById('download-button');
const footer = document.getElementById('footer');

function generatePDF() {
    downloadButton.style.setProperty('display','none')
    // Choose the element id which you want to export.
    var element = document.getElementById('main');
    element.style.width = '100%';
    element.style.height = '100%';
    
    var opt = {
        margin:       0.5,
        filename:     'myfile.pdf',
        
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',precision: '12' }
      };
    
    // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
    html2pdf().set(opt).from(element).save();

    //downloadButton.style.removeProperty('display');
  }

downloadButton.addEventListener('click', generatePDF);