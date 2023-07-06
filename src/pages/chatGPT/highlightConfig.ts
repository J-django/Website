// 引入highlight.js库
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/github-dark.css';
import apache from 'highlight.js/lib/languages/apache';
import bash from 'highlight.js/lib/languages/bash';
import basic from 'highlight.js/lib/languages/basic';
import csharp from 'highlight.js/lib/languages/csharp';
import css from 'highlight.js/lib/languages/css';
import diff from 'highlight.js/lib/languages/diff';
import dns from 'highlight.js/lib/languages/dns';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import dos from 'highlight.js/lib/languages/dos';
import excel from 'highlight.js/lib/languages/excel';
import fsharp from 'highlight.js/lib/languages/fsharp';
import go from 'highlight.js/lib/languages/go';
import http from 'highlight.js/lib/languages/http';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import less from 'highlight.js/lib/languages/less';
import livescript from 'highlight.js/lib/languages/livescript';
import markdown from 'highlight.js/lib/languages/markdown';
import nginx from 'highlight.js/lib/languages/nginx';
import nodeRepl from 'highlight.js/lib/languages/node-repl';
import pgsql from 'highlight.js/lib/languages/pgsql';
import php from 'highlight.js/lib/languages/php';
import powershell from 'highlight.js/lib/languages/powershell';
import profile from 'highlight.js/lib/languages/profile';
import python from 'highlight.js/lib/languages/python';
import ruby from 'highlight.js/lib/languages/ruby';
import rust from 'highlight.js/lib/languages/rust';
import scala from 'highlight.js/lib/languages/scala';
import scheme from 'highlight.js/lib/languages/scheme';
import scss from 'highlight.js/lib/languages/scss';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import stylus from 'highlight.js/lib/languages/stylus';
import swift from 'highlight.js/lib/languages/swift';
import tap from 'highlight.js/lib/languages/tap';
import typescript from 'highlight.js/lib/languages/typescript';
import vbscript from 'highlight.js/lib/languages/vbscript';
import vim from 'highlight.js/lib/languages/vim';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

// 注册highlight.js的语言
hljs.registerLanguage('apache', apache);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('basic', basic);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('dns', dns);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('dos', dos);
hljs.registerLanguage('excel', excel);
hljs.registerLanguage('fsharp', fsharp);
hljs.registerLanguage('go', go);
hljs.registerLanguage('http', http);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('less', less);
hljs.registerLanguage('livescript', livescript);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('nginx', nginx);
hljs.registerLanguage('node-repl', nodeRepl);
hljs.registerLanguage('pgsql', pgsql);
hljs.registerLanguage('php', php);
hljs.registerLanguage('powershell', powershell);
hljs.registerLanguage('profile', profile);
hljs.registerLanguage('python', python);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('scala', scala);
hljs.registerLanguage('scheme', scheme);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('stylus', stylus);
hljs.registerLanguage('swift', swift);
hljs.registerLanguage('tap', tap);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('vbscript', vbscript);
hljs.registerLanguage('vim', vim);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

export default hljs;


// import hljs from '@/pages/chatGPT/highlightConfig'
// app.directive('highlight', {
//     mounted(el) {
//         const codes = el.querySelectorAll('pre code');
//         codes.forEach((code: any) => {
//             hljs.highlightElement(code);
//         });
//     },
// });