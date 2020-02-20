/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-20 15:03:16
 * @LastEditTime: 2019-10-08 16:46:05
 */

 /**
  * 模板文章
  */
export const contentHtnl = '在中国传统节日重阳节来临之际，国家主席习近平10月6日给澳门街坊总会颐骏中心长者义工组的30位老人回信，向他们表示亲切问候和勉励，并祝全国的老人们健康长寿、生活幸福。莫道桑榆晚，为霞尚满天。尊老爱老是中华民族的传统美德，习近平主席一直推崇备至、身体力行。早在河北正定担任县委书记时，他就提出，中青年干部要“尊老”。2017年全国精神文明建设表彰大会上，习近平主席为93岁的科技工作者黄旭华老人让座，更是成为敬老尊贤的经典瞬间而广为传颂。敬老爱老，善德之始。怎样对待老人，是一个社会文明程度的指示标；如何尊重老人，是一个民族道德水准的衡量尺；老年人幸不幸福，是一个国家国民幸福感的“晴雨表”。从老莱子彩衣娱亲、子路百里负米，再到“好媳妇”张水珍、全国道德模范王冬梅，尊老爱老助老的传统在中国相沿成习、与日俱新。满足数量庞大的老年群众多方面需求、妥善解决人口老龄化带来的社会问题，事关国家发展全局，事关百姓福祉。在习近平主席的率先垂范和谋划推动下，近年来我国的老龄事业取得很大进展，医疗保障体系逐渐完善、养老金数次上调、各地兴办老年大学和老年食堂、“常回家看看”写入法律，一系列具体政策和举措为老年生活提供了更大便利度和丰富性。';

/**
 * 词性标注
 */
export const posTag = {
  tags: [
    {
      color: "#DE5F20",
      title: "形语素"
    },
    {
      color: "#2cd2bb",
      title: "形容词"
    },
    {
      color: "#4DB92A",
      title: "副形词"
    },
    {
      color: "#2DCC9D",
      title: "名形词"
    },
    {
      color: "#2A45B9",
      title: "区别词"
    },
    {
      color: "#2F54EB",
      title: "连词"
    },
    {
      color: "#1990FF",
      title: "副语素"
    },
    {
      color: "#12C2C2",
      title: "副词"
    },
    {
      color: "#1565C0",
      title: "叹词"
    },
    {
      color: "#E2AB3C",
      title: "方位词"
    },
    {
      color: "#D77F20",
      title: "语素"
    },
    {
      color: "#DF5527",
      title: "前接成分"
    },
    {
      color: "#D22831",
      title: "成语"
    },
    {
      color: "#1890FF",
      title: "简称略语"
    },
    {
      color: "#558B2F",
      title: "后接成分"
    },
    {
      color: "#08979C",
      title: "习用语"
    },
    {
      color: "#52C41A",
      title: "数词"
    },
    {
      color: "#0097A7",
      title: "名语素"
    },
    {
      color: "#00695C",
      title: "名词"
    },
    {
      color: "#E74C3C",
      title: "人名"
    },
    {
      color: "#D4380D",
      title: "地名"
    },
    {
      color: "#D22C35",
      title: "机构团体"
    },
    {
      color: "#01579B",
      title: "其他专名"
    },
    {
      color: "#5B8C00",
      title: "拟声词"
    },
    {
      color: "#1D39C4",
      title: "介词"
    },
    {
      color: "#52C41A",
      title: "量词"
    },
    {
      color: "#0097A7",
      title: "代词"
    },
    {
      color: "#00695C",
      title: "处所词"
    },
    {
      color: "#E74C3C",
      title: "时语素"
    },
    {
      color: "#1D39C4",
      title: "时间词"
    },
    {
      color: "#D4380D",
      title: "助词"
    },
    {
      color: "#D22C35",
      title: "动语素"
    },
    {
      color: "#01579B",
      title: "动词"
    },
    {
      color: "#5B8C00",
      title: "副动词"
    },
    {
      color: "#1D39C4",
      title: "名动词"
    },
    {
      color: "#DE5F20",
      title: "标点符号"
    },
    {
      color: "#3498DB",
      title: "非语素字"
    },
    {
      color: "#4DB92A",
      title: "语气词"
    },
    {
      color: "#2DCC9D",
      title: "状态词"
    },
    {
      color: "#2A45B9",
      title: "未知词"
    },
    {
      color: "#2F54EB",
      title: "英文单词"
    },
  ],
  text: "<p style='text-indent: 2em;'>词性标注，又称词类标注或者简称标注，是指为分词结果中的每个单词标注一个正确的词性的过程，也即确定每个词是名词、动词、形容词或其他词性的过程。</p><p style='text-indent: 2em;'>通过jieba分词获取中文分词，并且首先从词典分析词性，如果词典中有，就从词典中读取该词的词性；如果词典中没有该词，用viterbi算法来估计，viterbi算法实现原理是当事件之间具有关联性时，可以通过统计两个以上相关事件同时出现的概率，来确定事件的可能状态。</p>"
}

/**
 * 实体识别
 */
