// const biodocUrlEncoded = encodeURIComponent(
//   "https://web.sandbox.biodoc.com.br/#/integration/verify?card=00010001000004025&token=TFNrZzhrMEIwUmZMS0lvTnJPQ01vb1RPWVhoWEZEaWExSjdUZ0ZsdlUwWFNaenJHRGxIb29PQk9KSXRsZnJOTw==&url=http://localhost:5173/biodoc-callback"
// );

const  ORIGIN = "http://localhost:5173";

const facialRecognitionUrl =
  "https://web.sandbox.biodoc.com.br/#/integration/verify?card=00010001000004025&token=TFNrZzhrMEIwUmZMS0lvTnJPQ01vb1RPWVhoWEZEaWExSjdUZ0ZsdlUwWFNaenJHRGxIb29PQk9KSXRsZnJOTw==&url=http://localhost:5173/biodoc-callback";
// const facialRecognitionUrl = "http://localhost:5173/redirect?encoded-url=" + biodocUrlEncoded;

export { facialRecognitionUrl, ORIGIN };
