if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b3600c15"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Xl5POkpd4bYlRcp8dHKYc/_buildManifest.js",revision:"de9e03501fa45b05bacf5f28215f3f25"},{url:"/_next/static/Xl5POkpd4bYlRcp8dHKYc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1008.34cc20ecda8c2f89.js",revision:"34cc20ecda8c2f89"},{url:"/_next/static/chunks/1010.a223916b6c5495db.js",revision:"a223916b6c5495db"},{url:"/_next/static/chunks/1024-40662a660240ea6a.js",revision:"40662a660240ea6a"},{url:"/_next/static/chunks/1051-3b4cf112efcd8769.js",revision:"3b4cf112efcd8769"},{url:"/_next/static/chunks/1053.adb29a47c34b267a.js",revision:"adb29a47c34b267a"},{url:"/_next/static/chunks/1084.8bd09a422bf924f1.js",revision:"8bd09a422bf924f1"},{url:"/_next/static/chunks/1130-a8f4f1269cf500ba.js",revision:"a8f4f1269cf500ba"},{url:"/_next/static/chunks/1264.22793a8dff64e254.js",revision:"22793a8dff64e254"},{url:"/_next/static/chunks/1390.54a41f441aeb5900.js",revision:"54a41f441aeb5900"},{url:"/_next/static/chunks/1446.729b459281b981b9.js",revision:"729b459281b981b9"},{url:"/_next/static/chunks/1538.2848904912316694.js",revision:"2848904912316694"},{url:"/_next/static/chunks/1639.a800a19a91b7810f.js",revision:"a800a19a91b7810f"},{url:"/_next/static/chunks/1650.06a77268379b94b2.js",revision:"06a77268379b94b2"},{url:"/_next/static/chunks/1660.76cc05d00e5034ad.js",revision:"76cc05d00e5034ad"},{url:"/_next/static/chunks/1664-0f53d166a5c369a3.js",revision:"0f53d166a5c369a3"},{url:"/_next/static/chunks/1668.ff75e5f9dfbd04d7.js",revision:"ff75e5f9dfbd04d7"},{url:"/_next/static/chunks/1683.9d90dd9cd2cb84c3.js",revision:"9d90dd9cd2cb84c3"},{url:"/_next/static/chunks/1700-4d186ad54316e8e3.js",revision:"4d186ad54316e8e3"},{url:"/_next/static/chunks/1706.c045515ad937c427.js",revision:"c045515ad937c427"},{url:"/_next/static/chunks/1749-95d306e8dcbf18c9.js",revision:"95d306e8dcbf18c9"},{url:"/_next/static/chunks/177.3359462c66b636ba.js",revision:"3359462c66b636ba"},{url:"/_next/static/chunks/1770.ffd38031b937c10a.js",revision:"ffd38031b937c10a"},{url:"/_next/static/chunks/1822-942470a32947d41e.js",revision:"942470a32947d41e"},{url:"/_next/static/chunks/1873.ad239337a916524b.js",revision:"ad239337a916524b"},{url:"/_next/static/chunks/1920.3c2a3eb5ab89a567.js",revision:"3c2a3eb5ab89a567"},{url:"/_next/static/chunks/1965.ba57e21b0f93c404.js",revision:"ba57e21b0f93c404"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2119.0cb64fe9bc609787.js",revision:"0cb64fe9bc609787"},{url:"/_next/static/chunks/2122-7b82b6548f85871d.js",revision:"7b82b6548f85871d"},{url:"/_next/static/chunks/2136.3c7248e1cb33b0f2.js",revision:"3c7248e1cb33b0f2"},{url:"/_next/static/chunks/2200.fa86d6407d578dd2.js",revision:"fa86d6407d578dd2"},{url:"/_next/static/chunks/228.bcd421992bab4a0b.js",revision:"bcd421992bab4a0b"},{url:"/_next/static/chunks/2314.ce3a0e1828ad2d06.js",revision:"ce3a0e1828ad2d06"},{url:"/_next/static/chunks/2348.d2980e6aeef90dfd.js",revision:"d2980e6aeef90dfd"},{url:"/_next/static/chunks/2386.726d5299e310ea32.js",revision:"726d5299e310ea32"},{url:"/_next/static/chunks/2406.04743ed8b26fbb4f.js",revision:"04743ed8b26fbb4f"},{url:"/_next/static/chunks/2424.2c2da0886b66b3b1.js",revision:"2c2da0886b66b3b1"},{url:"/_next/static/chunks/2466-03481c27c6198b4b.js",revision:"03481c27c6198b4b"},{url:"/_next/static/chunks/2474-bb7ede716ab93f6e.js",revision:"bb7ede716ab93f6e"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2554.c024a926a56e7886.js",revision:"c024a926a56e7886"},{url:"/_next/static/chunks/2602.b42aa7598d8adcd0.js",revision:"b42aa7598d8adcd0"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2700-e621b445cd856487.js",revision:"e621b445cd856487"},{url:"/_next/static/chunks/2711.f2c889ed7a6bd648.js",revision:"f2c889ed7a6bd648"},{url:"/_next/static/chunks/2877.4a5ca5df09892683.js",revision:"4a5ca5df09892683"},{url:"/_next/static/chunks/2891-0a36d2e6458c18b5.js",revision:"0a36d2e6458c18b5"},{url:"/_next/static/chunks/2979.03b3805c732622ee.js",revision:"03b3805c732622ee"},{url:"/_next/static/chunks/305.89841c282a61cef8.js",revision:"89841c282a61cef8"},{url:"/_next/static/chunks/3068-cd38455f8be577e2.js",revision:"cd38455f8be577e2"},{url:"/_next/static/chunks/310.1bff8f039776e345.js",revision:"1bff8f039776e345"},{url:"/_next/static/chunks/3203.4b4ad54c6039f230.js",revision:"4b4ad54c6039f230"},{url:"/_next/static/chunks/3236.91ceb1368d29aa76.js",revision:"91ceb1368d29aa76"},{url:"/_next/static/chunks/3283.5d49fa6c95d32242.js",revision:"5d49fa6c95d32242"},{url:"/_next/static/chunks/3314.141e2dca41748fac.js",revision:"141e2dca41748fac"},{url:"/_next/static/chunks/3366.adca9aa05c824553.js",revision:"adca9aa05c824553"},{url:"/_next/static/chunks/3371.c142b630db4a63c0.js",revision:"c142b630db4a63c0"},{url:"/_next/static/chunks/3436.eac11d10cde485d3.js",revision:"eac11d10cde485d3"},{url:"/_next/static/chunks/344.e39f52ee5981e34d.js",revision:"e39f52ee5981e34d"},{url:"/_next/static/chunks/3465.77dee7ec6cc7e947.js",revision:"77dee7ec6cc7e947"},{url:"/_next/static/chunks/3482.f8558073446e8bd9.js",revision:"f8558073446e8bd9"},{url:"/_next/static/chunks/3509.11f4b2a34d9f2054.js",revision:"11f4b2a34d9f2054"},{url:"/_next/static/chunks/3519.2a44d25a006ebc05.js",revision:"2a44d25a006ebc05"},{url:"/_next/static/chunks/3594.073040c30703eb50.js",revision:"073040c30703eb50"},{url:"/_next/static/chunks/3595-74f53641dfc123ea.js",revision:"74f53641dfc123ea"},{url:"/_next/static/chunks/370.d28d8b4dda7a28fa.js",revision:"d28d8b4dda7a28fa"},{url:"/_next/static/chunks/3747.a73d743dd994f9f6.js",revision:"a73d743dd994f9f6"},{url:"/_next/static/chunks/3883.5e03e3a398cf3720.js",revision:"5e03e3a398cf3720"},{url:"/_next/static/chunks/3942-593e1d7e0334467a.js",revision:"593e1d7e0334467a"},{url:"/_next/static/chunks/3993.45bba5349434ad56.js",revision:"45bba5349434ad56"},{url:"/_next/static/chunks/402.3f3e56dcc798bafe.js",revision:"3f3e56dcc798bafe"},{url:"/_next/static/chunks/4060-d6809300755291ca.js",revision:"d6809300755291ca"},{url:"/_next/static/chunks/4103.094b3a128123225c.js",revision:"094b3a128123225c"},{url:"/_next/static/chunks/4104-9b98bf6820951ffb.js",revision:"9b98bf6820951ffb"},{url:"/_next/static/chunks/4143.d2329527ce98a835.js",revision:"d2329527ce98a835"},{url:"/_next/static/chunks/4144.d7264e550bf9aa39.js",revision:"d7264e550bf9aa39"},{url:"/_next/static/chunks/4163.d52adce0c4cb89c5.js",revision:"d52adce0c4cb89c5"},{url:"/_next/static/chunks/4212.15885059e8078ec8.js",revision:"15885059e8078ec8"},{url:"/_next/static/chunks/4261-1c69da29574680fc.js",revision:"1c69da29574680fc"},{url:"/_next/static/chunks/4293.9de2fa8f5848563f.js",revision:"9de2fa8f5848563f"},{url:"/_next/static/chunks/4323.1b0f3120b93d917e.js",revision:"1b0f3120b93d917e"},{url:"/_next/static/chunks/437.91d64c190eb4c1fc.js",revision:"91d64c190eb4c1fc"},{url:"/_next/static/chunks/4439.7f32805042ce478e.js",revision:"7f32805042ce478e"},{url:"/_next/static/chunks/4504.205ff17922909b08.js",revision:"205ff17922909b08"},{url:"/_next/static/chunks/4511.b2017e6f634e735d.js",revision:"b2017e6f634e735d"},{url:"/_next/static/chunks/4612.5377afe0026f9d3f.js",revision:"5377afe0026f9d3f"},{url:"/_next/static/chunks/4749-774a7f429db48ae3.js",revision:"774a7f429db48ae3"},{url:"/_next/static/chunks/4796.c545e50f2ff935e7.js",revision:"c545e50f2ff935e7"},{url:"/_next/static/chunks/4812.8df1cf6b1556ba3d.js",revision:"8df1cf6b1556ba3d"},{url:"/_next/static/chunks/4829.0d9e628c7bcdb7fc.js",revision:"0d9e628c7bcdb7fc"},{url:"/_next/static/chunks/4879.862b5a386c6b86a0.js",revision:"862b5a386c6b86a0"},{url:"/_next/static/chunks/4927.6ae2f05612488ca4.js",revision:"6ae2f05612488ca4"},{url:"/_next/static/chunks/4938-0f8d85099b1dab44.js",revision:"0f8d85099b1dab44"},{url:"/_next/static/chunks/4954-cfdba31aeaa0bc8c.js",revision:"cfdba31aeaa0bc8c"},{url:"/_next/static/chunks/4ad82c5e-2cdc06420e9cd86e.js",revision:"2cdc06420e9cd86e"},{url:"/_next/static/chunks/500.b7a16032bbe75bbf.js",revision:"b7a16032bbe75bbf"},{url:"/_next/static/chunks/5056-e650b1ddc9e8e708.js",revision:"e650b1ddc9e8e708"},{url:"/_next/static/chunks/5134.a121d8d21d1c9247.js",revision:"a121d8d21d1c9247"},{url:"/_next/static/chunks/5197-71e496257358d5de.js",revision:"71e496257358d5de"},{url:"/_next/static/chunks/520.c8f5dde948576d7f.js",revision:"c8f5dde948576d7f"},{url:"/_next/static/chunks/5258.d215d30394bde5c4.js",revision:"d215d30394bde5c4"},{url:"/_next/static/chunks/5283-d2ef4cbd4b7b6939.js",revision:"d2ef4cbd4b7b6939"},{url:"/_next/static/chunks/5308.f53c4452aec96df5.js",revision:"f53c4452aec96df5"},{url:"/_next/static/chunks/531.1e10d692768cad5c.js",revision:"1e10d692768cad5c"},{url:"/_next/static/chunks/5372.156686248b75341d.js",revision:"156686248b75341d"},{url:"/_next/static/chunks/5395.3b89c713469a6268.js",revision:"3b89c713469a6268"},{url:"/_next/static/chunks/5412.62183ead243c981f.js",revision:"62183ead243c981f"},{url:"/_next/static/chunks/5560-4bf27d703871bd85.js",revision:"4bf27d703871bd85"},{url:"/_next/static/chunks/5584.8842f8a926db3df8.js",revision:"8842f8a926db3df8"},{url:"/_next/static/chunks/5596-edb303d1dc76a4c8.js",revision:"edb303d1dc76a4c8"},{url:"/_next/static/chunks/5648.517b7d5b08dc25e0.js",revision:"517b7d5b08dc25e0"},{url:"/_next/static/chunks/5672.06f229f291417a1b.js",revision:"06f229f291417a1b"},{url:"/_next/static/chunks/5753.e3f8077ac4a7ad1b.js",revision:"e3f8077ac4a7ad1b"},{url:"/_next/static/chunks/5815.a2728b3992c996c3.js",revision:"a2728b3992c996c3"},{url:"/_next/static/chunks/5818-dfab95b29f5ee52f.js",revision:"dfab95b29f5ee52f"},{url:"/_next/static/chunks/5819.a59443e62006c745.js",revision:"a59443e62006c745"},{url:"/_next/static/chunks/5879.e0ef43b09c377987.js",revision:"e0ef43b09c377987"},{url:"/_next/static/chunks/5888-1bc8318a305596b9.js",revision:"1bc8318a305596b9"},{url:"/_next/static/chunks/5891-9b800e8a5453b1b1.js",revision:"9b800e8a5453b1b1"},{url:"/_next/static/chunks/5903.9c56140d4c41dbc9.js",revision:"9c56140d4c41dbc9"},{url:"/_next/static/chunks/5938-86987040cf7429e5.js",revision:"86987040cf7429e5"},{url:"/_next/static/chunks/6017-4dd931f2d3fa0cb3.js",revision:"4dd931f2d3fa0cb3"},{url:"/_next/static/chunks/6062.831fce20a86c4ab8.js",revision:"831fce20a86c4ab8"},{url:"/_next/static/chunks/6092.d604d5262c942c63.js",revision:"d604d5262c942c63"},{url:"/_next/static/chunks/6121.07bf76517bbc2dd2.js",revision:"07bf76517bbc2dd2"},{url:"/_next/static/chunks/6133.9dd0defbefdd10b2.js",revision:"9dd0defbefdd10b2"},{url:"/_next/static/chunks/6139.01da1918e0d4e877.js",revision:"01da1918e0d4e877"},{url:"/_next/static/chunks/617.359b421db498d43e.js",revision:"359b421db498d43e"},{url:"/_next/static/chunks/62.c891b4788440a30a.js",revision:"c891b4788440a30a"},{url:"/_next/static/chunks/6229.24f9a0e251d0d3bc.js",revision:"24f9a0e251d0d3bc"},{url:"/_next/static/chunks/6275.6c93e6d5f16c78f2.js",revision:"6c93e6d5f16c78f2"},{url:"/_next/static/chunks/6300-ce3d46cf067096ca.js",revision:"ce3d46cf067096ca"},{url:"/_next/static/chunks/6395.6e51d035839ff4ba.js",revision:"6e51d035839ff4ba"},{url:"/_next/static/chunks/6430.03e64b0829259a57.js",revision:"03e64b0829259a57"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6460.cc1ba385daf50463.js",revision:"cc1ba385daf50463"},{url:"/_next/static/chunks/6471.cb795f11f73576f4.js",revision:"cb795f11f73576f4"},{url:"/_next/static/chunks/6627-cd5f0f07f5fd191a.js",revision:"cd5f0f07f5fd191a"},{url:"/_next/static/chunks/6665.8350b94f2a309c5f.js",revision:"8350b94f2a309c5f"},{url:"/_next/static/chunks/6692.e42dfb241035b482.js",revision:"e42dfb241035b482"},{url:"/_next/static/chunks/6697-ca079f0db48e56dc.js",revision:"ca079f0db48e56dc"},{url:"/_next/static/chunks/673.5310afdb2da5faad.js",revision:"5310afdb2da5faad"},{url:"/_next/static/chunks/6732.d813e460e261d8ef.js",revision:"d813e460e261d8ef"},{url:"/_next/static/chunks/6773.4773329377a39fc3.js",revision:"4773329377a39fc3"},{url:"/_next/static/chunks/6802.1810013b67c52cd5.js",revision:"1810013b67c52cd5"},{url:"/_next/static/chunks/6820.2d137fa098b7a738.js",revision:"2d137fa098b7a738"},{url:"/_next/static/chunks/686-ea00a8252cf77572.js",revision:"ea00a8252cf77572"},{url:"/_next/static/chunks/6910.6cb9899827cdfac5.js",revision:"6cb9899827cdfac5"},{url:"/_next/static/chunks/6971.20c757ff41adcc55.js",revision:"20c757ff41adcc55"},{url:"/_next/static/chunks/6991.be0212d2d320173c.js",revision:"be0212d2d320173c"},{url:"/_next/static/chunks/7001.33c3e155c2e1dc33.js",revision:"33c3e155c2e1dc33"},{url:"/_next/static/chunks/7013.138f82c16fd7ee0f.js",revision:"138f82c16fd7ee0f"},{url:"/_next/static/chunks/7061.608a4e9d4bf3dcce.js",revision:"608a4e9d4bf3dcce"},{url:"/_next/static/chunks/7090.eac3a71d663c7b2c.js",revision:"eac3a71d663c7b2c"},{url:"/_next/static/chunks/710.a870f068ffd11edf.js",revision:"a870f068ffd11edf"},{url:"/_next/static/chunks/7116.e553286894fa42f5.js",revision:"e553286894fa42f5"},{url:"/_next/static/chunks/7118.41fdb3818f10ce06.js",revision:"41fdb3818f10ce06"},{url:"/_next/static/chunks/7213.d8a3150d04a604bc.js",revision:"d8a3150d04a604bc"},{url:"/_next/static/chunks/7268.c03c1a6ee47a8f88.js",revision:"c03c1a6ee47a8f88"},{url:"/_next/static/chunks/7282.39753d05c9bd9bd2.js",revision:"39753d05c9bd9bd2"},{url:"/_next/static/chunks/7315.3ca5dd95b74450ea.js",revision:"3ca5dd95b74450ea"},{url:"/_next/static/chunks/7365.72718ce4ca51b05b.js",revision:"72718ce4ca51b05b"},{url:"/_next/static/chunks/7370.ab056e5d030e94cf.js",revision:"ab056e5d030e94cf"},{url:"/_next/static/chunks/7421.6e55431a3f7b261d.js",revision:"6e55431a3f7b261d"},{url:"/_next/static/chunks/7434.24f89358a84d896c.js",revision:"24f89358a84d896c"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.f7c93eb403c6c9c0.js",revision:"f7c93eb403c6c9c0"},{url:"/_next/static/chunks/758.b8b4c9d9c7352c21.js",revision:"b8b4c9d9c7352c21"},{url:"/_next/static/chunks/7590.5339f77c17d3d934.js",revision:"5339f77c17d3d934"},{url:"/_next/static/chunks/75fc9c18.9966cc9540c12a81.js",revision:"9966cc9540c12a81"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7663.be47fb66e04e4efc.js",revision:"be47fb66e04e4efc"},{url:"/_next/static/chunks/7719.adfc31635f91aab7.js",revision:"adfc31635f91aab7"},{url:"/_next/static/chunks/7741.73d83c07a934b0c0.js",revision:"73d83c07a934b0c0"},{url:"/_next/static/chunks/775.454fff4e71f3ddfe.js",revision:"454fff4e71f3ddfe"},{url:"/_next/static/chunks/7752-26fdadd6b395f750.js",revision:"26fdadd6b395f750"},{url:"/_next/static/chunks/7762.b997013a52e9b865.js",revision:"b997013a52e9b865"},{url:"/_next/static/chunks/781-e5a3b61a3fff4bb4.js",revision:"e5a3b61a3fff4bb4"},{url:"/_next/static/chunks/7917.d0a43af9dcac157e.js",revision:"d0a43af9dcac157e"},{url:"/_next/static/chunks/7949.1f07c0453b41cf4b.js",revision:"1f07c0453b41cf4b"},{url:"/_next/static/chunks/7988.264688b19c03433e.js",revision:"264688b19c03433e"},{url:"/_next/static/chunks/8007.6958f6f4c9375211.js",revision:"6958f6f4c9375211"},{url:"/_next/static/chunks/8029.aa6c08cba91dd332.js",revision:"aa6c08cba91dd332"},{url:"/_next/static/chunks/8091-a668367d3ce52d77.js",revision:"a668367d3ce52d77"},{url:"/_next/static/chunks/8142.d8e6c66ac26970a0.js",revision:"d8e6c66ac26970a0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8215-42775383b8c663cc.js",revision:"42775383b8c663cc"},{url:"/_next/static/chunks/8244.fd62cfe367b02a39.js",revision:"fd62cfe367b02a39"},{url:"/_next/static/chunks/8283.f41216fedc310fb2.js",revision:"f41216fedc310fb2"},{url:"/_next/static/chunks/8393.4276c63baa000f93.js",revision:"4276c63baa000f93"},{url:"/_next/static/chunks/8465-e89ae12ec840d331.js",revision:"e89ae12ec840d331"},{url:"/_next/static/chunks/8469-0ae1393ba29d3839.js",revision:"0ae1393ba29d3839"},{url:"/_next/static/chunks/8531-5692da3f0da4a250.js",revision:"5692da3f0da4a250"},{url:"/_next/static/chunks/856.71a64ab75d0063ca.js",revision:"71a64ab75d0063ca"},{url:"/_next/static/chunks/8561.e0ae2c126e26850c.js",revision:"e0ae2c126e26850c"},{url:"/_next/static/chunks/863.aad01f55a552c779.js",revision:"aad01f55a552c779"},{url:"/_next/static/chunks/8695.be180477a1376288.js",revision:"be180477a1376288"},{url:"/_next/static/chunks/870.c1277ad0599a1203.js",revision:"c1277ad0599a1203"},{url:"/_next/static/chunks/8714.282537005e4fa0d1.js",revision:"282537005e4fa0d1"},{url:"/_next/static/chunks/8725.c744c0f0e95729c6.js",revision:"c744c0f0e95729c6"},{url:"/_next/static/chunks/8770.44d2f8c73be18acf.js",revision:"44d2f8c73be18acf"},{url:"/_next/static/chunks/8813.dc4a68ce84035f5f.js",revision:"dc4a68ce84035f5f"},{url:"/_next/static/chunks/8864.8a83e20879cd9f99.js",revision:"8a83e20879cd9f99"},{url:"/_next/static/chunks/889.64194b207c6ed4a5.js",revision:"64194b207c6ed4a5"},{url:"/_next/static/chunks/8910.ec6846732bff95bc.js",revision:"ec6846732bff95bc"},{url:"/_next/static/chunks/8915.47932f86417996a7.js",revision:"47932f86417996a7"},{url:"/_next/static/chunks/8966-4955acf88b3c6b8a.js",revision:"4955acf88b3c6b8a"},{url:"/_next/static/chunks/9069.7c82d20fa1ae29ef.js",revision:"7c82d20fa1ae29ef"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9073.582749f939386870.js",revision:"582749f939386870"},{url:"/_next/static/chunks/9095.5905ace8942e6b3c.js",revision:"5905ace8942e6b3c"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9155.f33132a38cc218c8.js",revision:"f33132a38cc218c8"},{url:"/_next/static/chunks/9208.dd6f3636e941c1c1.js",revision:"dd6f3636e941c1c1"},{url:"/_next/static/chunks/9232.61d440e4c3b2b427.js",revision:"61d440e4c3b2b427"},{url:"/_next/static/chunks/9266.994c0009cc4d1f4b.js",revision:"994c0009cc4d1f4b"},{url:"/_next/static/chunks/9296.58ceea6b686f66e0.js",revision:"58ceea6b686f66e0"},{url:"/_next/static/chunks/9403-19a35f3c715f5676.js",revision:"19a35f3c715f5676"},{url:"/_next/static/chunks/9456-de63cc8346ba33ce.js",revision:"de63cc8346ba33ce"},{url:"/_next/static/chunks/9552-ef0c91f94d86e6e4.js",revision:"ef0c91f94d86e6e4"},{url:"/_next/static/chunks/9558.9bf5494ebdf03040.js",revision:"9bf5494ebdf03040"},{url:"/_next/static/chunks/9607.366af86ac9696739.js",revision:"366af86ac9696739"},{url:"/_next/static/chunks/9614.e05165953361b1cb.js",revision:"e05165953361b1cb"},{url:"/_next/static/chunks/971-621f7da64e666ff3.js",revision:"621f7da64e666ff3"},{url:"/_next/static/chunks/9713.f1d5b41171c6487d.js",revision:"f1d5b41171c6487d"},{url:"/_next/static/chunks/9781.f87962a71d4ea1e0.js",revision:"f87962a71d4ea1e0"},{url:"/_next/static/chunks/9790.2efbb6c5a33cf2b9.js",revision:"2efbb6c5a33cf2b9"},{url:"/_next/static/chunks/9831.296c1ea16c1953c3.js",revision:"296c1ea16c1953c3"},{url:"/_next/static/chunks/9876.db0e8d517d997296.js",revision:"db0e8d517d997296"},{url:"/_next/static/chunks/9972.fd259588474eb11b.js",revision:"fd259588474eb11b"},{url:"/_next/static/chunks/cff3e69d-920d199a4cb08a5f.js",revision:"920d199a4cb08a5f"},{url:"/_next/static/chunks/d6e1aeb5-053445a7f4335efe.js",revision:"053445a7f4335efe"},{url:"/_next/static/chunks/ee8b1517-a3f98d874783aa5c.js",revision:"a3f98d874783aa5c"},{url:"/_next/static/chunks/framework-a2363dd3c3dbe572.js",revision:"a2363dd3c3dbe572"},{url:"/_next/static/chunks/main-1c46ef5b96e83de2.js",revision:"1c46ef5b96e83de2"},{url:"/_next/static/chunks/pages/_app-7d164eb4cacd22c0.js",revision:"7d164eb4cacd22c0"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/embed/chat/readonly-e936bf6f360d9c58.js",revision:"e936bf6f360d9c58"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-9270c487cf63da4d.js",revision:"9270c487cf63da4d"},{url:"/_next/static/chunks/pages/embed/video-bd5669b5308e8917.js",revision:"bd5669b5308e8917"},{url:"/_next/static/chunks/pages/index-11a0c68cc1d395e3.js",revision:"11a0c68cc1d395e3"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-5d38a0ff0e52a1b5.js",revision:"5d38a0ff0e52a1b5"},{url:"/_next/static/css/093b92733bf6dbbe.css",revision:"093b92733bf6dbbe"},{url:"/_next/static/css/1983b553dbfe7f33.css",revision:"1983b553dbfe7f33"},{url:"/_next/static/css/49aa8f99f48200e7.css",revision:"49aa8f99f48200e7"},{url:"/_next/static/css/4b852c938abbe548.css",revision:"4b852c938abbe548"},{url:"/_next/static/css/50564aa5ad9fb4f8.css",revision:"50564aa5ad9fb4f8"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9baa17a5919ecd88.css",revision:"9baa17a5919ecd88"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/bed4e491d29ee4f2.css",revision:"bed4e491d29ee4f2"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/c14fe3388348ec80.css",revision:"c14fe3388348ec80"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/css/f9e51fb8724886f3.css",revision:"f9e51fb8724886f3"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.298e718b.woff",revision:"298e718b"},{url:"/_next/static/media/inter-cyrillic-300-normal.2d6195a9.woff2",revision:"2d6195a9"},{url:"/_next/static/media/inter-cyrillic-400-normal.5122dff0.woff2",revision:"5122dff0"},{url:"/_next/static/media/inter-cyrillic-400-normal.8cbf7092.woff",revision:"8cbf7092"},{url:"/_next/static/media/inter-cyrillic-600-normal.20cfdfd2.woff",revision:"20cfdfd2"},{url:"/_next/static/media/inter-cyrillic-600-normal.9f2082d5.woff2",revision:"9f2082d5"},{url:"/_next/static/media/inter-cyrillic-800-normal.c9f7c98d.woff",revision:"c9f7c98d"},{url:"/_next/static/media/inter-cyrillic-800-normal.f0070c7d.woff2",revision:"f0070c7d"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.65fcfcbf.woff2",revision:"65fcfcbf"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.6e17c5ce.woff",revision:"6e17c5ce"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.06b6faa3.woff2",revision:"06b6faa3"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.0c785d16.woff",revision:"0c785d16"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.4eb7a897.woff2",revision:"4eb7a897"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.d0ef086c.woff",revision:"d0ef086c"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.4dbf28ad.woff",revision:"4dbf28ad"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.f40e584a.woff2",revision:"f40e584a"},{url:"/_next/static/media/inter-greek-300-normal.162ae994.woff",revision:"162ae994"},{url:"/_next/static/media/inter-greek-300-normal.2bd8943a.woff2",revision:"2bd8943a"},{url:"/_next/static/media/inter-greek-400-normal.21a04137.woff",revision:"21a04137"},{url:"/_next/static/media/inter-greek-400-normal.d1deb2fe.woff2",revision:"d1deb2fe"},{url:"/_next/static/media/inter-greek-600-normal.11cc40f0.woff",revision:"11cc40f0"},{url:"/_next/static/media/inter-greek-600-normal.eff3b663.woff2",revision:"eff3b663"},{url:"/_next/static/media/inter-greek-800-normal.c17e275b.woff",revision:"c17e275b"},{url:"/_next/static/media/inter-greek-800-normal.fd6e481c.woff2",revision:"fd6e481c"},{url:"/_next/static/media/inter-greek-ext-300-normal.1040b196.woff2",revision:"1040b196"},{url:"/_next/static/media/inter-greek-ext-300-normal.e76c0ea8.woff",revision:"e76c0ea8"},{url:"/_next/static/media/inter-greek-ext-400-normal.2271c2a1.woff2",revision:"2271c2a1"},{url:"/_next/static/media/inter-greek-ext-400-normal.9ad92a78.woff",revision:"9ad92a78"},{url:"/_next/static/media/inter-greek-ext-600-normal.04ef07b9.woff2",revision:"04ef07b9"},{url:"/_next/static/media/inter-greek-ext-600-normal.249a715f.woff",revision:"249a715f"},{url:"/_next/static/media/inter-greek-ext-800-normal.0344056d.woff",revision:"0344056d"},{url:"/_next/static/media/inter-greek-ext-800-normal.c7813f38.woff2",revision:"c7813f38"},{url:"/_next/static/media/inter-latin-300-normal.7886bf65.woff",revision:"7886bf65"},{url:"/_next/static/media/inter-latin-300-normal.9c0edf75.woff2",revision:"9c0edf75"},{url:"/_next/static/media/inter-latin-400-normal.493934f7.woff2",revision:"493934f7"},{url:"/_next/static/media/inter-latin-400-normal.5a243e9a.woff",revision:"5a243e9a"},{url:"/_next/static/media/inter-latin-600-normal.4a896454.woff",revision:"4a896454"},{url:"/_next/static/media/inter-latin-600-normal.a3e93aa0.woff2",revision:"a3e93aa0"},{url:"/_next/static/media/inter-latin-800-normal.1c3ff413.woff2",revision:"1c3ff413"},{url:"/_next/static/media/inter-latin-800-normal.4ec1c074.woff",revision:"4ec1c074"},{url:"/_next/static/media/inter-latin-ext-300-normal.72d8b28f.woff",revision:"72d8b28f"},{url:"/_next/static/media/inter-latin-ext-300-normal.e5c2b506.woff2",revision:"e5c2b506"},{url:"/_next/static/media/inter-latin-ext-400-normal.261aa6d4.woff2",revision:"261aa6d4"},{url:"/_next/static/media/inter-latin-ext-400-normal.97c153a0.woff",revision:"97c153a0"},{url:"/_next/static/media/inter-latin-ext-600-normal.0a04c3cd.woff2",revision:"0a04c3cd"},{url:"/_next/static/media/inter-latin-ext-600-normal.fd851100.woff",revision:"fd851100"},{url:"/_next/static/media/inter-latin-ext-800-normal.8bb395b7.woff2",revision:"8bb395b7"},{url:"/_next/static/media/inter-latin-ext-800-normal.94943489.woff",revision:"94943489"},{url:"/_next/static/media/inter-vietnamese-300-normal.67c85413.woff",revision:"67c85413"},{url:"/_next/static/media/inter-vietnamese-300-normal.e33128e3.woff2",revision:"e33128e3"},{url:"/_next/static/media/inter-vietnamese-400-normal.668d9df6.woff",revision:"668d9df6"},{url:"/_next/static/media/inter-vietnamese-400-normal.ebde713a.woff2",revision:"ebde713a"},{url:"/_next/static/media/inter-vietnamese-600-normal.df39f196.woff",revision:"df39f196"},{url:"/_next/static/media/inter-vietnamese-600-normal.eb82de1d.woff2",revision:"eb82de1d"},{url:"/_next/static/media/inter-vietnamese-800-normal.1925759d.woff2",revision:"1925759d"},{url:"/_next/static/media/inter-vietnamese-800-normal.f2b1a298.woff",revision:"f2b1a298"},{url:"/_next/static/media/poppins-devanagari-400-normal.87c72f23.woff2",revision:"87c72f23"},{url:"/_next/static/media/poppins-devanagari-400-normal.f2c29400.woff",revision:"f2c29400"},{url:"/_next/static/media/poppins-devanagari-600-normal.3828f203.woff2",revision:"3828f203"},{url:"/_next/static/media/poppins-devanagari-600-normal.6def6ad7.woff",revision:"6def6ad7"},{url:"/_next/static/media/poppins-latin-400-normal.74033fb9.woff",revision:"74033fb9"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-600-normal.94625d71.woff",revision:"94625d71"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.591327bf.woff2",revision:"591327bf"},{url:"/_next/static/media/poppins-latin-ext-400-normal.687cae43.woff",revision:"687cae43"},{url:"/_next/static/media/poppins-latin-ext-600-normal.10939fee.woff2",revision:"10939fee"},{url:"/_next/static/media/poppins-latin-ext-600-normal.22fff013.woff",revision:"22fff013"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute(/^\/admin\/.*$/,new e.NetworkOnly,"GET"),e.registerRoute(/^\/api\/.*$/,new e.NetworkOnly,"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
