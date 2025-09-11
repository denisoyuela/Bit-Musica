// Data de las canciones
const songs = [
    {id: 1,  title: "Narvent - Memory Reboot", artist: "VØJ", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_kW62IAuW3s2dE9ehWDTEkp8v1hT8idUVA&s", audio: "VØJ, Narvent - Memory Reboot (Sped Up  4K Music Video) - Narvent.mp3"},
    {
title: "#voyuitwaaien", artist: "latex fruit", src: "voyuitwaaien (SUPER slowed + reverb) - latex fruit.mp3",  duration: "2:00",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwi6RjObi8gfJfydASsTnhX00dttn8GpPBgQ&s",
}, {id:2,
title: "Death Is No More", artist: "NEDOSTUPNOSTЬ", src: "BLESSED MANE - Death Is No More - NEDOSTUPNOSTЬ.mp3",  duration: "2:19",
cover: "https://i.ytimg.com/vi/pZQfInj_UNo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDggWyhyMA8=&rs=AOn4CLCkn4DSB4XN5oTyVWjKWjeXXeRg6g",
}, { id:3,
title: " Montagem Mysterious", artist: "LXNGVX", src: "LXNGVX - Montagem Mysterious Game (Official Music) - LXNGVX.mp3",  duration: "1:43",
cover: "https://i.scdn.co/image/ab67616d0000b273478d1f4434f354e244f6ec06",
}, {id:4,
title: "smezir_2 (Slowed)", artist: "ilyhiryu", src: "ilyhiryu - smezir_2 (Slowed) - void.mp3",  duration: "4:00",
cover: "https://i.scdn.co/image/ab67616d0000b2733e0e5b15b6a6a0d054277043",
}, {id:5,
title: "Work ft. Drake ", artist: "Rihanna", src: "Rihanna - Work ft. Drake - LatinHype.mp3",  duration: "3:36",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SOOYfgtqlZXS8Ga_hHGiAQLuseONC3wQ9A&s",
},  {id:6,
title: "Knockin' On Heaven'", artist: "Guns N' Roses", src: "Guns N' Roses - Knockin' On Heaven's Door (Visualizer) - GunsNRosesVEVO.mp3",  duration: "5:36",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizfpqveNPVF4JPnP7_qZlE_Udqh6U4F2cfg&s",
}, {id:7,
title: "Another Rhythm Records", artist: "Boy North", src: "Boy North - Was It The Wind That Stirred The Trees - Another Rhythm Records.mp3",  duration: "5:37",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Nzd-DC36sXaf1SJzg6W6ZZezV12bK5scA&s",
},

{id:8,
title: "Interstellar ", artist:  "Hans Zimmer", src: "Interstellar Official Soundtrack  No Time For Caution – Hans Zimmer  WaterTower - WaterTower Music.mp3",  duration: "4:07",
cover: "https://i.ytimg.com/vi/kpK4cDk2bRs/sddefault.jpg",
}, {id:9,
title: "In For It - ", artist: "Tory Lanez", src: "In For It - Tory Lanez.mp3",  duration: "4:54",
cover: "https://i.ytimg.com/vi/Amp86v4Nd8Q/maxresdefault.jpg",
},

{id:10,
title: "oh mi Angel",
artist: "Bertha Tillman",
src: "oh mi Angel.mp3",
cover: "https://i.scdn.co/image/ab67616d0000b273ce3f7a5726537f3fd14f2188",
duration: "2:18"
},
{id:11,
title: "Travis Scott",
artist: "travis",
src: "travis.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVgByNdbDntccUbO5tWmaVCCGVm_EPlCx8w&s",
duration: "4:12"

},
{id:12,
title: "November South",
artist: "Will Harrison",
src: "Our Father’s Sins (Official Lyric Video) - November South.mp3",
cover: "https://i.scdn.co/image/ab676161000051746c08d788686ad7b2f84d9800",
duration: "3:16"
},
{id:13,
title: " You’re Gonna Go Far ",
artist: "Noah Kahan",
src: "Noah Kahan - You’re Gonna Go Far (Official Lyric Video) - NoahKahanVEVO.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_kKJbSMfVMVm873vbzqFqokVjkpEG5aHvA&s",
duration: "4:46"
},
{id:14,
title: "Star Eater",
artist: "Daniel Deluxe",
src: "Star Eater - Daniel Deluxe.mp3 ",
cover: "https://cdn-images.dzcdn.net/images/cover/80acb36159cb75f910d44155a0b5df98/500x500-000000-80-0-0.jpg",
duration: "4:32"
},
{id:15,
title: "VEKI VEKI",
artist: "DJZRX",
src: "VEKI VEKI (Slowed) - DJZRX.mp3 ",
cover: "https://i.ytimg.com/vi/rpSe5mCdj4k/maxresdefault.jpg",
duration: "1:34"
},
{id:16,
title: "Long Distance ",
artist: "BigBoa",
src: "Long Distance - BigBoa.mp3 ",
cover: "https://i.scdn.co/image/ab67616d0000b273c635af22a8b9296d4be223f4",
duration: "1:57"
},
{id:16,
title: "Welcome and Goodbye",
artist: "Dream, Ivory",
src: "Dream, Ivory - Welcome and Goodbye - David Dean Burkhart.mp3 ",
cover: "https://cdn-images.dzcdn.net/images/cover/5f4f2cbf313f2f604783a7c608727b83/1900x1900-000000-80-0-0.jpg",
duration: "2:21"
},
{id:17,
title: "Big Enough (feat. Alex Cameron)",
artist: "Kirin J Callinan",
src: "Kirin J Callinan - Big Enough (feat. Alex Cameron) - TERRIBLE RECORDS.mp3 ",
cover: "https://i.ytimg.com/vi/sgNeF3eCp_g/mqdefault.jpg",
duration: "4:44"
},
{id:18,
title: "magic - ",
artist: "Medasin",
src: "magic - Medasin.mp3 ",
cover: "https://i1.sndcdn.com/artworks-fYc5QnZF88cM-0-t500x500.jpg",
duration: "5:57"
},
{id:19,
title: " Let Go",
artist: "Ark Patrol",
src: "Ark Patrol - Let Go (feat. Veronika Redd) - MrSuicideSheep.mp3 ",
cover: "https://i.scdn.co/image/ab67616d0000b27331e9a5c86d008b6422462d40",
duration: "4:08"
},
{id:20,
title: "[Official Visualiser]",
artist: "BIOS - Zorrovian",
src: "BIOS - Zorrovian [Official Visualiser] - Zorrovian.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sgJ-M5rQ6krNGSSdXqcNX4Bi06AueyLphA&s.jpg",
duration: "5:13"
},
{id:21,
title: "You're Perfect",
artist: "Charly Black",
src: "Charly Black - You're Perfect (Official Video) - CharlyBlackVEVO.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2kl-qeWBsBcrmEDYPBNEdupunGScGh6ZEg&s.jpg",
duration: "3:19"
},
{
title: "Suffocation x Goth (mashup)",
artist: "Jake Lee",
src: "Suffocation x Goth (mashup) - Crystals Castles and Sidewalks and Skeletons - Just chill.mp3",
cover: "https://i.ytimg.com/vi/Fw2fMqw9Q1w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCYgXih_MA8=&rs=AOn4CLBws2Dn6bi17ZA8PFDJHUDRU69JHQ.jpg",
duration: "3:12"
},
{id:22,
title: "The Mamas & The Papas",
artist: "John Phillips",
src: "The Mamas & The Papas - California Dreamin' - Folk Experience.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vTNfq7qN-RHIrA_AfdnrIrhTTr6deVpkfw&s.jpg",
duration: "2:38"
},
{id:23,
title: " Dancing Queen",
artist: "ABBA",
src: "ABBA - Dancing Queen (Official Music Video) - AbbaVEVO.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9N29Tpr3oSSjJflNzbqlkQ4o9pNg6ygn1Q&s.jpg",
duration: "3:53"
},
{id:24,
title: "From Eden",
artist: "Hozier ",
src: "Hozier - From Eden - Hozier.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAXJUIi2ftGOmTWOMsI7eol0PZCzP5XtlRA&s.jpg",
duration: "3:43"
},
{
title: " Michael Stein - Kids ",
artist: "Kyle Dixon",
src: "Kyle Dixon & Michael Stein - Kids - Intensive Drops Network.mp3",
cover: "https://i.ytimg.com/vi/Ha2OcL_0gtM/sddefault.jpg",
duration: "2:38"
},
{id:25,
title: "IRIS",
artist: "PASTEL GHOST",
src: "PASTEL GHOST _ IRIS - PASTEL GHOST.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7nhKx6SjVOqB0my8ByW19Kr11T-CS0E7IA&s.jpg",
duration: "3:38"
},
{id:26,
title: "She Is",
artist: " The Fray",
src: "She Is - The Fray.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxjTkqpE7Slpr78xS7iZBLhmtljj901VAug&s.jpg",
duration: "3:57"
},

{id:27,
title: "Memory Reboot",
artist: "VØJ",
src: "VØJ, Narvent - Memory Reboot (4K Music Video) - Narvent.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwocosrgaBuJEX92vPBC1cermuzyy-NyJ7g&s.jpg",
duration: "3:57"
},
{id:28,
title: " MORTEN - Never Be Alone",
artist: "David Guetta",
src: "David Guetta & MORTEN - Never Be Alone (feat Aloe Blacc) - David Guetta.mp3",
cover: "https://m.media-amazon.com/images/I/41aMP8x0yjL._UXNaN_FMjpg_QL85_.jpg",
duration: "2:59"
},
{id:29,
title: "You Are the Woman ",
artist: "Firefall",
src: "You Are the Woman - Firefall.mp3",
cover: "https://i.ytimg.com/vi/lakFEx_9cT4/hqdefault.jpg",
duration: "3:54"
},
{id:30,
title: "Heads Will Roll",
artist: "Yeah Yeahs",
src: "Heads Will Roll (A-Trak Remix) - Yeah Yeah Yeahs.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHH39tl3Y8c2KVt6P-hW3FgCJS57DlWHj_Q&s.jpg",
duration: "6:24"
},
{id:31,
title: "Girl You Loud (Lyrics)",
artist: "Chris Brown",
src: "Chris Brown - Girl You Loud (Lyrics) ft. Tyga - R&BHype.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7R_o3bY0UaFXbCSeao2E9TJJs02SEgxVxw&s.jpg",
duration: "3:34"
},
{id:32,
title: "Sharon den Adel ",
artist: "Armin van Buuren",
src: "Armin van Buuren feat. Sharon den Adel - In And Out Of Love (Official Music Video) - Armada Music TV.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtqNj5rR91l0fZ8BVCtDiYnS2lLRdJTsYMg&s.jpg",
duration: "3:08"
},
{id:33,
title: " Solitude",
artist: "juno, blindheart ",
src: "juno, blindheart - Solitude - Kurate Music.mp3",
cover: "https://i.ytimg.com/vi/PlKB7yc_RwA/sddefault.jpg",
duration: "2:32"
},
{id:34,
title: "Dramamine",
artist: "Flawed Mangoes",
src: "Flawed Mangoes - Dramamine (Visualizer) - Flawed Mangoes.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7Q98V-YGB6v2grlhLFelP8b08JKYKjTGDQ&s.jpg",
duration: "3:26"
},
{id:35,
title: "Ever Fallen In Love",
artist: "Pete Yorn",
src: "Pete Yorn - Ever Fallen In Love - Pete Yorn.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYViGpQZPmPoYQmG9W4bDvn1HmlLf5qcyPPQ&s.jpg",
duration: "2:33"
},
{id:36,
title: "U Weren't Here ",
artist: "Cult Member",
src: "U Weren't Here I Really Miss You - Cult Member.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHQhcRPdee9Bn_xC7lVwd0d5sT2da3IZrg&s.jpg",
duration: "2:41"
},
{id:37,
title: "Scott Street ",
artist: "Phoebe Bridgers",
src: "Phoebe Bridgers - Scott Street (Official Video) - Phoebe Bridgers.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbawIKSU7hkCNyYj4v1tI0y3Ds3MgE-zofjw&s.jpg",
duration: "5:07"
},
{id:38,
title: " Me And You",
artist: "Brenton Wood",
src: "Me And You - Brenton Wood from the album Baby You Got It - The Bicycle Music Company.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRFFmaFCMKby-hMoWxnboSjrvu6cE5gIjQA&s.jpg",
duration: "3:00"
},
{id:39,
title: " I'm God",
artist: "Clams Casino",
src: "I'm God - Clams Casino.mp3",
cover: "https://i.ytimg.com/vi/1Hoi9eVWLW0/mqdefault.jpg",
duration: "4:38"
},
{id:40,
title: "Killer",
artist: " Mareux",
src: "Mareux - Killer (Official Lyric Video) - Mareux.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirTxlVjdpf-gRFV9X3Nd7KnRWGbQVJb9sMg&s.jpg",
duration: "3:04"
},
{id:41,
title: "Seve (Slow",
artist: "Tez Cadey",
src: "Seve (Slow Version) - Tez Cadey.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTcUKqujdeBpsqNVEvMIYiV3GdqJzKsM9xw&s.jpg",
duration: "5:34"
},
{id:42,
title: "Heat Waves",
artist: "Glass Animals",
src: "Glass Animals - Heat Waves (Official Video) - GlassAnimalsVEVO.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJiENv-mRQNHg0vhUy_PLSwM0Rwdk2KPDvg&s.jpg",
duration: "3:56"
},
{id:43,
title: "Drive",
artist: "The Cars",
src: "The Cars - Drive (Official Music Video) - RHINO.mp3",
cover: "https://i.ytimg.com/vi/xuZA6qiJVfU/sddefault.jpg",
duration: "3:55"
},
{id:44,
title: " Thinkin Bout U ",
artist: "NVOY ",
src: "NVOY - Thinkin Bout U (VIP Mix) - Selected..mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx0hUUFs0788JIJO0tyAXNMXSyupQL55iSg&s.jpg",
duration: "4:16"
},
{id:45,
title: "Before It's Too Late",
artist: "Goo Goo Dolls",
src: "Goo Goo Dolls - Before It's Too Late (Sam and Mikaela's Theme) [Official Music Video] - Goo Goo Dolls.mp3",
cover: "https://i.ytimg.com/vi/SVl4_hxMDcA/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGH8gWyggMA8=&rs=AOn4CLAOj_JqVlQty80Dwb6ec5Yj1vEn8g.jpg",
duration: "3:20"
},
{id:46,
title: "Resonance",
artist: "HOME",
src: "HOME - Resonance - Electronic Gems.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFvCQXRjFBVGRSlJr4jeKuxDSGbaeYATMaA&s.jpg",
duration: "3:33"
},
{id:47,
title: "i feel lost ",
artist: "Aaron Hibell",
src: "Aaron Hibell - i feel lost [official audio] - Aaron Hibell.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMd6LldQAZlZyc5UcTgOYDrTon_IJbK1R7w&s.jpg",
duration: "3:28"
},
{id:48,
title: "Stray.wav ",
artist: "uNDOWN",
src: "undown - Stray.wav - Kurate Music.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCHIRd-PPPoaThB6_mh6ZxOToiGmNDBq7Pg&s.jpg",
duration: "1:42"
},
{id:49,
title: "If I Got U",
artist: "Max Bering ",
src: "Max Bering - If I Got U - Sirup Music.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKM5zvWsvE9jYkqJxFKDvh0jPJ60gFBt_yw&s.jpg",
duration: "2:43"
},
{id:50,
title: "Sidewalks and Skeletons",
artist: "Goth",
src: "Goth (Slowed + Reverb) - Sidewalks and Skeletons.mp3",
cover: "https://cdn-images.dzcdn.net/images/cover/234f0b5f7d0dc3417243ae16c371f770/500x500.jpg",
duration: "4:13"
},
{id:51,
title: "You look lonely",
artist: "Music Listener",
src: "You look lonely  i can fix that x Home   Resonance x Rain slowed to literal perfection + reverb - Music Listener.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMXIHx5vztgBPPf0EilU5UHjBKt19lpufUQ&s.jpg",
duration: "5:18"
},
{id:52,
title: "Ten Toes ",
artist: "Angel Numbers",
src: "Chris Brown - Angel Numbers _ Ten Toes (Official Video) - ChrisBrownVEVO.mp3",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZdJ3iGz-WXdtxKYA5mcU29TKJjM51HKDsw&s.jpg",
duration: "5:08"
},
{id:53,
title: "Baby Come Back ",
artist: "Player ",
src: "Player - Baby Come Back (Lyrics) - PHANTOM RECORDS.mp3",
cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/d/2/e/5/535031474381568.jpg",
duration: "4:14"
},
{id:54,
title: "Party Anthem ",
artist: "Monkeys",
src: "No. 1 Party Anthem - Arctic Monkeys.mp3",
cover: "https://i.ytimg.com/vi/mGUjVbsYG6E/maxresdefault.jpg",
duration: "4:04"
},
{id:55,
title: "Eyes Without A Face", artist: "Billy Idol", src: "Billy Idol - Eyes Without A Face - BillyIdolVEVO.mp3",  duration: "4:55",
cover: "https://i.ytimg.com/vi/9OFpfTd0EIs/maxresdefault.jpg",
},
{id:56,
title: " Too Many Nights", artist: "Metro Boomin", src: "Metro Boomin, Don Toliver, Future - Too Many Nights (Official Video) - Metro Boomin.mp3",  duration: "3:23",
cover: "https://i.scdn.co/image/ab67616d0000b2738b1c1ed89416696a71a8ae4f",
},
{id:57,
title: "Walker Texas Ranger", artist: "The Tennessee Warblers", src: "Walker Texas Ranger - The Eyes of the Ranger - CAT Music Maker.mp3",  duration: "2:50",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHviggAnMHBy6tIW3IlSde1VObZKAPF63jXA&s",
},

{id:58,
title: "crystal castles", artist: "evangeline", src: "crystal castles - suffocation (sped up + reverb) - evangeline.mp3",  duration: "3:41",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5edCODvaGWUDBcEdOjnuLSmhRaQ3aJQ2jg&s",
},
{ id:59,
title: "Safe and Sound ", artist: "Capital Cities", audio: "Capital Cities - Safe and Sound (DiscoTech Remix) - Capital Cities.mp3",  
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwNdUrSIDcFst_3uE1p6a2vIMD8V8b4tUOw&s",
},
{ id:60,
title: "Disclosur", artist: "Sam Smith", src: "Disclosure - Latch ft. Sam Smith - DisclosureVEVO.mp3",  duration: "4:17",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFI71Ri6LEaTMiWfY_h8sNDKl1j93UkLIWw&s",
},
{ id:61,
title: "Young Black & Rich", artist: "Melly Mike", src: "Melly Mike - Young Black & Rich (Official Music Video) - Melly Mike.mp3",  duration: "2:32",
cover: "https://i.ytimg.com/vi/F3qWBh7jZZ0/maxresdefault.jpg",
},
{ id:62,
title: " Distant Echoes", artist: "VXLLAIN", src: "VXLLAIN, VØJ, Narvent - Distant Echoes (4K Official Music Video) - VXLLAIN.mp3",  duration: "3:04",
cover: "https://i.scdn.co/image/ab67616d0000b273ae71c97bfe3e39d1f63e7ebc",
},
{ id:63,
title: "crier, sixnite", artist: "DJ Anemia", src: "DJ Anemia, crier, sixnite — archangel (Slowed) (Official Visualizer) - DJ Anemia.mp3",  duration: "3:07",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuzgH9TQyc8Axw4E2_-vNCpcW0c9IJCvXKA&s",
},
{ id:64,
title: " Free-Russian Roulette", artist: "PRXD. TRXVEL", src: " Free-Russian Roulette (nothing,nowhere_guccihighwater type beat) - PRXD. TRXVEL.mp3",  duration: "2:45",
cover: "https://i.ytimg.com/vi/cHy-rm3jVQw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgXihUMA8=&rs=AOn4CLCZamkod7qedzASAJqcpO_5khNtrw",
},
{ id:65,
title: "& Rebūke", artist: "Anyma", src: " Anyma & Rebūke - Syren [Live from Afterlife Tomorrowland] - Afterlife.mp3",  duration: "2:17",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrzBO8gvXQQf24Z7Hh-9Ld0DOwWOu9I0rtQ&s",
},
{ id:66,
title: "Infinity ", artist: "Dj Tiesto", src: " Dj Tiesto   Infinity - diego zamora.mp3",  duration: "3:09",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrR5RBZBu3YT6Tbqb3s0yixEcVALZSoPIjw&s",
},

{ id:67,
title: "No Money ", artist: "Galantis", src: " Galantis - No Money (Official Video) - Galantis.mp3",  duration: "3:32",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFP2GuXTjH-2AvxslfmbfsoxohTM-Uicb5JQ&s",
}, { id:68,
title: "El Teléfono", artist: "Hector Bambino EL Father", src: " Hector Bambino EL Father, Wisin & Yandel - El Teléfono (Official Video) - Wisin & Yandel Fans.mp3",  duration: "3:58",
cover: "https://i.ytimg.com/vi/5ensVGQU9Xg/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHOBYAC0AWKAgwIABABGDIgWyhyMA8=&rs=AOn4CLAaYl86L9_OImznLECFE4UXvZUY-A",
}, { id:69,
title: "Runaway ", artist: "Galantis", src: " Galantis - Runaway (U & I) (Official Video) - Galantis.mp3",  duration: "4:24",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmSqgMgzlE45R8svVlZjV09bVKB9hp1fQOA&s",
}, { id:70,
title: "childhood", artist: "Daniel Vogel", src: " childhood - daniel.mp3.mp3",  duration: "2:10",
cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFI-IivPoSWft_KNonN-lN8SBI6nWYqgLPzA&s",
}, { id:71,
title: "Mine", artist: "Bazzi", src: " Bazzi – Mine (Lyrics) 🎵 - Pixl Networks.mp3",  duration: "2:15",
cover: "https://www.billboard.com/wp-content/uploads/media/Bazzi-Mine-screenshot-billboard-1548.jpg",
}, { id:72,
title: "You look lonely", artist: "mikeeysmind", src: " Simpsonwave (You look lonely) - mikeeysmind.mp3",  duration: "2:43",
cover: "https://i1.sndcdn.com/artworks-rqPypCPqZBuf-0-t500x500.jpg",
}, { id:73,
title: "Carton – On& On ", artist: "Daniel Levi", src: " Carton – On& On (feat. Daniel Levi)[No Copyright Music][Music safe]-audio4K [FREE]♫ - audio 4k    For Creator 🎧.mp3",  duration: "2:29",
cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Cartoon_-_On_%26_On.png/250px-Cartoon_-_On_%26_On.png",
}, 

 
];

// Referencias a los elementos del DOM
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentAlbumArt = document.getElementById('current-album-art');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');
const libraryList = document.getElementById('library-list');
const forYouList = document.getElementById('for-you-list');
const searchBar = document.getElementById('search-bar');

let currentSongIndex = -1;
let isPlaying = false;

// Función para renderizar la lista de canciones en la biblioteca
function renderLibrary(filteredSongs) {
    libraryList.innerHTML = '';
    filteredSongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('flex', 'items-center', 'space-x-4', 'p-4', 'bg-gray-800', 'rounded-xl', 'cursor-pointer', 'hover:bg-gray-700', 'transition-colors', 'duration-200');
        songItem.dataset.id = song.id;

        songItem.innerHTML = `
            <img src="${song.cover}" alt="Album Art" class="w-12 h-12 rounded-lg">
            <div class="flex-1">
                <p class="font-semibold text-sm sm:text-base">${song.title}</p>
                <p class="text-gray-400 text-xs sm:text-sm">${song.artist}</p>
            </div>
        `;
        songItem.addEventListener('click', () => playSong(song.id));
        libraryList.appendChild(songItem);
    });
}

