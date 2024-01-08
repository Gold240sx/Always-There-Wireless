// import React from "react"
import { BibleRef } from "./bibleRef"
import wordsRef from "./words"
import mishnahRef from "./mishnahRef"

// type ChannelProps =
// 	| {
// 			value: string
// 			label: string
// 			speakers: string[]
// 			link: string
// 			social?: {
// 				public?: {
// 					facebook?: string
// 					phone?: string
// 					email?: string
// 					whatsApp?: ""
// 				}
// 				private?: {
// 					whatsApp?: string
// 				}
// 				schedule?: {
// 					sunday: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 					monday: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 					tuesday: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 					wednesday: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 					thursday: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 					friday: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 					shabbos: [
// 						{
// 							time?: "9:30 a.m."
// 							zone?: "CST"
// 							title?: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer"
// 							speaker?: "Rabbi Tovia Singer"
// 						},
// 					]
// 				}
// 			}
// 			schedule?: [
// 				{
// 					sunday: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 					monday: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 					tuesday: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 					wednesday: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 					thursday: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 					friday: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 					sabbath: [
// 						{
// 							time: string
// 							zone: string
// 							title: string
// 							speaker: string
// 						},
// 					]
// 				},
// 			]
// 	}
// 	| { value: "Other"; label: "Other" }

