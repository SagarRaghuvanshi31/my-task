"use strict";(self.webpackChunkmy_task=self.webpackChunkmy_task||[]).push([[5124],{4469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"project","title":"project","description":"Next Steps","source":"@site/docs/project.md","sourceDirName":".","slug":"/project","permalink":"/my-task/docs/project","draft":false,"unlisted":false,"editUrl":"https://github.com/SagarRaghuvanshi31/my-task/edit/main/docs/project.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Translate your site","permalink":"/my-task/docs/tutorial-extras/translate-your-site"},"next":{"title":"you","permalink":"/my-task/docs/you"}}');var s=t(4848),a=t(8453);const r={},o=void 0,d={},l=[];function c(e){const n={br:"br",del:"del",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"Pehle directory permissions check karein aur fix karein.\nSELinux disable karke test karein.\nAgar ab bhi error aaye to manual debug karke error messages dekhein."}),"\n",(0,s.jsxs)(n.p,{children:["Agar fir bhi problem ho to mujhe output share karein, main aur help kar dunga! \ud83d\ude80\nYou said:\nlabadmin@Ubuntu-2404-noble-amd64-base:~$ ls -ld ~/data/mailserver/data\nls -ld ",(0,s.jsx)(n.del,{children:"/data/mailserver/postfix\ndrwxrwxr-x 2 labadmin labadmin 4096 Feb 10 09:34 /home/labadmin/data/mailserver/data\ndrwxrwxr-x 2 labadmin labadmin 4096 Feb 10 10:17 /home/labadmin/data/mailserver/postfix\nlabadmin@Ubuntu-2404-noble-amd64-base:"}),"$ podman run --rm -it ",(0,s.jsx)(n.br,{}),"\n","--network mailnet ",(0,s.jsx)(n.br,{}),"\n","-v ~/data/mailserver/postfix:/etc/postfix ",(0,s.jsx)(n.br,{}),"\n","-v ~/data/mailserver/data:/var/mail ",(0,s.jsx)(n.br,{}),"\n","-v ",(0,s.jsxs)(n.del,{children:["/data/mailserver/ssl:/etc/ssl ",(0,s.jsx)(n.br,{}),"\n","instrumentisto/postfix /bin/sh\n[s6-init] making user provided files available at /var/run/s6/etc...exited 0.\n[s6-init] ensuring user provided files have correct perms...exited 0.\n[fix-attrs.d] applying ownership & permissions fixes...\n[fix-attrs.d] done.\n[cont-init.d] executing container initialization scripts...\n[cont-init.d] 10-apply-dropin-files.sh: executing...\n[cont-init.d] 10-apply-dropin-files.sh: exited 0.\n[cont-init.d] 20-create-queue-directories.sh: executing...\npostfix: fatal: bad numerical configuration: compatibility_level = 3.6\n[cont-init.d] 20-create-queue-directories.sh: exited 1.\n[cont-finish.d] executing container finish scripts...\n[cont-finish.d] done.\n[s6-finish] syncing disks.\n[s6-finish] sending all processes the TERM signal.\n[s6-finish] sending all processes the KILL signal and exiting.\nlabadmin@Ubuntu-2404-noble-amd64-base:"]}),"$"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);