// Función para renderizar la sección "Para Ti" con canciones aleatorias
function renderForYou() {
    forYouList.innerHTML = '';
    const shuffledSongs = [...songs].sort(() => 0.5 - Math.random());
    const selectedSongs = shuffledSongs.slice(0, 4); // Muestra 4 canciones

    selectedSongs.forEach(song => {
        const songCard = document.createElement('div');
        songCard.classList.add('flex', 'flex-col', 'items-center', 'text-center', 'cursor-pointer', 'hover:opacity-80', 'transition-opacity', 'duration-200');
        songCard.dataset.id = song.id;

        songCard.innerHTML = `
            <img src="${song.cover}" alt="Album Art" class="w-full rounded-xl mb-2 shadow-lg">
            <p class="font-semibold text-sm truncate w-full">${song.title}</p>
            <p class="text-gray-400 text-xs truncate w-full">${song.artist}</p>
        `;
        songCard.addEventListener('click', () => playSong(song.id));
        forYouList.appendChild(songCard);
    });
}

// Cargar y reproducir una canción
function playSong(songId) {
    const song = songs.find(s => s.id === songId);
    if (!song) return;

    currentSongIndex = songs.indexOf(song);

    audioPlayer.src = song.audio;
    audioPlayer.play();
    isPlaying = true;
    updateUI(song);
    updatePlayPauseButton();
}

// Actualizar la interfaz de usuario con la información de la canción
function updateUI(song) {
    currentAlbumArt.src = song.cover;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
}

// Control de reproducción
function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

// Navegación entre canciones
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(songs[currentSongIndex].id);
}

function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(songs[currentSongIndex].id);
}

// Escuchar eventos
playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

audioPlayer.addEventListener('ended', playNextSong);

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );
    renderLibrary(filteredSongs);
});

// Inicializar la interfaz al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderForYou();
    renderLibrary(songs);
    if (songs.length > 0) {
        playSong(songs[0].id);
        audioPlayer.pause();
        isPlaying = false;
        updatePlayPauseButton();
    }
});
