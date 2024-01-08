const wordsRef = {
	tenak: {
		description: `The Hebrew Bible, TaNaKh, an 
		acronym referring to the traditional Jewish division of the Bible into Torah (Teaching), 
		Nevi'im (Prophets), and Ketuvim (Writings). Christians refer to the same books as the Old Testament.`,
		otherNames: ["Tanakh", "Tanach", "Old Testament", "Hebrew Bible"],
	},
	torah: {
		description: `The Five Books of Moses, the Torah, the Pentateuch.`,
		otherNames: ["Chumash", "Pentateuch", "Five Books of Moses"],
	},
	chumash: {
		description: `The Five Books of Moses, the Torah, the Pentateuch. Usually includes the Haftarah readings, and commentary from rabbinical sources.`,
		otherNames: ["Torah", "Pentateuch", "Five Books of Moses"],
	},
	mishnah: {
		description: `The Mishnah is the first major written redaction of the Jewish oral traditions known as the "Oral Torah". It is also the first major work of Rabbinic literature.`,
		otherNames: ["Oral Torah", "mishna", "mishnah"],
	},
	talmud: {
		description: `The Talmud is the central text of Rabbinic Judaism and the primary source of Jewish religious law and Jewish theology.`,
		otherNames: ["Talmud", "talmud"],
	},
	neviim: {
		description: `Nevi'im is the second main division of the Hebrew Bible, between the Torah (instruction) and Ketuvim (writings).`,
		otherNames: ["Nevi'im", "Neviim", "Nevi'im", "Prophets"],
	},
	ketuvim: {
		description: `Ketuvim is the third and final section of the Tanakh (Hebrew Bible), after Torah (instruction) and Nevi'im (prophets).`,
		otherNames: ["Ketuvim", "Ketuvim", "Writings"],
	},
	haftarot: {
		description: `Haftarot are a series of selections from the books of Nevi'im ("Prophets") of the Hebrew Bible (Tanakh) that are publicly read in synagogue as part of Jewish religious practice.`,
		otherNames: ["Haftarah", "Haftorah", "Haftarot", "Haftorot"],
	},
	gemarah: {
		description: `The Gemara is the component of the Talmud comprising rabbinical analysis of and commentary on the Mishnah.`,
		otherNames: ["Gemara", "Gemarah", "Gemara"],
	},
	midrash: {
		description: `The Midrash is a homiletic method of biblical exegesis. The term also refers to the whole compilation of homiletic teachings on the Bible.`,
		otherNames: ["Midrash", "Midrash"],
	},
	tanya: {
		description: `The Tanya is an early work of Hasidic philosophy, by Rabbi Shneur Zalman of Liadi, the founder of Chabad Hasidism, first published in 1797.`,
		otherNames: ["Tanya", "Tanya"],
	},
	halachah: {
		description: `Halakha is the collective body of Jewish religious laws derived from the written and Oral Torah.`,
		otherNames: ["Halacha", "Halakha", "Halacha"],
	},
	aggadah: {
		description: `Aggadah refers to non-legalistic exegetical texts in the classical rabbinic literature of Judaism, particularly as recorded in the Talmud and Midrash.`,
		otherNames: ["Aggadah", "Aggadah"],
	},
	kabbalah: {
		description: `Kabbalah is an esoteric method, discipline, and school of thought in Jewish mysticism.`,
		otherNames: ["Kabbalah", "Kabbalah"],
	},
	tosefta: {
		description: `The Tosefta is a compilation of the Jewish oral law from the late 2nd century, the period of the Mishnah.`,
		otherNames: ["Tosefta"],
	},
	parasha: {
		description: `A parashah formally means a section of a biblical book in the Masoretic text of the Tanakh. In common usage today, parashah generally refers to a single weekly Torah portion.`,
		otherNames: ["Parasha", "Parasha", "Parashah", "Parashat", "Parashas", "Parashim", "Parashiot", "Parashiyot", "Parashyot"],
	},
	siddur: {
		description: `A siddur is a Jewish prayer book, containing a set order of daily prayers.`,
		otherNames: ["Siddur", "Siddurim"],
	},
	machzor: {
		description: `A machzor is a prayerbook for the High Holidays, containing a set order of daily prayers.`,
		otherNames: ["Machzor", "Machzorim"],
	},
	tefillin: {
		description: `Tefillin are a set of small black leather boxes containing scrolls of parchment inscribed with verses from the Torah.`,
		otherNames: ["Tefillin", "Tefillin"],
	},
	minyan: {
		description: `A minyan is the quorum of ten Jewish adults required for certain religious obligations.`,
		otherNames: ["Minyan", "Minyanim"],
	},
	mitzvah: {
		description: `A mitzvah is a commandment of the Jewish law. It synonomously refers to a good deed or a religious obligation.`,
		otherNames: ["Mitzvah", "Mitzvot", "Mitzvos"],
	},
	rabbi: {
		description: `A rabbi is a Jewish religious leader or teacher.`,
		otherNames: ["Rabbi", "Rabbis", "Rav", "Ravs", "Rabbonim", "Rabbi'im"],
	},
	kapittel: {
		description: `A kapittel is a chapter of the Tanya, a book of Hasidic philosophy.`,
		otherNames: ["Kapittel", "Kapittels"],
	},
	sefer: {
		description: `A sefer is a Jewish religious book.`,
		otherNames: ["Sefer", "Seforim"],
	},
	sefer_torah: {
		description: `A sefer torah is a handwritten copy of the Torah.`,
		otherNames: ["Sefer Torah", "Sifrei Torah"],
	},
	aliyah: {
		description: `An aliyah is the honor of being called up to read from the Torah.`,
		otherNames: ["Aliyah", "Aliyot"],
	},
	teshuvah: {
		description: `Teshuvah is the Jewish concept of repentance.`,
		otherNames: ["Teshuvah", "Teshuvot", "Teshuvos"],
	},
	bal_shem_tov: {
		description: `The Baal Shem Tov was an 18th-century Jewish mystic and healer.`,
		otherNames: ["Baal Shem Tov", "Besht"],
	},
	shabbat: {
		description: `Shabbat is the Jewish day of rest. The 7th day of the week, from Friday evening to Saturday evening.`,
		otherNames: ["Shabbat", "Shabbos"],
	},
	gut_shabbos: {
		description: `Gut Shabbos is a Yiddish greeting for Shabbat.`,
		otherNames: ["Gut Shabbos", "Gut Shabbes"],
	},
	yom_tif: {
		description: `Yom Tov refers to any Jewish holiday. (Generic - not specific to any one holiday) 
			(Literally: Good Day)`,
		otherNames: ["Yom Tiff", "Yom Tov", "Yom Tovim"],
	},
	chag: {
		description: `Chag refers to any Jewish holiday. (Generic - not specific to any one holiday)`,
		otherNames: ["Chag", "Chagim"],
	},
	lila_tov: {
		description: `Lila Tov is a Hebrew phrase meaning "Good Night".`,
		otherNames: ["Lila Tov"],
	},
	shavu_a_tov: {
		description: `Shavu'a Tov is a common Hebrew phrase meaning "Good Week / Have a blessed week".`,
		otherNames: ["Shavu'a Tov"],
	},
	baruch: {
		description: `Baruch is a Hebrew word meaning "Blessed".`,
		otherNames: ["Baruch"],
	},
	hashem: {
		description: `Hashem is a Hebrew word meaning "The Name". It is used 
			in place of the Tetragrammaton to prevent breaking the 3rd of the 10 commandments.`,
		otherNames: ["Hashem", "God's Name"],
	},
	yeshiva: {
		description: `A yeshiva is a Jewish educational institution that focuses on the study of traditional religious texts.`,
		otherNames: ["Yeshiva", "Yeshivot"],
	},
	yid: {
		description: "A Yiddish word referring to a jewish person (Slang)",
		otherNames: ["Jew"]
	},
	fabragen: {
		description: "(Yiddish - Chassidic) Commonly held on Shabbos, Yom Tov or day of commemoration where food, melodies, and stories are shared.",
		otherNames: ["Tish", "Botteh"]
	},
	bar_mitzvah: {
		description: "The day a Jewish boy completes their Torah portion, (does Aliyah) and becomes an adult.",
		otherNames: ["Bar Mitzvah", "Bar Mitsvah", ]
	},
	bat_mitzvah: {
		description: "The day a Jewish girl completes their Torah portion, (does Aliyah) and becomes an adult.",
		otherNames: ["Bat Mitzvah", "Bat Mitsvah", ]
	},
	rashi: {
		description: "Rabbi Shlomo Yitzchaki, A midevil French Rabbi. Authored many comprehensive commentaries on the Talmud and Tenak",
		otherNames: ["Rashi", "Rabbi Shlomo Yitzchaki"]
	},
	rambam: {
		description: "Rabbi Moshe ben Maimon, A Sephardic Jewish Philosopher", 
		otherNames: ["Maimonides", "RamBam", "Maimonides"]
	},
	ramban: {
		description: "Rabbi Moshe Ben Nachman, a great medieval Spanish Rabbi. Authored many comprehensive commentaries on the Talmud and Tenak", 
		otherNames: ["RamBan", "Nachmonides"]
	},
	rebbe: {
		description: "A Rebbe is a spiritual leader of a Chassidic community.",
		otherNames: ["Rebbe", "Rebbes", "Rabbi"]
	},
	beit_din: {
		description: "Jewish Courtroom",
		otherNames: ["Beit Din", "Beis Din"]
	},
	bnei_noach: {
		description: "Noahide",
		otherNames: ["Bnei Noach", "B'nei Noach", "Noahide"]
	},
	challah: {
		description: "Bread",
		otherNames: ["Challah", "Challahs", "Challos", "Challos"]
	},
	chassidus: {
		description: "Jewish Mysticism",
		otherNames: ["Chassidus"]
	},
	chassid: {
		description: "A follower of Chassidus (Chabbad)",
		otherNames: ["Chassid", "Chassidim"]
	},
	chametz: {
		description: "Leavened Bread",
		otherNames: ["Chametz"]
	},
	diasporah: {
		description: "Any place outside of Israel",
		otherNames: ["Diasporah", "galut", "galus"]
	},
	erev: {
		description: "1. The day before 2. A Jewish Community",
		otherNames: ["Erev"]
	},
	gan_eden: {
		description: "Garden of Eden",
		otherNames: ["Gan Eden", "Garden of Eden", "Heaven", "Olam Haba"]
	},
	gehennom: {
		description: "A place of spiritual purification for the soul after one dies for up to 12 months.",
		otherNames: ["Gehennom", "She'ol", "Hell"]
	},
	golem: {
		description: "A term used to describe Adam before he had a soul. (An unformed being)",
		otherNames: ["golem"]
	},
	gentiles: {
		description: "Someone who is not Jewish.",
		otherNames: ["goy", "gentiles"]
	},
	haggadah: {
		description: "A book read during the Passover Seder",
		otherNames: ["haggadah"]
	},
	heredi: {
		description: "Ultra-Orthodox Jews in Israel",
		otherNames: ["heredi"]
	},
	kippah: {
		description: "The headcovering worn by Jewish Men",
		otherNames: ["kippah", "yarmulke"]
	},
	kosher: {
		description: "Proper or correct, Typically refers to food but can be used to describe other things.",
		otherNames: ["kosher"]
	},
	L_Chaim: {
		description: `A toast, meaning "To Life" `,
		otherNames: ["L'Chaim"]
	},
	Ma_ariv: {
		description: "Evening Prayer Services.",
		otherNames: ["Ma'ariv"]
	},
	mashiach: {
		description: "Meaning Annointed, One who is chosen by God to end all evil in the world.",
		otherNames: ["Moshiac", "Ha Moshiach", "Messiah"]
	},
	menorah: {
		description: "A 9-branched candle used for Chanukah.",
		otherNames: ["menorah"]
	},
	mezuzah: {
		description: "Meaning doorpost, Mezuzah refers to the scroll contained on the doorpost of a Jewish home or business according to Jewish law.",
		otherNames: ["mezuzah"]
	},
	mikvah: {
		description: "A ritual bath used for spiritual purification.",
		otherNames: ["mikvah"]
	},
	shul: {
		description: "Synagogue - House of Worship",
		otherNames: ["shul"]
	},
	tallit: {
		description: "Prayer shawl",
		otherNames: ["tallit"]
	},
	tzitzit: {
		description: "Fringes on a tallit",
		otherNames: ["tzitzit"]
	},
	tefilah: {
		description: "Prayer",
		otherNames: ["tefilah"]
	},
	treif: {
		description: "Not Kosher",
		otherNames: ["treif", "muktzah"]
	},
	tzedakah: {
		description: "Charity",
		otherNames: ["tzedakah"]
	},
	shacharit: {
		description: "Morning Prayer Services",
		otherNames: ["sacharit", "shacharis"]
	},
	mussaf: {
		description: "Additional Prayer Services",
		otherNames: ["mussaf"]
	},
	mincha: {
		description: "Afternoon Prayer Services",
		otherNames: ["mincha", "minchah"]
	},
	maariv: {
		description: "Evening Prayer Services",
		otherNames: ["maariv"]
	},
	havdallah: {
		description: "Separation - A ceremony marking the end of Shabbat",
		otherNames: ["havdallah", "havdala"]
	},
	shemona_esrei: {
		description: "18 Blessings",
		otherNames: ["shemona esrei", "shemoneh esrei"]
	},
	amidah: {
		description: "Standing Prayer",
		otherNames: ["amidah"]
	},
	alienu: {
		description: "A prayer recited at the end of each of the three daily prayer services.",
		otherNames: ["alienu"]
	},
	yotzrot: {
		description: "Poems",
		otherNames: ["yotzrot"]
	},
	shalom: {
		description: "Peace",
		otherNames: ["shalom"]
	},
	yartzeit: {
		description: "Anniversary of a death",
		otherNames: ["yartzeit"]
	},
	kiddush: {
		description: "Sanctification",
		otherNames: ["kiddush", "kaddish"]
	},
	tehillim: {
		description: "Psalms",
		otherNames: ["tehillim"]
	},
}

export default wordsRef