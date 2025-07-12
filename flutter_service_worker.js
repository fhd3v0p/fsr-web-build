'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a209682d70ac84361b4732ffc538e0d5",
"version.json": "488305bcc77a5250541a5c2796df4187",
"index.html": "0bc42ea863e0fa5a89a7f6331eb3ffab",
"/": "0bc42ea863e0fa5a89a7f6331eb3ffab",
"main.dart.js": "9925e6437d94862e63687977a065739d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f54fc297461cc0be71ff9002f8b0b499",
"artist_admin.html": "ec26bbd48cb421751842e1181bdd1ceb",
"assets/AssetManifest.json": "ab6b35861ad5ccdcff290c5a17bf02e9",
"assets/NOTICES": "44ebdcba9aa4284423d3644525918d4c",
"assets/FontManifest.json": "26614ad04e97b2782dfe96fa807e239a",
"assets/AssetManifest.bin.json": "27fba12f2d6d46cb52da76645e8072ea",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "271ca02b07c588c96ee9a66ac1b12bc4",
"assets/fonts/MaterialIcons-Regular.otf": "1679f00b6b252ca2a294e489ed3a2e81",
"assets/assets/m3.png": "aa3549984790e9eac6475b91ad0e7c16",
"assets/assets/m2.png": "8e5eadd7937334db55960c8d8c0261d7",
"assets/assets/m1.png": "1555be0f9f8636c8e8f25ef71e7bf804",
"assets/assets/master_detail_back_banner.png": "65dada530c0728fe2669f0e86e3a088e",
"assets/assets/m5.png": "2c9c67e9d1b01238b8ebff1ffd2914bc",
"assets/assets/master_cloud_banner.png": "2d3ec9ad0dac3e4cb3f05f00af661e40",
"assets/assets/m4.png": "314cb6fae955d2b5fc3191bc0b0b5182",
"assets/assets/m6.png": "4ba9f32098b19ab17beab1f453c95b9e",
"assets/assets/master_detail_banner.png": "529f925aadaad806f82311d2bee4b657",
"assets/assets/master_join_banner.png": "2d3ec9ad0dac3e4cb3f05f00af661e40",
"assets/assets/FSR.mp4": "22ea9fb68e81b7f6cb245439e9065edc",
"assets/assets/city_selection_banner.png": "65dada530c0728fe2669f0e86e3a088e",
"assets/assets/avatar5.png": "1555be0f9f8636c8e8f25ef71e7bf804",
"assets/assets/avatar4.png": "2c9c67e9d1b01238b8ebff1ffd2914bc",
"assets/assets/avatar6.png": "4ba9f32098b19ab17beab1f453c95b9e",
"assets/assets/avatar3.png": "aa3549984790e9eac6475b91ad0e7c16",
"assets/assets/avatar2.png": "314cb6fae955d2b5fc3191bc0b0b5182",
"assets/assets/avatar1.png": "8e5eadd7937334db55960c8d8c0261d7",
"assets/assets/main_banner.png": "529f925aadaad806f82311d2bee4b657",
"assets/assets/artists/EMI/gallery5.jpg": "e181bfe8fbb8dbc3da40e181558feeed",
"assets/assets/artists/EMI/gallery4.jpg": "3fd84e6c016599fed8ac0cbc1745771f",
"assets/assets/artists/EMI/gallery6.jpg": "8f28e59588d7b688988713b04900d7c3",
"assets/assets/artists/EMI/links.json": "f991148abd23ef02c7c22b88924257bd",
"assets/assets/artists/EMI/gallery7.jpg": "936f319aa56ed5bd4af32dbeceabe381",
"assets/assets/artists/EMI/gallery3.jpg": "78706ed203405881f8671db5c88b7fe7",
"assets/assets/artists/EMI/gallery2.jpg": "d939074a0718206bf316c9aed1c45b75",
"assets/assets/artists/EMI/gallery1.jpg": "401ecda99eb2aea20dd33d23538ac966",
"assets/assets/artists/EMI/avatar.png": "4ba9f32098b19ab17beab1f453c95b9e",
"assets/assets/artists/EMI/gallery9.jpg": "a9297bd413a5d30fe792d2970962b1a1",
"assets/assets/artists/EMI/gallery8.jpg": "5ca3adcc50e78b930e02062ba34e3de3",
"assets/assets/artists/EMI/gallery10.jpg": "e26dbc5ddeb4b50c8ffd1db17dd73c30",
"assets/assets/artists/EMI/bio.txt": "e4d6b0cded61b47d57061c4633abe8c4",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery5.jpg": "c51233006400d32c852c2bb67bcc8453",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery4.jpg": "0febc6462c3915177c17d08028bfae94",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery6.jpg": "2452ec2fb3c3938f2f9699b94b6649fa",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/links.json": "a0ceb3e39c48fc803afa161cd21037a9",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery7.jpg": "91dd20acc735a562464dcdd32757cb86",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery3.jpg": "a5d13086c37a157e71c71e8a46adb463",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery2.jpg": "3596e5e7b9b147d93530aba07e955a3d",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery1.jpg": "db8953d3ebed0ab31e11c2452a943d25",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/avatar.png": "1555be0f9f8636c8e8f25ef71e7bf804",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery9.jpg": "ba99bf493ede7c53699ed59727fa566c",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery8.jpg": "22a9da2752d9ca7f9c6c70cf00203fb9",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/gallery10.jpg": "b34e010a34ce4178f4680bc1584c0e08",
"assets/assets/artists/%25D0%25A7%25D1%2583%25D1%2587%25D1%2583%25D0%25BD%25D0%25B4%25D1%2580%25D0%25B0/bio.txt": "43bb09c945e3f915a78bedc0e7a5b968",
"assets/assets/artists/MurderDoll/gallery5.jpg": "ae993565f9739706eeaf842aaefecafc",
"assets/assets/artists/MurderDoll/gallery4.jpg": "3597d08d9a457f07e5e4c890104bf04e",
"assets/assets/artists/MurderDoll/links.json": "5e42b8e9a0546497a0d8ba5351c1340f",
"assets/assets/artists/MurderDoll/gallery3.jpg": "73bcd3ae45649f46e4707fb4af771fce",
"assets/assets/artists/MurderDoll/gallery2.jpg": "b9d5b289bd8446344aecdd6340b78ab5",
"assets/assets/artists/MurderDoll/gallery1.jpg": "28391e21c40fc261438a9a93823b66b2",
"assets/assets/artists/MurderDoll/avatar.png": "aa3549984790e9eac6475b91ad0e7c16",
"assets/assets/artists/MurderDoll/bio.txt": "f816bda8d91b5032e5b4ced6272c617b",
"assets/assets/artists/Blodivamp/links.json": "aa68deccfcc159d564af6c82da9076cd",
"assets/assets/artists/Blodivamp/gallery3.jpg": "8bfdf1859bec84bd6ad07416cdf60f80",
"assets/assets/artists/Blodivamp/gallery2.jpg": "95917d2dfb79574ae0ebdd9177b9445e",
"assets/assets/artists/Blodivamp/gallery1.jpg": "1db50e45e701609a4416ca2409fac4e1",
"assets/assets/artists/Blodivamp/avatar.png": "601e329cdd5a57df25c4583f21f32ab9",
"assets/assets/artists/Blodivamp/bio.txt": "2087d3fc7897208edadf03e11a4c85a8",
"assets/assets/artists/msk_tattoo_Alena/gallery5.jpg": "c51233006400d32c852c2bb67bcc8453",
"assets/assets/artists/msk_tattoo_Alena/gallery4.jpg": "0febc6462c3915177c17d08028bfae94",
"assets/assets/artists/msk_tattoo_Alena/gallery6.jpg": "2452ec2fb3c3938f2f9699b94b6649fa",
"assets/assets/artists/msk_tattoo_Alena/links.json": "d325a878f24c6f9de6e5a08ef1a39d04",
"assets/assets/artists/msk_tattoo_Alena/gallery7.jpg": "91dd20acc735a562464dcdd32757cb86",
"assets/assets/artists/msk_tattoo_Alena/gallery3.jpg": "a5d13086c37a157e71c71e8a46adb463",
"assets/assets/artists/msk_tattoo_Alena/gallery2.jpg": "3596e5e7b9b147d93530aba07e955a3d",
"assets/assets/artists/msk_tattoo_Alena/gallery1.jpg": "db8953d3ebed0ab31e11c2452a943d25",
"assets/assets/artists/msk_tattoo_Alena/avatar.png": "1555be0f9f8636c8e8f25ef71e7bf804",
"assets/assets/artists/msk_tattoo_Alena/gallery9.jpg": "ba99bf493ede7c53699ed59727fa566c",
"assets/assets/artists/msk_tattoo_Alena/gallery8.jpg": "22a9da2752d9ca7f9c6c70cf00203fb9",
"assets/assets/artists/msk_tattoo_Alena/gallery10.jpg": "b34e010a34ce4178f4680bc1584c0e08",
"assets/assets/artists/msk_tattoo_Alena/bio.txt": "43bb09c945e3f915a78bedc0e7a5b968",
"assets/assets/artists/Lin++/gallery5.jpg": "70107f9fca1002a2e234d99c5b713153",
"assets/assets/artists/Lin++/gallery4.jpg": "b303d93b098c0c12ac52a08a36375541",
"assets/assets/artists/Lin++/gallery6.jpg": "74daf341401a3892d7d479755c8b768e",
"assets/assets/artists/Lin++/links.json": "d5a70fd9e0fc8f2d7a657c780486bb69",
"assets/assets/artists/Lin++/gallery7.jpg": "136bbe5e547657a7ca3cbf672d5387f4",
"assets/assets/artists/Lin++/gallery3.jpg": "cd162dc5358f83b70ea0059cb65701e3",
"assets/assets/artists/Lin++/gallery2.jpg": "34a192b4f336a78210db7890fb787927",
"assets/assets/artists/Lin++/gallery1.jpg": "c5763ea9b20efe9d31e930818a2c1f24",
"assets/assets/artists/Lin++/avatar.png": "314cb6fae955d2b5fc3191bc0b0b5182",
"assets/assets/artists/Lin++/bio.txt": "9b704b0a27d96c072f9c5002b0e6e04d",
"assets/assets/artists/msk_tattoo_EMI/gallery5.jpg": "e181bfe8fbb8dbc3da40e181558feeed",
"assets/assets/artists/msk_tattoo_EMI/gallery4.jpg": "3fd84e6c016599fed8ac0cbc1745771f",
"assets/assets/artists/msk_tattoo_EMI/gallery6.jpg": "8f28e59588d7b688988713b04900d7c3",
"assets/assets/artists/msk_tattoo_EMI/links.json": "33d3dcea55eb83383c454add17bfd824",
"assets/assets/artists/msk_tattoo_EMI/gallery7.jpg": "936f319aa56ed5bd4af32dbeceabe381",
"assets/assets/artists/msk_tattoo_EMI/gallery3.jpg": "78706ed203405881f8671db5c88b7fe7",
"assets/assets/artists/msk_tattoo_EMI/gallery2.jpg": "d939074a0718206bf316c9aed1c45b75",
"assets/assets/artists/msk_tattoo_EMI/gallery1.jpg": "401ecda99eb2aea20dd33d23538ac966",
"assets/assets/artists/msk_tattoo_EMI/avatar.png": "4ba9f32098b19ab17beab1f453c95b9e",
"assets/assets/artists/msk_tattoo_EMI/gallery9.jpg": "a9297bd413a5d30fe792d2970962b1a1",
"assets/assets/artists/msk_tattoo_EMI/gallery8.jpg": "5ca3adcc50e78b930e02062ba34e3de3",
"assets/assets/artists/msk_tattoo_EMI/gallery10.jpg": "e26dbc5ddeb4b50c8ffd1db17dd73c30",
"assets/assets/artists/msk_tattoo_EMI/bio.txt": "e4d6b0cded61b47d57061c4633abe8c4",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/gallery5.jpg": "db13f40f6fe054a28253ea22ad28e250",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/gallery4.jpg": "012cf32398187dd19c9e0568143601de",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/links.json": "094be4bb70e750d33c92df19ef9f2598",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/gallery3.jpg": "c205f8fe680d043e9d53f48dc8d7070c",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/gallery2.jpg": "08bc7a78d766cbb6673e27f47bd8d9e6",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/gallery1.jpg": "068f1800253b591ecb3b843824f030b5",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/avatar.png": "2c9c67e9d1b01238b8ebff1ffd2914bc",
"assets/assets/artists/%25D0%259A%25D0%25BB%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B0/bio.txt": "cd89a4160bf9fcefe4c8d2d01595b5dd",
"assets/assets/artists/Aspergill/gallery5.jpg": "d16d8e106900ac0d102e1acb863d9c25",
"assets/assets/artists/Aspergill/gallery4.jpg": "e14b5099d902696b27af8161d2abc484",
"assets/assets/artists/Aspergill/gallery6.jpg": "7f916f2679a148226cc23089a05d8b63",
"assets/assets/artists/Aspergill/links.json": "750187b66052d2715a68224b1f001c10",
"assets/assets/artists/Aspergill/gallery7.jpg": "e648e8c9a759958dbf6b2b2a6f6b0573",
"assets/assets/artists/Aspergill/gallery3.jpg": "b1ffa65f50181488bfbca80e869b80c3",
"assets/assets/artists/Aspergill/gallery2.jpg": "8f3d356f935114d6c5e573584633c093",
"assets/assets/artists/Aspergill/gallery1.jpg": "bef1abff25e6b5336312688fe9a6fcc8",
"assets/assets/artists/Aspergill/avatar.png": "8e5eadd7937334db55960c8d8c0261d7",
"assets/assets/artists/Aspergill/gallery9.jpg": "a407a8474455536a358e97e6c96a786e",
"assets/assets/artists/Aspergill/gallery8.jpg": "fc8bd6268465ceffa9a7508fcdb8a1c8",
"assets/assets/artists/Aspergill/gallery10.jpg": "b249f2d146501c4d754544068a5f9672",
"assets/assets/artists/Aspergill/bio.txt": "68100fa2ea61d3e77fc3d67739dc7c57",
"assets/assets/artists/Naidi/gallery5.jpg": "ae216c05f6720415754cd2cc35e04178",
"assets/assets/artists/Naidi/gallery4.jpg": "916713d44d861fd3f3982d8f5e4faed7",
"assets/assets/artists/Naidi/links.json": "3cc3f75410366b4d1018be3416c4b5f0",
"assets/assets/artists/Naidi/gallery3.jpg": "bc4792c92c2ede2c268ad3b4d926c273",
"assets/assets/artists/Naidi/gallery2.jpg": "bc1486de15b6445662ae00247c372908",
"assets/assets/artists/Naidi/gallery1.jpg": "63a6803bf3f320d41694a90b5eec1324",
"assets/assets/artists/Naidi/avatar.png": "1e6a2014c23cb0060d923a2b4aaca677",
"assets/assets/artists/Naidi/bio.txt": "116215933e4d3ab82cbe5c3b31a9f4ec",
"assets/assets/master_detail_logo_banner.png": "dfaa8ecedae1f3e327bbfd85266d5975",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "a0551be4db7f325256eeceb43ffe4951",
"assets/assets/fonts/Lepka.otf": "312770ed70de89fd3266153bf817b258",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/NauryzKeds.ttf": "1efc9dc7414e979667bdca47989dff12",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/OpenSans-Light.ttf": "68e60202714c80f958716e1c58f05647",
"assets/assets/fonts/OpenSans-Italic.ttf": "0d14a7773c88cb2232e664c9d586578c",
"assets/assets/fonts/OpenSans-Bold.ttf": "69709f078a6f54896ec90f22c602eb4e",
"assets/assets/fonts/OpenSans-Regular.ttf": "554f2471c4a6d6dfc92939ea0a418f00",
"assets/assets/role_selection_banner.png": "65dada530c0728fe2669f0e86e3a088e",
"assets/assets/center_memoji.png": "dfaa8ecedae1f3e327bbfd85266d5975",
"assets/assets/giveaway_banner.png": "dfaa8ecedae1f3e327bbfd85266d5975",
"assets/assets/giveaway_back_banner.png": "2d3ec9ad0dac3e4cb3f05f00af661e40",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
