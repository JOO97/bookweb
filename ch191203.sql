/*
 Navicat Premium Data Transfer

 Source Server         : bookWeb
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : ch191203

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 18/06/2020 01:31:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bookweb_admin
-- ----------------------------
DROP TABLE IF EXISTS `bookweb_admin`;
CREATE TABLE `bookweb_admin`  (
  `bookWeb_admin_id` int(255) NOT NULL AUTO_INCREMENT,
  `bookWeb_admin_account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_admin_password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`bookWeb_admin_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bookweb_admin
-- ----------------------------
INSERT INTO `bookweb_admin` VALUES (1, 'joo', 'q123456');

-- ----------------------------
-- Table structure for bookweb_book
-- ----------------------------
DROP TABLE IF EXISTS `bookweb_book`;
CREATE TABLE `bookweb_book`  (
  `bookWeb_book_id` int(11) NOT NULL AUTO_INCREMENT,
  `bookWeb_book_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_intord` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_presentPrice` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_Image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_book_Image_info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`bookWeb_book_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 89 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bookweb_book
-- ----------------------------
INSERT INTO `bookweb_book` VALUES (49, '全国计算机等级考试二级MS Office上机考试题库', '全国计算机等级考试二级MS Office上机考试题库', '33.00', '66.00', '2020年3月全国计算机等级考试二级MS Office上机考试题库+模拟考场计算机2级高级应用真考题库（共2册）\n', 'images/bookImg/1577790130.jpg', '考试', NULL);
INSERT INTO `bookweb_book` VALUES (50, '理想国', '《理想国》中的主要人物是苏格拉底，但真正表达意见的却是柏拉图，柏拉图站在苏格拉底理论的基础上，针对当时希腊统治者和贵族的观点和想法提出抨击。 ', '22.00', '30.00', '全书讨论的大多数问题都和日常生活密切相关，譬如优生学问题、节育问题、家庭解体问题、婚姻自由问题、独身问题、宗教问题、道德问题、文艺问题、教育问题（包括托儿所、幼儿园、小学、中学、大学研究院以及工、农、航海、医学等职业教育）加上男女平权、男女参政、男女参军等问题，几乎都是普通人一生中会遇到的各种问题。 ', 'images/bookImg/1577790330.jpg', '文学', NULL);
INSERT INTO `bookweb_book` VALUES (52, ' 你当像鸟飞往你的山', '人们只看到我的与众不同：一个十七岁前从未踏入教室的大山女孩，却戴上一顶学历的高帽，熠熠生辉。', '33.00', '68.00', '只有我知道自己的真面目：我来自一个极少有人能想象的家庭。我的童年由垃圾场的废铜烂铁铸成，那里没有读书声，只有起重机的轰鸣。不上学，不就医，是父亲要我们坚持的忠诚与真理。父亲不允许我们拥有自己的声音，我们的意志是他眼中的恶魔。', 'images/bookImg/1577790599.jpg', '励志', NULL);
INSERT INTO `bookweb_book` VALUES (56, '皆大欢喜(莎士比亚全集.英汉双语本)', '真实的文本，依据莎学界久负声望的皇家版《莎士比亚全集》进行翻译；诗体的译本，以诗体译诗体，以散体译散体，还原莎翁剧文格律性；辜正坤、许渊冲等莎学名家辑注，兼采百家之长！', '33.00', '38.00', '“莎士比亚全集·英汉双语本”系列书由英国皇家莎士比亚剧团和外语教学与研究出版社合作推出，根据皇家版《莎士比亚全集》翻译而成，英汉对照。《皆大欢喜》的故事场景主要发生在远离尘世的阿登森林中，描述被流放的公爵的女儿罗瑟琳到森林寻父和她的爱情故事。', 'images/bookImg/1577807875.jpg', '文学', 'images/bookImg/1577807875info.jpg');
INSERT INTO `bookweb_book` VALUES (78, '欢喜', '2020年冯唐亲选金句日历，长乐未央，欢喜无尽，给每一个用心生活的人。366条语录，12幅冯唐全新书法，烫金封面+专色内文，每天一句，日日欢喜！', '22.00', '45.00', '只花时间给三种人和事：好看的，好玩的，好看又好玩的。2020年冯唐亲选金句日历，一本既好看又好玩的时间之书\n366条走心语录，关于生活、情感、文艺、事业、处世，每日一句，不着急、不害怕，活得明白，自能日日欢喜。', 'images/bookImg/1578013230.jpg', '励志', 'images/bookImg/1578013230info.jpg');
INSERT INTO `bookweb_book` VALUES (58, '奇妙洞洞书系列：一年12个月+谁和谁一样重（2册）', '0-3岁 全球销量超千万的经典洞洞书；抠洞洞、讲故事、能力培养，开启宝贝智慧探索之旅。意大利国宝级童书，畅销40年经久不衰，“花婆婆”方素珍倾情译写。', '12.00', '30.00', '本系列书根据动物的重量，一天中动物的状态，事物的特征，一年12个月的变化，草食动物的进食特点，小红帽的冒险经历，小鱼找妈妈的经历来编写故事，较之一二辑，本辑故事更侧重逻辑性或事物的对比性，锻炼孩子思维逻辑。如《谁和谁一样重？》就是通过对比不同动物的重量，将数字元素融入其中，不但启蒙了动物的重量关系，还启蒙让孩子认识了数字。再配合上创意奇妙的各种洞洞，不但能让宝宝将手指锻炼得灵活有力，还能激发浓浓的学习兴趣。', 'images/bookImg/1577946393.jpg', '童书', 'images/bookImg/1577946393info.jpg');
INSERT INTO `bookweb_book` VALUES (59, '时间真好玩', '给孩子的时间启蒙图画书！让孩子在轻松有趣的故事中建立时间观念，在丰富多彩的游戏中学习认时钟，在充满哲理的文字中感受时间的魅力，从而学会珍惜并合理规划时间，收获成长。', '45.90', '99.00', '《时间真好玩》包括5册故事绘本和1册游戏练习，和活泼可爱的小动物一起，边读边学、边玩边练，在轻松有趣的氛围中进行时间启蒙。从认识时间的重要性，到建立初步的时间观念；再到学会认钟表，了解时针和分钟的运行规律，正确辨认整点、半点以及分钟；让孩子理解时间的相对性和无形性，学会把握时间，从而对自己的学习和生活进行时间管理。', 'images/bookImg/1577946625.jpg', '童书', 'images/bookImg/1577946625info.jpg');
INSERT INTO `bookweb_book` VALUES (60, '数学帮帮忙', '多功能数学绘本，荣获美国《学习杂志》教师推荐儿童读物奖，人教社小学数学教育专家推荐，两小千金妈妈精心撰写导读手册，培养孩子严谨、辩证的数学思维，帮孩子爱上数学！', '137.50', '275.00', '“数学帮帮忙”系列的每一本书都会讲述一个发生在孩子身边的故事，由故事中出现的问题自然地引入一个数学知识，然后通过运用数学知识解决问题。比如，从帮助外婆整理散落的纽扣引出分类，从为小狗记录藏骨头的地点引出空间方位，从办校报的活动讨论象形统计图的作用和制作方法，从为造一座糖果小屋找材料学习加减法的计算等等。', 'images/bookImg/1577946740.jpg', '童书', 'images/bookImg/1577946740info.jpg');
INSERT INTO `bookweb_book` VALUES (61, '大中华寻宝系列26 新疆寻宝记', '在阅读中了解华夏人文地理，在寻宝中探索中华文化精华。 读一卷书，行万里路！ 全国各地省级图书馆馆长作序推荐！', '24.80', '35.00', '《新疆寻宝记》是一部融合了地理与文史知识，集趣味性、可读性于一体的原创知识漫画作品。它以惊险逗趣的寻宝故事为载体，书写新疆维吾尔自治区的壮美河山，遍览千年中华文化积淀，感受新疆多族人民勤恳务实的精神风貌。“大中华寻宝系列”让孩子们认识、了解、热爱这片生活着的中华大地，激发他们的爱国热情，是中华文化别开生面的呈现。', 'images/bookImg/28476817.jpg', '童书', 'images/bookImg/1577946881info.jpg');
INSERT INTO `bookweb_book` VALUES (62, 'DK幼儿百科全书-那些重要的事系列套装（全3册）', 'DK专为学龄前儿童设计的百科全书，那些孩子们应该知道的重要的事，都在这里！荣获英国《Smallish》杂志设计奖新书组金奖等诸多奖项！', '207.00', '414.00', '《DK幼儿百科全书——世界上*重要的事》是中国大百科全书出版社与英国DK公司共同策划的选题，是一本针对3-6岁学龄前儿童的综合百科。书的内容围绕儿童身边重要的事物叙述，一共分为六个章节，分别是：有关地球的重要知识，有关地理的重要知识，有关动物的重要知识，有关人类的重要知识，与我相关的重要知识，其他的重要知识。这本书的编辑思路旨在使孩子认识世界，了解身边事物的来龙去脉，培养健康的生活和学习习惯。全书的编排使用了很多手绘风格的插图，将孩子需要掌握的知识以图文配合的形式讲述出来，阅读起来轻松愉快。', 'images/bookImg/1577947049.jpg', '童书', 'images/bookImg/1577947049info.jpg');
INSERT INTO `bookweb_book` VALUES (63, '欢乐中国年礼盒', '故宫联名纪念卡，夜光效果，鱼跃龙门，2020新年礼物，红包，立体书，绘本，0-3-6-12岁启蒙读物', '116.10', '258.00', '图书讲述了团团和圆圆跟家人一起准备和庆祝新年的有趣故事。图书用精致的插图，逼真的立体纸艺和互动的工艺向孩子们展现了中国人*重视的春节盛况。孩子们能够从中了解年的由来、相关的神话传说、有趣的传统年俗、各地的食俗和丰富多彩的新年活动，还能认识在春节背后的中华优秀传统，智慧和结晶，以及中华民族对生命和未来的追求。', 'images/bookImg/1577947268.jpg', '童书', 'images/bookImg/1577947268info.jpg');
INSERT INTO `bookweb_book` VALUES (64, '进阶的巨人 改变世界的伟大科技（全2册）', '给孩子的科技史，央视少儿频道推荐！500余幅手绘精美插画、60个知识框架、700个知识点，涉及物理、数学等多门学科，让孩子全面了解科技的发展进程，学会用科学的方式学习和思考，养成超强科学脑！', '88.00', '176.00', '现代社会的发展离不开科技的进步，《进阶的巨人 改变世界的伟大科技》一书，为孩子们展现了科技发展从无到有的历史和科学技术的步步创新。让孩子们能够更好地认识、学习科技原理及相关产品，更好地理解与科技息息相关的当下社会。\n全书以时间为大线索、以科学家为主角，用独特新颖的“科技课堂”的形式展示那些改变世界的科技。让孩子们既能明白科技原理，又能用这一本书理清科技发展史的脉络，从而满足孩子们天生的好奇心，引发孩子们对科技以及获取新知识的浓厚兴趣。', 'images/bookImg/1577947457.jpg', '童书', 'images/bookImg/1577947457info.jpg');
INSERT INTO `bookweb_book` VALUES (65, '蚕豆大哥的床（成长故事集全5册）', '万众期待的《蚕豆大哥的床》系列回来啦！精装全5册，升级礼盒装，成长故事传递分享、互助与友爱！送配套音频课 + 阅读指导手册 + 蚕豆大哥趣味折纸——爱心树童书', '123.70', '247.50', '“蚕豆大哥”系列是少有的以豆子植物为主角的绘本。蚕豆、毛豆、豌豆、荷兰豆……一个个朝气十足、精神百倍。他们一起从山坡上滑下，一起乘坐豆荚小舟，一起在草房子里避雨，一起到水坑里抓彩虹，在大自然里尽情玩耍；和朋友的相处中，他们学会分享、互相帮助、乐观、独立……极具想象力的故事让孩子收获成长的动力，扑面而来的清新气息，也一定会激发孩子对生活的热爱，鼓励他们走出门外，走进自然，发现更多探索的乐趣！', 'images/bookImg/1577947598.jpg', '童书', 'images/bookImg/1577947598info.jpg');
INSERT INTO `bookweb_book` VALUES (66, ' 英国皇家植物园官方巨献·植物博物馆', '一部盛大迷人的世界植物图集，记录与讲述非凡多姿的自然奇迹 （英国皇家植物园联合英国炙手可热的天才画家为你讲述树木、花朵、叶子和果实的故事）', '114.00', '228.00', '《植物博物馆》为大型图鉴科普系列“奇迹博物馆”的一册，致力打造一个全年无休、向所有人开放的纸上博物馆，展示万物的姿态。全书体例延续系列出版标准，以“走进博物馆”为编辑线索，将严谨权威的科学内容与浪漫复古的插图完美融合；每个章节就是一个独立展厅，分别展出植物王国的一个独特类群。', 'images/bookImg/1577947776.jpg', '童书', 'images/bookImg/1577947776info.jpg');
INSERT INTO `bookweb_book` VALUES (67, '迪士尼经典绘本·冰雪奇缘2', '为冰雪小粉丝打造的冰雪奇缘故事珍藏套装。十大成长魔法，奇妙智慧能量，让孩子在精彩的冰雪故事中，感受温暖亲情与友情，在爱与冒险中快乐成长。适合亲子故事、枕边故事。', '64.00', '128.00', '《冰雪奇缘2·爱与成长美绘故事合集》一共10册，收集了冰雪奇缘、冰雪奇缘2以及冰雪奇缘的番外等10个精彩故事，是迪士尼联合小博集共同打造的献给喜爱冰雪奇缘的孩子们的故事大餐。丰富精彩的情节，梦幻精美的彩色大图，让孩子进入奇幻美好的冰雪世界，和艾莎安娜一起冒险。每个故事一个成长主题，孩子们可以在阅读故事的过程中收获成长能量，培养美好品质。', 'images/bookImg/1577947946.jpg', '童书', 'images/bookImg/1577947946info.jpg');
INSERT INTO `bookweb_book` VALUES (68, '奇先生妙小姐全新故事集', '《好妈妈胜过好老师》尹建莉领衔主编，35个全新故事送给孩子35种成长智慧，培养好性格好行为好习惯，赠送双层收纳小书箱+情景剧故事音频+儿童成长评价手册 ', '149.50', '299.00', '奇先生妙小姐创意源自英国著名作家、儿童插画家、“童话之父”罗杰·哈格里维斯。他于1971年创作出一个有超级长胳膊的奇先生形象，这就是挠痒痒先生。在近半个世纪的时间里，他和他的继任者们创作出了近百个奇先生妙小姐，每一个都拥有不同的性格、行为特点。', 'images/bookImg/1577948915.jpg', '童书', 'images/bookImg/1577948915info.jpg');
INSERT INTO `bookweb_book` VALUES (69, '我喜欢生命本来的样子(周国平经典散文作品集)', '2017年，周国平散文ZUI佳精选集！裸书脊精装，四色印刷，林帝浣插图，但愿你保持住一份生命的本色! ', '20.20', '45.00', '在茫茫宇宙间，每个人都只有一次生存的机会，都是一个独一无二、不可重复的存在。名声、财产、知识等等是身外之物，人人都可求而得之，但没有人能够代替你感受人生。你死之后，没有人能够代替你再活一次。那么仅有一次的人生到底应该怎么度过？周国平说，每个个体要尊重生命本来的样子，当好自然之子。\n当面对爱、逆境、孤独、死亡、变故等人生大命题的时候，人应当保持在什么心理状态，是本书*的意义所在。希望本书能为在繁杂的世界里找不到头绪的你，建立强大的灵魂世界。', 'images/bookImg/1577949160.jpg', '文学', 'images/bookImg/1577949160info.jpg');
INSERT INTO `bookweb_book` VALUES (70, ' 醒脑之书', '上市三年，总销量突破二百万册。篇篇有毒，句句戳心。修补思维的漏洞，挤掉脑子里进的水，让你在复杂的时代做一个明白人，在无聊的世界做一个有趣的人。', '29.00', '58.00', '“醒脑之书”系列畅销百万册纪念作品。集趣味性、互动性和实用性于一身的实验性图书。是醒脑的大本营，是拆穿的集结号。\n全书包括有81篇精简的醒脑文章，39个戳心段子，63个拷问灵魂的问题。涵盖了交际、学习、职场、情场、生活的方方面面，教你做一个有种、有料、有趣、有序的人。不负责疼爱你，只想要唤醒你。\n', 'images/bookImg/1577951946.jpg', '励志', 'images/bookImg/1577951946info.jpg');
INSERT INTO `bookweb_book` VALUES (71, '生活需要仪式感1+2（套装全2册）', '拥有仪式感，你才能真正成为有爱、有温度、有人情味的人，得到认可与尊重，收获惊喜、浪漫、幸运和精彩。', '15.60', '78.00', '　仪式感是把本来单调普通的事情，变得不一样，并对此怀有敬畏心理。无聊的生活中，平淡是常态，你总要找到一种新的方式，让自己度过无趣的日子。\n　　你既可以享受美好的一切，也可以坦然面对糟糕的一切。你得意时不会忘形，失意时也不会潦倒。你知道，无论境况如何，生活都必须庄重。仪式感，会让你在平凡又琐碎的日子里，找到诗意的生活，找到继续前进的微光，找到不愿将就的勇气。', 'images/bookImg/1577952147.jpg', '励志', 'images/bookImg/1577952147info.jpg');
INSERT INTO `bookweb_book` VALUES (72, '放弃很容易，但坚持更酷', '人生，失败不是结局，认输才是。青年人气作者七月，10年赤手空拳的奋斗经历，32个自身发生的真实故事，写给一腔热诚却找不到人生方向的你！', '32.40', '45.00', '孤身北上11年、拼命工作7年，从一无所有的实习生，到图书行业龙头公司的主编，作者用自己的亲身成长奋斗史为你证明：当我们坚持不懈地走下去，真的会成为意想不到的自己。\n这是一本在你感到困惑迷茫时，陪你一起找到人生方向的成长之书。从个人升级、有效社交、认识爱情、拥抱自我四大维度让你明白在这瞬息万变的世界里，自己拥有的实力和底气，才是自己永远的靠山。\n人生放弃很容易，但坚持很难。99%的人成功不是来自幸运与偶然，而是来自一个人缓慢持久的不懈努力和日复一日年如一年咬紧牙关的坚持。', 'images/bookImg/1577952648.jpg', '励志', 'images/bookImg/1577952648info.jpg');
INSERT INTO `bookweb_book` VALUES (81, '阅读是一座随身携带的避难所：毛姆读书随笔', '读一切的美妙与趣味。阅读和哲学的洞见之书+文学巨匠的八卦之书。小说家vs小说家，天才毛姆深谈10位*大师的辛辣秘密与有趣人性。村上春树/马尔克斯/白岩松/杨澜推荐——邀你共读文学和巨匠的秘密。', '36.00', '42.00', '作家热爱读书，这似乎是自然的事，但像毛姆一样，按图索骥，从作家的作品问解到作家的生平和性格，再由他们的生平和性格回转身，关照作家的作品，并以此写成一本精彩绝伦的随笔集，也是文学史上并不多见的妙事。\n这是一本巨匠的八卦之书，也是毛姆对于阅读和哲学的洞见之书。文学巨匠的辛辣秘密与有趣人性，简·奥斯汀善良的“刻薄”，司汤达内心的自卑，福楼拜童年的沙滩初恋，列夫·托尔斯泰一生的迷惑与忏悔，陀思妥耶夫斯基的背叛……\n', 'images/bookImg/1578364383.jpg', '文学', 'images/bookImg/1578364383info.jpg');
INSERT INTO `bookweb_book` VALUES (73, '别害怕一个人生活', '超级畅销书《好想回到小时候》作者丁一晨2019全新绘本，微博800万粉丝翘首以待。沉淀四年，超人气漫画形象“丁小点”暖心回归。', '29.34', '48.00', '28岁的漫画家丁小点，从大学毕业，独自一人来到北京，开启全新的生活。租房奇遇、电梯邂逅、夜店蹦迪、佛系健身、求职陷阱、社交尴尬、间歇性自我怀疑……没有了学校的庇护，没有父母在身边，她需要独自一人面对这个世界。\n丁一晨用画笔还原出毕业后一个人独自来到大城市打拼的真实生活状态。残酷温暖，有笑有泪，没有任何滤镜的美化。她用独有的丁式幽默，巧妙化解难题，分享超级实用的人生建议。其中不乏犀利的评论和令人感动到哭的故事。一个人的生活，孤独且自由。', 'images/bookImg/1577963111.jpg', '励志', 'images/bookImg/1577963111info.jpg');
INSERT INTO `bookweb_book` VALUES (74, '非暴力沟通', '著名的马歇尔·卢森堡博士发现了一种沟通方式，依照它来谈话和聆听，能使人们情意相通，和谐相处，这就是“非暴力沟通”。', '29.40', '49.00', '  做为一个遵纪守法的好人，也许我们从来没有把谈话和“暴力”扯上关系。不过如果稍微留意一下现实生活中的谈话方式，并且用心体会各种谈话方式给我们的不同感受，我们一定会发现，有些话确实伤人！言语上的指责、嘲讽、否定、说教以及任意打断、拒不回应、随意出口的评价和结论给我们带来的情感和精神上的创伤甚至比肉体的伤害更加令人痛苦。这些无心或有意的语言暴力让人与人变得冷漠、隔膜、敌视。', 'images/bookImg/1577963587.jpg', '励志', 'images/bookImg/1577963587info.jpg');
INSERT INTO `bookweb_book` VALUES (84, '西西弗神话', ' 蔑视虚无人生指导手册，经典译本全新修订，首师大教授万字解析，透彻读懂荒诞哲学，“以蔑视的态度，就没有战胜不了的命运”。', '37.00', '42.00', '《西西弗神话》汇集了加缪的四篇文章--《荒诞推理》《荒诞人》《荒诞创作》和《西西弗神话》。《西西弗神话》篇幅*短，但却是一篇提纲挈领、体现加缪思想要义的文章。\n他指出：\"西西弗是荒诞英雄。既出于他的激情，也出于他的困苦。\"\"在他离开山顶的每个瞬息，在他渐渐潜入诸神巢穴的每分每秒，他超越了自己的命运。他比他推的石头更坚强。\"其他几篇长文，实际上是从各个侧面充分阐述和充实了加缪的这些思想。', 'images/bookImg/1578366171.jpg', '文学', 'images/bookImg/1578366171info.jpg');
INSERT INTO `bookweb_book` VALUES (85, '巴黎评论·短篇小说课堂', '美国小说时尚风向标，异彩纷呈的短篇小说选评集，我们当代的文学经典。 收录博尔赫斯、卡佛、索特、戴维斯、巴塞尔姆、韦伯、摩尔、陶尔、史密斯等人的代表作和评论。', '35.00', '50.00', '本书收录的二十篇短篇小说各不相同，风格差异极大，篇幅长短不一，发表的时间跨度几乎和杂志的历史相当。但毫无疑问的是，它们都有着极高的质量，从各个侧面反映了当代短篇小说创作的*水准和潮流风向。\n针对这二十篇小说所作的评论也各有其旨趣，有的非常简洁宏观地概况了一整篇作品的风格特色，还有的非常细致具体地考察了文本的语句和措辞。总之，从作者的角度考察另一位作者的作品，这种专业的视角一定会让读者们受益匪浅。', 'images/bookImg/1578366502.jpg', '文学', 'images/bookImg/1578366502info.jpg');
INSERT INTO `bookweb_book` VALUES (76, '墨菲定律', '受益一生的墨菲定律，一本好玩又实用的日常行为心理指南；突破思维界限，认识真正的自我；揭示那些无处不在左右你生活的心理学秘密，原来，那些让人发笑却又令人深思的行为的背后，都藏着好玩又古怪的心理效应。', '14.00', '32.80', '本书是一本揭示人类潜在种种心理效应的心理学通俗读物，其中*有代表性的即“墨菲定律”。与此同时，从自我认知、经济管理等方面入手，作者引出了数十条对现代人工作和生活有诸多影响的心理学、管理学定律、法则，比如沉锚效应、瓦伦达效应、霍桑效应、洛克定律、凡勃伦效应等。将一个个看似艰深、晦涩的定律、法则阐释得透彻明了，对人们正确理解人性、理解社会有着十分有益的启示。本书语言流畅，案例丰富，对于读者拓展认知心理，改善思维方法，提升生活、工作格局有着深远的指导意义。', 'images/bookImg/1577963919.jpg', '励志', 'images/bookImg/1577963919info.jpg');
INSERT INTO `bookweb_book` VALUES (88, '一个人生活', '通透面对平淡生活的真相，一言难尽却坦诚相告，希望我们能快活地老，自由地活。', '22.00', '25.00', '《一个人生活》是日本著名诗人谷川俊太郎年近古稀时的作品，在这期间他经历了父亲去世，孙子出生，好友离别，也开始了一个人的生活。一个人生活并非完全地独处，而是更加自由地与自己、朋友、世界交谈，朴实、热情、有趣、自在、优雅的一个人生活中有着无法言说的秘密。', 'images/bookImg/1578374510.jpg', '文学', 'images/bookImg/1578374510info.jpg');

-- ----------------------------
-- Table structure for bookweb_order
-- ----------------------------
DROP TABLE IF EXISTS `bookweb_order`;
CREATE TABLE `bookweb_order`  (
  `bookWeb_order_id` int(11) NOT NULL AUTO_INCREMENT,
  `bookWeb_order_user_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_order_good_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_order_status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '0-未支付 1-已支付(未收货） 2-已收货（未评价）3-已评价',
  `bookWeb_order_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`bookWeb_order_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 46 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bookweb_order
-- ----------------------------
INSERT INTO `bookweb_order` VALUES (45, '13295923180', '88', '2', '1578393431000');

-- ----------------------------
-- Table structure for bookweb_user
-- ----------------------------
DROP TABLE IF EXISTS `bookweb_user`;
CREATE TABLE `bookweb_user`  (
  `bookWeb_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `bookWeb_user_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_user_psw` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookWeb_user_money` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `bookWeb_user_status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  PRIMARY KEY (`bookWeb_user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bookweb_user
-- ----------------------------
INSERT INTO `bookweb_user` VALUES (1, '13295923180', 'q123456', '122164', '0');
INSERT INTO `bookweb_user` VALUES (30, '13295923111', 'q12345', '12187', '0');
INSERT INTO `bookweb_user` VALUES (33, '13295923182', 'q123456', '1200', '0');

SET FOREIGN_KEY_CHECKS = 1;