const SiteParams = {
	companyName: "Tenak.Study",
	website: "tenak.study",
	navigation: [
		{ name: "About", href: "/about" },
		{ name: "Questions", href: "/questions" },
		{ name: "Add Question", href: "/addQuestion" },
		{ name: "Add Question2", href: "/addQuestion2" },
		{ name: "Careers", href: "/careers" },
	],
	channels: {
		selectOptions: [
			{
				value: "Tenak Talk",
				label: "Tenak Talk",
				speakers: [
					"Tovia Singer",
					"Greg Mcbride",
					"Michael Skobac",
					"Rabbi Stuart Federow",
					"Other",
				],
				link: "https://www.youtube.com/@tenaktalk",
				social: {
					public: {
						facebook: "https://www.facebook.com/TeNaKTalk/",
						phone: "(855) 952-4253",
						email: "william@tanachtalk.com",
					},
					private: {
						whatsApp: "",
					},
				},
				schedule: {
					sunday: [
						{
							time: "9:30 a.m.",
							zone: "CST",
							title: "Let's Get Biblical Q&A (LIVE) Rabbi Tovia Singer",
							speaker: "Rabbi Tovia Singer",
						},
						{
							time: "7:00 p.m.",
							zone: "CST",
							title: "***most Sundays*** 2-Guys Premiere (REPLAY)",
							speaker: "Greg Mcbride",
						},
					],
					monday: [
						{
							time: "9:00 a.m.",
							zone: "CST",
							title: "A Rabbi Cross-Examines the New Testament (LIVE) Rabbi Michael Skobac",
							speaker: "Rabbi Michael Scobac",
						},
						{
							time: "7:00 p.m.",
							zone: "CST",
							title: "TNT (LIVE) with Rabbi Stuart Federow",
							speaker: "Rabbi Stuart Federow",
						},
					],
					tuesday: [
						{
							time: "7:00 p.m.",
							zone: "CST",
							title: "***Most Tuesdays*** Premiere (REPLAY)",
							speaker: "",
						},
					],
					wednesday: [
						{
							time: "5:30 p.m.",
							zone: "CST",
							title: "Torah Talk Weekly Parsha (LIVE)",
							speaker: "Rabbi Michael Scobac",
						},
						{
							time: "7:00 p.m.",
							zone: "CST",
							title: "2 Guys with Greg McBride (LIVE)",
							speaker: "Greg Mcbride",
						},
					],
					thursday: [
						{
							time: "7:00 p.m.",
							zone: "CST",
							title: " ***Most Thursdays*** Premiere (REPLAY)",
							speaker: "",
						},
					],
					friday: {},
					sabbath: {},
				},
			},
			{
				value: "Tovia Singer",
				label: "Tovia Singer",
				speakers: ["Rabbi Tovia Singer", "Dr Roi Yozevitch"],
				link: "https://www.youtube.com/@ToviaSinger1",
			},
			{
				value: "NETIV",
				label: "NETIV",
				speakers: ["Rod Bryan", "Tovia Singer", "Rabbi Yaakov Wolbe"],
				link: "https://www.youtube.com/@NetivOnline",
			},
			{
				value: "Jews For Judaism",
				label: "Jews For Judaism",
				speakers: ["Michael Skobac", "Tovia Singer"],
				link: "https://www.youtube.com/@JewsforJudaismCanada",
			},
			{
				value: "Rabbi YY Jacobson",
				label: "Rabbi YY Jacobson",
				speakers: ["Rabbi YY Jacobson"],
				link: "https://www.youtube.com/@RabbiYYJacobson",
			},
			{
				value: "Chevra Rav Moshe Chaim",
				label: "Chevra Rav Moshe Chaim",
				speakers: ["Chevra Rav Moshe Chaim"],
				link: "https://www.youtube.com/@ChevraRavMosheChaim",
			},
			{
				value: "Simon Jacobson - Meaningful Life Center",
				label: "Simon Jacobson - Meaningful Life Center",
				speakers: ["Simon Jacobson"],
				link: "https://www.youtube.com/@Meaningfullifecenter",
			},
			{
				value: "Rav Dror - Freedom Through Faith",
				label: "Rav Dror - Freedom Through Faith",
				speakers: ["Rav Dror"],
				link: "https://www.youtube.com/ravdror",
			},
			{ value: "Other", label: "Other" },
		],
	},
	resources: {
		channels: [
			{
				type: "channel",
				name: "Aleph Beta",
				link: "https://www.youtube.com/@AlephBeta",
				focuses: [
					{
						id: 1,
						focus: "https://youtube.com/playlist?list=PLmG0lNuEBb3BHcFiSS8mqo6n80hhMBZcn&si=69DQPnvGNwv9J6o0",
						focusLabel: "Weekly Parsha Experiment",
						description: "",
						type: "video series",
					},
				],
			},
			{
				type: "channel",
				name: "Meaningful People",
				link: "https://www.youtube.com/@MeaningfulPeople",
			},
		],
		education: {
			books: [
				// counter-missionary
				{
					focus: "counter-missionary / Christian Study",
					name: "Let's Get Biblical",
					link: "https://outreachjudaism.org/shop/lets-get-biblical-expanded-2-volume-study-guide/",
					publisher: "Outreach Judaism",
					author: "Rabbi Tovia Singer",
					description: "Christian / Jewish Belief and Text Comparison",
					image: "",
					language: "English"
				},
				{
					focus: "counter-missionary / Christian Study",
					name: "Judaism & Christianity: A Contrast",
					link: "https://amzn.to/3Tjq4Vw",
					publisher: "iUniverse",
					author: "Rabbi Stuart Federow",
					description: "A comparison of Judaism and Christianity",
					image: "",
					language: "English"
				},
				{
					focus: "counter-missionary / Christian Study",
					name: "Judaismo y Cristianismo: Un contraste (Spanish Edition)",
					link: "https://amzn.to/3zYah7B",
					publisher: "iUniverse",
					author: "Rabbi Stuart Federow",
					description: "Una comparación del judaísmo y el cristianismo",
					image: "",
					language: "Spanish"
				},
				// Noahide Study
				{
					focus: "Noahide Study",
					name: "The Seven Laws of Noah",
					link: "https://www.amazon.com/Seven-Laws-Noah-Aaron-Lichtenstein/dp/B0006E205I",
					publisher: "The Rabbi Jacob Joseph School Press; First Edition",
					author: "Aaron Lichtenstein",
					description: "A detailed exposition of the Noachide laws.",
					image: "",
					language: "English"
				},
				{
					focus: "Noahide Study",
					name:  "The Noahide Laws (Study Edition)",
					link: "https://www.amazon.com/Noahide-Laws-Complete-Volumes-1-22/dp/1949126013/ref=sr_1_1?keywords=The+Noahide+laws&qid=1704266428&sr=8-1",
					publisher: "Yeshiva Pirchei Shoshanim",
					author: "Yeshiva Pirchei Shoshanim",
					description: "A study of the Noahide Laws",
					image: "",
					language: "English"
				},
				// Jewish Conversion / Bal Teshuvah
				{
					focus: "Jewish Teshuvah / Conversion",
					name: "To Be a Jew: A Guide to Jewish Observance in Contemporary Life",
					link: "https://www.amazon.com/Be-Jew-Jewish-Observance-Contemporary/dp/1541674022/ref=sr_1_1?crid=59TZZ2VJTCBE&keywords=to+be+a+jew&qid=1704266516&sprefix=to+be+a+jew%2Caps%2C136&sr=8-1",
					author: "Rabbi Hayim H. Donin",
					publisher: "Basic Books",
					description: "A guide to Jewish observance in contemporary life",
					image: "",
					language: "English"
				},
				{
					focus: "Jewish Life",
					name: "The Jewish Book of Why & The Second Jewish Book of Why (2 volumes in slipcase)",
					link: "https://www.amazon.com/gp/product/0824603141/ref=sw_img_1?smid=ATVPDKIKX0DER&psc=1",
					publisher: "Jonathan David Publishers",
					author: "Alfred J. Kolatch",
					description: "Answers to questions about Jewish life and thought",
					image: "",
					language: "English"
				},
				// Chumash
				{
					focus: "Chumash (Oral + Written Torah)",
					name: "The Chumash: The Stone Edition, Full Size (ArtScroll) (English and Hebrew Edition) The Torah: Haftaros and Five Megillos with a Commentary Anthologized from the Rabbinic Writings",
					link: "https://www.amazon.com/Chumash-ArtScroll-Haftaros-Commentary-Anthologized/dp/0899060145/ref=pd_rhf_dp_s_pd_sbs_rvi_d_sccl_1_1/140-7992359-8104520?pd_rd_w=aHX0b&content-id=amzn1.sym.a089f039-4dde-401a-9041-8b534ae99e65&pf_rd_p=a089f039-4dde-401a-9041-8b534ae99e65&pf_rd_r=JXDF2EREBE02PWFCD0B5&pd_rd_wg=TUqnu&pd_rd_r=7940d3a9-c66f-4734-b3a7-dedbe0861b3b&pd_rd_i=0899060145&psc=1",
					publisher: "ArtScroll Mesorah",
					author: "Nossan Scherman",
					description: "Classic (and widely accepted) Chumash with a commentary anthologized from the Rabbinic writings",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Chumash (Oral + Written Torah)",
					name: "Torah Chumash Synagogue Edition",
					link: "https://www.amazon.com/dp/0826601960/?coliid=I3SGKGFJOLCS2S&colid=3CILFH6MZ17Z&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
					publisher: "Merkos Linyonei Chinuch",
					author: "Moshe Wisnefsky",
					description: "Hebrew / English Chumash (Chassidic)",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Chumash (Oral + Written Torah)",
					name: "Chumash: The Gutnick Edition - All in one - Synagogue Edition",
					link: "https://www.amazon.com/gp/product/1934152013/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1",
					publisher: "Kol Menachem",
					author: "Rabbi Chaim Miller",
					description: "Hebrew / English Chumash (Chassidic) with Talmudic Commentary",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Chumash (Oral + Written Torah)",
					name: "The Milstein Edition Chumash with the Teachings of the Talmud - Slipcased Set (Hebrew Edition)",
					link: "https://www.amazon.com/gp/product/1422625974/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1",
					publisher: "Mesorah Publications",
					author: "",
					description: "Hebrew / English Chumash with Talmudic Commentary",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Chumash (Oral + Written Torah)",
					name: "Czuker Edition Hebrew Tanach Mikra'os Gedolos Full Size Set - 18 Volumes",
					link: "https://www.artscroll.com/Books/9781422627723.html",
					publisher: "Artscroll Mesorah",
					author: "",
					description: "Hebrew / English Chumash with Commentary from the MIdrash, Talmud, and Classic Rabbinic Sources",
					image: "",
					language: "Hebrew"
				},
				{
					focus: "Writings (Ketuvim) - (Tenak)",
					name: "Kesuvim Hebrew and English Full Size 6 Volume Slipcased Set",
					link: "https://www.amazon.com/Kesuvim-Hebrew-English-Full-Slipcased/dp/1422622312/ref=pd_bxgy_img_d_sccl_1/140-7992359-8104520?pd_rd_w=8Puj8&content-id=amzn1.sym.2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_p=2b132e63-5dcd-4ba1-be9f-9e044543d59f&pf_rd_r=VM1KSF5PMVYSEXMDT5J2&pd_rd_wg=LwgUs&pd_rd_r=57472f82-bd8d-4735-9c08-130927b273cb&pd_rd_i=1422622312&psc=1",
					publisher: "ArtScroll Mesorah",
					author: "",
					description: "The Writings (Psalms, Proverbs, Job, Song of Songs, Ruth, Lamentations, Ecclesiastes, Esther, Daniel, Ezra, Nehemiah, Chronicles) with a commentary anthologized from the Rabbinic writings",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Nevi'im (Prophets) - (Tenak)",
					name: "The Rubin Edition of the Early Prophets - Personal size - 5 Volume Slipcased Set",
					link: "https://www.amazon.com/Rubin-Early-Prophets-Personal-Slipcased/dp/B003BQ9LUU/ref=sr_1_1?crid=H8Z0X2634GFN&keywords=artscroll+early+prophets&qid=1704269808&s=books&sprefix=artscroll+early+prophets%2Cstripbooks%2C161&sr=1-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc",
					publisher: "ArtScroll Mesorah",
					author: "Nossan Scherman",
					description: "The Early Prophets (Joshua, Judges, Samuel, 1 Kings, 2 Kings) with a commentary anthologized from the Rabbinic writings",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Nevi'im (Prophets) - (Tenak)",
					name: "The Milstein Edition of the Later Prophets Set (4 vol.)",
					link: "https://www.amazon.com/Prophets-Joshua-Judges-ArtScroll-Mesorah/dp/1578193311/ref=pd_sbs_d_sccl_1_2/140-7992359-8104520?pd_rd_w=qiN1N&content-id=amzn1.sym.89676150-e513-422e-84a9-9c8b85f32b61&pf_rd_p=89676150-e513-422e-84a9-9c8b85f32b61&pf_rd_r=WC5TASJZYMND3TB0WK1N&pd_rd_wg=VuCZ8&pd_rd_r=e38d7b2e-d2bd-42c3-adac-eb9d97e9e38e&pd_rd_i=1578193311&psc=1",
					publisher: "Artscroll",
					author: "The Milstein Edition of the Later Prophets Set (4 vol.)",
					description: "The Later Prophets (Isaiah, Jeremiah, Ezekiel, and the Twelve Minor Prophets) with a commentary anthologized from the Rabbinic writings",
					image: "",
					language: "Hebrew / English"
				},
				//Siddurim
				// // Ashkinaz
				{
					focus: "Siddur (Jewish Prayer Book)",
					name: "Schottenstein Edition Siddur Interlinear Weekday Full Size Ahkenaz",
					link: "https://www.amazon.com/Siddur-Interlinear-Weekday-Ashkenaz-Schottenstein/dp/1578196817/ref=sr_1_2?crid=2KL68Y64FZIH6&keywords=Schottenstein+Edition+Siddur+Interlinear+weekdays+ashkenaz+Full+Size&qid=1704271851&s=books&sprefix=schottenstein+edition+siddur+interlinear+weekdays+ashkenaz+full+size%2Cstripbooks%2C105&sr=1-2",
					publisher: "Artsroll Mesorah",
					author: "Rabbi Raphael Pelcovitz",
					description: "Siddur (Jewish Prayer Book) - Weekdays (Ashkenaz)",
					image: "",
					language: "Hebrew /English"
				},
				{
					focus: "Siddur (Jewish Prayer Book)",
					name: "Schottenstein Edition Siddur Interlinear Sabbath & Festivals Full Size Ahkenaz",
					link: "https://www.amazon.com/Hebrew-English-Interlinear-Translation-Siddur/dp/B001GOATBE/ref=sr_1_11?crid=1NQGV727EFATB&keywords=siddur+hebrew+english&qid=1704270987&s=books&sprefix=siddur%2Cstripbooks%2C141&sr=1-11",
					publisher: "Artsroll Mesorah",
					author: "Menachem Davis",
					description: "Siddur (Jewish Prayer Book) - Sabbath & Festivals (Ashkenaz)",
					image: "",
					language: "Hebrew /English"
				},
				// // Sefard
				{
					focus: "Siddur (Jewish Prayer Book)",
					name: "Schottenstein Edition Siddur Interlinear Weekday Full Size Sefard following the Customs of Eretz Yisroel In memory of Sammy Yitzchok Farkas",
					link: "https://www.amazon.com/Hebrew-English-Interlinear-Translation-Siddur/dp/B001GOATBE/ref=sr_1_11?crid=1NQGV727EFATB&keywords=siddur+hebrew+english&qid=1704270987&s=books&sprefix=siddur%2Cstripbooks%2C141&sr=1-11",
					publisher: "Artsroll Mesorah",
					author: "Rabbi Menachem Davis",
					description: "Siddur (Jewish Prayer Book) - Weekdays (Sefard)",
					image: "",
					language: "Hebrew /English"
				},
				{
					focus: "Siddur (Jewish Prayer Book)",
					name: "Schottenstein Edition Siddur Interlinear Sabbath & Festivals Full Size Sefard",
					link: "https://www.amazon.com/Siddur-Interlinear-Sabbath-Festivals-Full/dp/B09WTGZRKQ/ref=sr_1_9?crid=6K4GMHIW2DNW&keywords=siddur+hebrew+english+schottenstein+nusach+sefard&qid=1704271556&s=books&sprefix=siddur+hebrew+english+schottenstein+nusach+sefard%2Cstripbooks%2C102&sr=1-9",
					publisher: "Artsroll Mesorah",
					author: "Menachem Davis",
					description: "Siddur (Jewish Prayer Book) - Sabbath + Festivals (Sefard)",
					image: "",
					language: "Hebrew /English"
				},
				// Jewish Law (Halacha)
				{
					focus: "Jewish Law (Halacha)",
					name: "Shulchan Oruch",
					link: "https://store.kehotonline.com/mobile/prodinfo.asp?number=EAR-SHULO.NSB",
					publisher: "Kehot Publication Society",
					author: "Rabbi Schneur Zalman of Liadi",
					description: "Shulchan Aruch: Code of Jewish Law - (Sefard)",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Jewish Law (Halacha)",
					name: "Code of Jewish Law (Annotated Kitzur Shulchan Aruch)",
					link: "https://www.amazon.com/Code-Jewish-law-shulhan-compilation/dp/B0007FFFUI/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1704267521&sr=8-3",
					publisher: "Hebrew Publishing Company",
					author: "Rabbi Solomon Ganzfried",
					description: "Compilation of Jewish Laws and Customs - (Ashkenazi)",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Jewish Law (Halacha)",
					name: "Kleinman Edition Kitzur Shulchan Aruch Code of Jewish Law 5 Vol Slipcased Set",
					link: "https://www.amazon.com/Kleinman-Kitzur-Shulchan-Jewish-Slipcased/dp/B09X66R58J/ref=sr_1_1?crid=2J0VGZNB2KC56&keywords=Code+of+Jewish+Law+%28Annotated+Kitzur+Shulchan+Aruch%29&qid=1704267486&sprefix=%2Caps%2C197&sr=8-1&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0",
					publisher: "Mesorah Publications",
					author: "",
					description: "Shulchan Aruch: Code of Jewish Law - (Ashkenazi)",
					image: "",
					language: "Hebrew / English"
				},
				// Talmud
				{
					focus: "Gemara (Talmud)",
					name: "Schottenstein Edition of the Mishnah Elucidated - Complete 23 Volume Set",
					link: "https://www.artscroll.com/Books/9781422623008.html?gclid=CjwKCAiAqNSsBhAvEiwAn_tmxaGGIhklQuBr9cOpZm46tDTLC2wcM3ck6_NcIKfypsJNT7WPr9njwRoCvyAQAvD_BwE",
					publisher: "ArtScroll Mesorah ",
					author: "",
					description: "Translated and annotated Mishnah with a commentary anthologized from the Rabbinic writings",
					image: "",
					language: "Hebrew / English"
				},
				// Tanya
				{
					focus: "Tanya (Chassidus/Chabbad Philosophy)",
					name: "Tanya - Likutei Amarim (Revised Hebrew and English Edition)",
					link: "https://www.amazon.com/Tanya-Likutei-Amarim-Revised-English/dp/0826604005/ref=sr_1_1?crid=3CN5URFQO80LG&keywords=Tanya+likutei+amarim&qid=1704267947&sprefix=tanya+likutei+amarim%2Caps%2C105&sr=8-1",
					publisher: "Kehot Publication Society",
					author: "Shneur Zalman of Liadi",
					description: "Chassidic Philosophy",
					image: "",
					language: "Hebrew / English"
				},
				{
					focus: "Tanya (Chassidus/Chabbad Philosophy)",
					name: "Lessons in Tanya Large Edition - Slipcased",
					link: "https://www.amazon.com/Lessons-Tanya-Large-Schneur-Boruchovich/dp/0826605109/ref=sr_1_19?crid=33HIT4G6CKPV0&keywords=Tanya&qid=1704267881&sprefix=tanya+%2Caps%2C139&sr=8-19&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0",
					publisher: "Kehot Publication Society",
					author: "Schneur Z. Boruchovich ",
					description: "Chassidic Philosophy",
					image: "",
					language: "Hebrew / English"
				},
				// Daily Study
				{
					focus: "Hayom Yom (Daily Study)",
					name: "Hayom Yom / Tackling Life's Tasks (Compact Edition)",
					link: "https://www.amazon.com/dp/B00BPXZ330/?coliid=I12GCNO2TYSL9R&colid=3CILFH6MZ17Z&psc=0&ref_=list_c_wl_lv_ov_lig_dp_it",
					publisher: "Sichos In English",
					author: "Rabbi Menachem Mendel Schneerson",
					description: "Daily Chassidic teachings and glimpses into the spiritual lifestyle of Chabad-Lubavitch. ",
					image: "",
					language: "Hebrew / English"
				},
				// Hebrew Learning
				{
					focus: "Hebrew Learning",
					name: "The First Hebrew Primer: The Adult Beginner's Path to Biblical Hebrew, Third Edition",
					link: "https://www.amazon.com/First-Hebrew-Primer-Beginners-Biblical/dp/0939144158/ref=sr_1_1?hvadid=580750353809&hvdev=c&hvlocphy=9019573&hvnetw=g&hvqmt=e&hvrand=9957919098721242599&hvtargid=kwd-820403326&hydadcr=22563_13493224&keywords=the+first+hebrew+primer&qid=1704274622&sr=8-1",
					publisher: "EKS Publishing",
					author: "Ethelyn Simon",
					description: "Comprensive Hebrew Learning",
					image: "",
					language: "Hebrew / English"
				},
				// {
				// 	focus: "",
				// 	name: "",
				// 	link: "",
				// 	publisher: "",
				// 	author: "",
				// 	description: "",
				// 	image: ""
				// language: "Hebrew / English"
				// },
			],
			websites: [
				{
					url: "chabbad.org",
					name: "Chabbad",
					description: "Halacha, Torah, and Chassidus Study",
				},
				{
					url: "Sefaria.org",
					name: "Sefaria",
					description: "Free Torah / Tenak Library",
				},
				{
					url: "askNoah.org",
					name: "Ask Noah",
					description: "Noahide Study",
				},
				{
					url: "jewfaq.org",
					name: "Jew FAQ",
					description: "Judaism 101",
				},
				// Biblical Hebrew Learning
				{
					url: "https://hebrewjumpstart.com",
					name: "Hebrew Jumpstart",
					description: "Learn to read Hebrew in 1 hour!",
				},
				// Question / Answer - other resources
				{
					url: "http://judaismsanswer.org",
					name: "Judaisms Answer",
					description: "Strengthening Jews by providing answers to questions about Judaism",
				},
				{
					url: "https://whatjewsbelieve.org",
					name: "What Jews Believe",
					description: "Providing answers to Jews and non-Jews regarding Jewish beliefs.",
				}
			],
		},
	},
	categoryOptions: [
		{ value: "hashem", label: "Hashem" },
		{ value: "noahidism", label: "Noahidism" },
		{ value: "judaism", label: "Judaism" },
		{ value: "christian", label: "Christianity" },
		{ value: "prophecy", label: "Prophecy" },
		{ value: "translations", label: "Translations" },
		{ value: "messiah", label: "Messiah" },
		{ value: "evangelism", label: "Evangelism" },
		{ value: "Jewish Law", label: "Jewish Law (Halacha)" },
		{ value: "conversion", label: "Conversion" },
		{ value: "end-times", label: "End-times" },
		{ value: "church history", label: "Church History" },
		{ value: "jewish history", label: "Jewish History" },
	],
	footerNavigation: [
		// {
		// 	name: "Facebook",
		// 	href: "#",
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path
		// 				fillRule="evenodd"
		// 				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
		// 				clipRule="evenodd"
		// 			/>
		// 		</svg>
		// 	),
		// },
		// {
		// 	name: "Instagram",
		// 	href: "#",
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path
		// 				fillRule="evenodd"
		// 				d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
		// 				clipRule="evenodd"
		// 			/>
		// 		</svg>
		// 	),
		// },
		// {
		// 	name: "Twitter",
		// 	href: "#",
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
		// 		</svg>
		// 	),
		// },
		// {
		// 	name: "GitHub",
		// 	href: "#",
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path
		// 				fillRule="evenodd"
		// 				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
		// 				clipRule="evenodd"
		// 			/>
		// 		</svg>
		// 	),
		// },
		// {
		// 	name: "YouTube",
		// 	href: "#",
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path
		// 				fillRule="evenodd"
		// 				d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
		// 				clipRule="evenodd"
		// 			/>
		// 		</svg>
		// 	),
		// },
	],
	timePeriods: [
		
	]
	// companyLogo: {
	// 	icon: "/app/assets/icons/tenaktalk_icon_lg.png",
	// 	medium: "/tenaktalk_icon_lg.png",
	// 	large: "/app/assets/icons/tenaktalk_icon_lg.png",
	// },
}

export { SiteParams, BibleRef, wordsRef, mishnahRef }
