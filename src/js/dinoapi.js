export default class DinoService {
  static getMeDinoWord() {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      const url = 'http://dinoipsum.herokuapp.com/api/?format=text&words=1&paragraphs=1';
      xhr.onload = function() {
        if (this.status === 200) {
          resolve(xhr.response.slice(0, -3));
        } else {
          reject(xhr.response);
          console.log('Where did all the dinosaurs go?');
          // return new Error(`Danger: the API call was unsuccessful. More specifically: ${error.message}`);
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  }
}