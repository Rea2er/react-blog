import { createGlobalStyle } from "styled-components";

/* reset css */
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {font-family: "iconfont";
  src: url('./assets/fonts/iconfont.eot?t=1584585700836'); /* IE9 */
  src: url('./assets/fonts/iconfont.eot?t=1584585700836#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQoAAsAAAAACGwAAAPbAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEBINYATYCJAMUCwwABCAFhG0HUBtsB8ieA+7mEixhEScz0yNXPPy3H+2+mfmypk3EumjdtKFYEoskEoeEtwwl0/ESOP439ZAadOrMrOIOmRghj5T4CBUnE/2t2NfMJZmJNECACPCsJ8f6495xS3w+oFz+nK1pc3IXBhgHlGVjbFsgARdIQN4CO4fgB2jvwnECncaNgx2nZBWBp8IfF4hbSc+DZ8OhTFSHVqgHlpYm3oObNr3FzwF4l30//kFAniRV5p90fpOsg7if45/ZCPW/ClOyA1Q5H7RVZKwChXgeDNwiitQqQqfTm7QPdGolSapTyLOwZ7b//0FF35HYGQQoIn+8RNR8vhsN++nCz/ERXgkhqMoohKEqULBhWsL7CtEplPkC4IfunOUT388b5BWSztG2I7R3d9+ra0+Krj9lXc81jjWLVsG1a0VOJ+dyaRZfj4a4z+uHs01rMa51R+84J8VzZayGW3NsVFF6v7VLx5RPELhO1IV3EWWkJ05qHEi1957A76UXA3RG5zdq0QXModE41OFR7LZVoK6mFx/FsMudC65fZ69dm3YMmqN4hdNZsagn1+hYu7IH29DSXN+dIdRb5KBB5K0ASdAYr7r0bB7b3JPc8ObNBmRIdpIb6MoI+8At1Iv7IXk3vR5YOsVfmtv0ubqidhi5s2f8/aP3nvXQaEyUdTp05gzSpfQaFp4gpbq5nx3YD4fE1Mujki6jjv+1iU5DTC6LJ2ilGBf5O8auHA/zxdwOfKyjOanDVDozLuLJNI1ytk+P332Hfxw+EC5WNhAnjhMNAcJILNdX+fU1lfjSpTgylYyiA1/CCN3c8zHV4c0vLb2HqAt+4/z5nyqUA/xXSSy/zkwO4iMx0/SfOAGZ98QtIuqv/427zxdap3eK+upJF/C9+c9Ibcf/P8Fi4o+2l6FiHjKX8p1VsWsiYWZLWmXTGUKJ/7Tm740MuicjjiyuJLRGKkgaY5C1ZjXFsAqVLrtQa+1BpxWpq7sMkRGidGDZXIDQbyMkvb5C1u+8phjuQmXUW6j1R0Cni+i2ZZf5JCpRRryCdIy2gpEEq0UM3QqVVxcgfYmJl+tUZuSQbJeijL+PXzubiixIlphhL9UHKIrIiLLVzKTAachksjI22WpAguJTrCi2CF9fcehFPoLVDJQjMoSnQHQYWhUYEoGVhZg0V1CdzxdA9EqY8OSJuo4tB5HZSe0z/PnwW6BJ5S2L6l5Lb7tSegEUCpFHiWRWZowU9CGmIGXFsA0PMkAECh/FGxI2EXypkbiU9zleNH/GLdDJ36+KFDlKVFFrXopL+HLJQr+BPcfbkEWQTHg875XN6y2SKCEZAAA=') format('woff2'),
  url('./assets/fonts/iconfont.woff?t=1584585700836') format('woff'),
  url('./assets/fonts/iconfont.ttf?t=1584585700836') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./assets/fonts/iconfont.svg?t=1584585700836#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