export const entityRecognition = {
  tags: [
    {
      color: "#D22C35",
      title: "人名",
      en:'PER',
    },
    {
      color: "#E2AB3C",
      title: "地名",
      en:'LOC',
    },
    {
      color: "#558B2F",
      title: "机构名",
      en:'ORG',
    },
    {
      color: "#1565C0",
      title: "日期",
      en:'DATE',
    },
    {
      color: "#d22cae",
      title: "比例数值",
      en:'RATIO',
    },
    {
      color: "#2cd2bb",
      title: "数量",
      en:'NUM',
    },
  ],
  text:
    "<p style='text-indent: 2em;'>命名实体识别（NamedEntityRecognition，简称NER），又称作“专名识别”，是指识别文本中具有特定意义的实体，主要包括人名、地名、机构名、专有名词等。命名实体识别是信息提取、问答系统、句法分析、机器翻译、面向SemanticWeb的元数据标注等应用领域的重要基础工具，在自然语言处理技术走向实用化的过程中占有重要地位。一般来说，命名实体识别的任务就是识别出待处理文本中三大类（实体类、时间类和数字类）、七小类（人名、机构名、地名、时间、日期、货币和百分比）命名实体。</p>"+
    "<p style='text-indent: 2em;'>使用BiLSTM神经网络训练模型，然后进行识别。BiLSTM是Bi-directionalLongShortTermMemory的缩写，是由前向LSTM与后向LSTM组合而成。两者在自然语言处理任务中都常被用来建模上下文信息</p>"
}

/**
 * 文本摘要
 */
export const abstract = {
  tags: [],
  text:
    "<p style='text-indent: 2em;'>TextRank算法是一种用于文本的基于图的排序算法，通过把文本分割成若干组成句子，构建节点连接图，用句子之间的相似度作为边的权重，通过循环迭代计算句子的TextRank值，最后抽取排名高的句子组合成文本摘要</p>"+
    "<p style='text-indent: 2em;'>本系统在计算句子的相似度上对句子进行分词，然后计算分词后的向量的相似度，相似度作为PageRank算法的网页转换概率，迭代计算各个句子的得分，最后取topK作为摘要。</p>"
}

/**
 * 主题模型
 */
export const topicModels = {
  tags: [],
  text:
    "<p style='text-indent: 2em;'>LDA主题模型是一种文档生成模型，是一种非监督机器学习技术。它认为一篇文档是有多个主题的，而每个主题又对应着不同的词。一篇文档的构造过程，首先是以一定的概率选择某个主题，然后再在这个主题下以一定的概率选出某一个词，这样就生成了这篇文档的第一个词。不断重复这个过程，就生成了整篇文章。</p>"+
    "<p style='text-indent: 2em;'>LDA的使用是上述文档生成过程的逆过程，即根据一篇得到的文档，去寻找出这篇文档的主题，以及这些主题所对应的词。</p>"
}

/**
 * 情感分析
 */
export const emotionAnalysis = {
  tags: [],
  text:
    "<p style='text-indent: 2em;'>使用LSTM+word2vec词向量进行文本情感分类，将单词传入embedding层，使用嵌入式词向量来表示单词更有效率。在这里我们使用word2vec方式来实现，通过embedding层,新的单词表示传入LSTMcells。LSTMcells连接一个sigmoidoutputlayer。使用sigmoid可以预测该文本是积极的还是消极的情感。</p>"
}

/**
 * 关键词提取
 */
export const keywordsExtraction = {
  tags: [

  ],
  text:
    "<p style='text-indent: 2em;'>关键词提取采取TF-IDF算法，TF-IDF算法是词频—逆文档频次算法。</p>"+
    "<p style='text-indent: 2em;'>TF-IDF算法由两部分组成：TF算法以及IDF算法，TF算法是统计一个词在一篇文档中出现的频次。也即是一个词在文档中出现的次数越多，其对文档的表达能力也越强。而IDF算法则是统计一个词在文档集的多少个文档中出现，即是如果一个词在越少的文档中出现，则其对文档的区分能力也越强。</p>"+
    "<p style='text-indent: 2em;'>同时在TF-IDF算法基础上，对标题、正文、词性等不同分别赋予不同权重，另外加入目前较全面的词典提升分词效果，从而提升关键词提取的准确率。</p>"
}

/**
 * 新词发现
 */
export const wordDiscovery = {
  tags: [
    {
      color: "#1D39C4",
      title: "新词"
    },
  ],
  text:
    "<p style='text-indent: 2em;'>新词识别，也可称未登录词识别，严格来说，新词是指随时代发展而新出现或旧词新用的词：如，给力、山寨等；而未登录词是在词典中未存在的词，但在实际使用中，两者并没有严格的区分，而在此系统中，统一认为，未在词典中出现的词即为新词。</p>"+
    "<p style='text-indent: 2em;'>本文使用互信息和邻接熵来实现新词发现。先使用N-Gram算法切分文本，得到候选字符串；然后使用频率，互信息，邻接熵等条件过滤掉垃圾字符串，最后留下符合要求的新词。</p>"
}

/**
 * 地域识别
 */
export const regionDiscern = {
  tags: [
    // {
    //   color: "#D22C35",
    //   title: "省"
    // },
    // {
    //   color: "#558B2F",
    //   title: "市"
    // },
    // {
    //   color: "#1565C0",
    //   title: "区、县"
    // }
  ],
  text:
    "<p>功能：识别新闻中出现的地名，并将地名映射到相应的省份。</p><p>基于分词和地名识别算法进行地名的识别，并基予构建的省，市，县地名关系映射表，将出现的地名映射到省级。</p>"
}
