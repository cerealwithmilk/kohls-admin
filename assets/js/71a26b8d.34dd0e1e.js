"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5370],{26864:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"custom_commands","title":"Custom Commands","description":"Kohl\'s Admin is currently in development. Everything in these docs is subject to change.","source":"@site/docs/custom_commands.mdx","sourceDirName":".","slug":"/custom_commands","permalink":"/docs/custom_commands","draft":false,"unlisted":false,"editUrl":"https://github.com/kohls-admin/kohls-admin/edit/master/docs/custom_commands.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"Using UIs","permalink":"/docs/getting-started/using_uis"},"next":{"title":"Troubleshoot","permalink":"/docs/troubleshooting"}}');var s=t(74848),i=t(28453);const a={sidebar_position:3},r="Custom Commands",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Addon Setup",id:"addon-setup",level:2},{value:"Creating a Custom Command",id:"creating-a-custom-command",level:2}];function m(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"custom-commands",children:"Custom Commands"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"Kohl's Admin is currently in development. Everything in these docs is subject to change."})}),"\n",(0,s.jsx)(e.p,{children:"Custom commands are a powerful feature that lets you personalize Kohl's Admin, automate tasks, streamline your workflows, and create unique interactions within your experience."}),"\n",(0,s.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Make sure you have Kohl's Admin:"})," Ensure that Kohl's Admin is ",(0,s.jsx)(e.a,{href:"/docs/intro",children:"present in your experience"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Addons Folder"}),": Confirm that Kohl's Admin has a folder named ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Addons"})}),". This is where you'll place your custom command scripts."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"addon-setup",children:"Addon Setup"}),"\n",(0,s.jsxs)(e.p,{children:["All custom commands are part of an ",(0,s.jsx)(e.a,{href:"/docs/addons",children:"Addon"}),". For this section we will create addons that only create custom commands, but in later parts we will show the extent of what addons can do."]}),"\n",(0,s.jsxs)(e.p,{children:["All addons are a ",(0,s.jsx)(e.a,{href:"https://create.roblox.com/docs/reference/engine/classes/ModuleScript",children:"ModuleScript"})," that returns a function. To start, create a module script and inside of it write the following:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"return function(_K)\n    -- Addon code goes here!\nend\n"})}),"\n",(0,s.jsx)(e.p,{children:'Inside of this function is where we will be adding our custom commands.\nThe name of the addon can be anything, but for this example we encourage "customCommands".'}),"\n",(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsxs)(e.p,{children:["Adding ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Client"})})," or ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"Server"})})," an Addon file's name will make it only run in that context. This will make the other context unaware of the command!"]})}),"\n",(0,s.jsx)(e.h2,{id:"creating-a-custom-command",children:"Creating a Custom Command"}),"\n",(0,s.jsxs)(e.p,{children:["To create a custom command, you must register it with the ",(0,s.jsx)(e.a,{href:"/api/Registry",children:"Registry"}),", using ",(0,s.jsx)(e.a,{href:"/api/Registry#registerCommand",children:"registerCommand()"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"Using this, our module becomes:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"return function(_K)\n    _K.Registry.registerCommand(_K, commandDefinition)\nend\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"commandDefinition"})," is a placeholder for the real contents of our command! Commands require a lot of information, structured in a ",(0,s.jsx)(e.a,{href:"/api/Registry#CommandDefinition",children:"commandDefinition"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"type commandDefinition {\nname: string, -- Name of the command.\naliases: { string }?, -- Table of aliases.\ndescription: string, -- Description of what the command does.\ngroup: string, -- What group the command belongs to.\nargs: { ArgumentDefinition }, -- A table of argument definitions.\nenvClient: {} | () -> {}?, -- Sets up an environment for the command.\nenv: {} | () -> {}?, -- Sets up an environment for the command.\nrunClient: (...any) -> ()?, -- What runs on the client of the player that ran the command.\nrun: (...any) -> ()? -- What the command runs on the server.\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["To give an example, this is the code from the ",(0,s.jsx)(e.code,{children:"ExampleAddon"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:'-- addons not containing in "Client" or "Server" will run in both contexts (shared)\nreturn function(_K)\n\t_K.log(`Hello World from ExampleAddon!`, "INFO")\n\n\t_K.Registry.registerCommand(_K, {\n\t\tname = "customcommand",\n\t\taliases = { "customcommandalias", "customcommandalias2" },\n\t\tdescription = "Custom command description.",\n\n\t\t-- The command group to sort the command by, this is what roles use to easily assign groups of commands.\n\t\t-- Default groups in order of abusability are "Utility", "Environment", "General", "Fun", "Moderation", "Administration", and "Creator"\n\t\tgroup = "General", -- Command group to use.\n\n\t\t-- Argument definitions\n\t\targs = {\n\t\t\t{\n\t\t\t\ttype = "stringGreedy",\n\t\t\t\tname = "Message",\n\t\t\t\tdescription = "The message to send.", -- Description shown in command listings.\n\t\t\t\t-- If the command is optional, make sure to check if it\'s nil and not false!\n\t\t\t\toptional = true,\n\n\t\t\t\tlowerRank = false,\n\t\t\t\tignoreSelf = false,\n\t\t\t\tshouldRequest = false,\n\t\t\t},\n\t\t},\n\n\t\t-- Command environment\n\n\t\tenv = function(_K)\n\t\t\t-- This will only run once on each server\n\t\t\t_K.log(`Hello World from ExampleAddon customcommand env!`, "INFO")\n\n\t\t\t-- This table is passed to the `run` function as `context.env`\n\t\t\treturn {\n\t\t\t\tcountServer = 0,\n\t\t\t}\n\t\tend,\n\n\t\tenvClient = function(_K)\n\t\t\t-- This will only run once on each client\n\t\t\t_K.log(`Hello World from ExampleAddon customcommand envClient!`, "INFO")\n\n\t\t\t-- This table is passed to the `runClient` function as `context.env`\n\t\t\treturn {\n\t\t\t\tcountClient = 0,\n\t\t\t}\n\t\tend,\n\n\t\t-- Command execution\n\n\t\t-- Function that runs on the server\n\t\trun = function(context, message: string?)\n\t\t\tprint("Custom command ran on server!", context, message)\n\n\t\t\t-- Create a simple Roblox message object\n\t\t\tlocal messageInstance = Instance.new("Message", workspace)\n\n\t\t\t-- Since our message is optional we need to check for context.OPTIONAL\n\t\t\tmessageInstance.Text = if message == context.OPTIONAL then "Default message" else message\n\n\t\t\t-- This will destroy the message after 5 seconds\n\t\t\ttask.delay(5, messageInstance.Destroy, messageInstance)\n\n\t\t\t-- Number of times the command has been used on this server\n\t\t\tcontext.env.countServer += 1\n\t\tend,\n\n\t\t-- Function that runs on the player\'s client\n\t\trunClient = function(context, message)\n\t\t\tprint("Custom command ran on the client!", context, message)\n\n\t\t\t-- Number of times the command has been used on this client\n\t\t\tcontext.env.countClient += 1\n\t\tend,\n\t})\nend\n'})}),"\n",(0,s.jsxs)(e.p,{children:["This command creates a ",(0,s.jsx)(e.code,{children:"Message"})," instance and populates it with the player provided message. As you can see, the command is registered with a dictionary that lists all information about the command."]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"You can put multiple custom commands in one addon! All you need to do is register multiple commands in the same module."})}),"\n",(0,s.jsx)(e.p,{children:"In later sections, we'll cover more advanced uses of custom commands, including environments and other advanced functionality."})]})}function l(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function a(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);