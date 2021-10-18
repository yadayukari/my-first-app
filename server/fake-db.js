const Product = require('./model/product')
class FakeDb {
  constructor() {
    this.products = [
      {
        name: 'Scottish Fold',
        price: 799,
        image: '../../assets/img/phone-cover.jpg',
        description: 'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to "fold", bending forward and down towards the front of the head, which gives the cat what is often described as an "owl-like" appearance.',
        heading1: '起源',
        heading2: '学名',
        heading3: 'Felis catus',
        headingtext1: 'イエネコの起源は、ネズミを捕獲させる目的で飼われ始めたリビアヤマネコの家畜化である。リビアヤマネコは独立種 Felis lybica Forster, 1780とされることもあるが、ヨーロッパヤマネコの亜種 Felis silvestris lybica Forster, 1780ともされる。',
        headingtext2: 'その場合イエネコを含むヨーロッパヤマネコの学名は、記載が古いFelis catus Linnaeus, 1758となるのが命名法上の原則である。しかしこれを原則通りに運用すると様々な支障が出ることから、2003年にICZNの強権によりFelis silvestris Schreber, 1777をイエネコを含むヨーロッパヤマネコの学名として使用できることが認められた。',
        headingtext3: 'つまりヨーロッパヤマネコの亜種としてのイエネコの学名は、Felis silvestris catus Linnaeus, 1758とすることができる。なおイエネコをヨーロッパヤマネコと別種として扱う場合には、イエネコの学名はFelis catusが正しい。',

      },
      {
        name: 'British Shorthair',
        price: 699,
        image: '../../assets/img/phone-cover.jpg',
        description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, orange eyes, and a medium-sized tail. The breed has also been developed in a wide range of other colours and patterns, including tabby and colourpoint.',
        heading1: '起源',
        heading2: '学名',
        heading3: 'Felis catus',
        headingtext1: 'イエネコの起源は、ネズミを捕獲させる目的で飼われ始めたリビアヤマネコの家畜化である。リビアヤマネコは独立種 Felis lybica Forster, 1780とされることもあるが、ヨーロッパヤマネコの亜種 Felis silvestris lybica Forster, 1780ともされる。',
        headingtext2: 'その場合イエネコを含むヨーロッパヤマネコの学名は、記載が古いFelis catus Linnaeus, 1758となるのが命名法上の原則である。しかしこれを原則通りに運用すると様々な支障が出ることから、2003年にICZNの強権によりFelis silvestris Schreber, 1777をイエネコを含むヨーロッパヤマネコの学名として使用できることが認められた。',
        headingtext3: 'つまりヨーロッパヤマネコの亜種としてのイエネコの学名は、Felis silvestris catus Linnaeus, 1758とすることができる。なおイエネコをヨーロッパヤマネコと別種として扱う場合には、イエネコの学名はFelis catusが正しい。',
      },
      {
        name: 'Siberian',
        price: 299,
        image: '../../assets/img/phone-cover.jpg',
        description: 'The Siberian is a centuries-old landrace (natural variety) of domestic cat in Russia and recently developed as a formal breed with standards promulgated the world over since the late 1980s.',
        heading1: '起源',
        heading2: '学名',
        heading3: 'Felis catus',
        headingtext1: 'イエネコの起源は、ネズミを捕獲させる目的で飼われ始めたリビアヤマネコの家畜化である。リビアヤマネコは独立種 Felis lybica Forster, 1780とされることもあるが、ヨーロッパヤマネコの亜種 Felis silvestris lybica Forster, 1780ともされる。',
        headingtext2: 'その場合イエネコを含むヨーロッパヤマネコの学名は、記載が古いFelis catus Linnaeus, 1758となるのが命名法上の原則である。しかしこれを原則通りに運用すると様々な支障が出ることから、2003年にICZNの強権によりFelis silvestris Schreber, 1777をイエネコを含むヨーロッパヤマネコの学名として使用できることが認められた。',
        headingtext3: 'つまりヨーロッパヤマネコの亜種としてのイエネコの学名は、Felis silvestris catus Linnaeus, 1758とすることができる。なおイエネコをヨーロッパヤマネコと別種として扱う場合には、イエネコの学名はFelis catusが正しい。',
      },
      {
        name: 'American Shorthair',
        price: 499,
        image: '../../assets/img/phone-cover.jpg',
        description: 'The American Shorthair (ASH) is a breed of domestic cat believed to be descended from European cats brought to North America by early settlers to protect valuable cargo from mice and rats. According to the Cat Fanciers Association, in 2012, it was the seventh most popular pedigreed cat in the United States.',
        heading1: '起源',
        heading2: '学名',
        heading3: 'Felis catus',
        headingtext1: 'イエネコの起源は、ネズミを捕獲させる目的で飼われ始めたリビアヤマネコの家畜化である。リビアヤマネコは独立種 Felis lybica Forster, 1780とされることもあるが、ヨーロッパヤマネコの亜種 Felis silvestris lybica Forster, 1780ともされる。',
        headingtext2: 'その場合イエネコを含むヨーロッパヤマネコの学名は、記載が古いFelis catus Linnaeus, 1758となるのが命名法上の原則である。しかしこれを原則通りに運用すると様々な支障が出ることから、2003年にICZNの強権によりFelis silvestris Schreber, 1777をイエネコを含むヨーロッパヤマネコの学名として使用できることが認められた。',
        headingtext3: 'つまりヨーロッパヤマネコの亜種としてのイエネコの学名は、Felis silvestris catus Linnaeus, 1758とすることができる。なおイエネコをヨーロッパヤマネコと別種として扱う場合には、イエネコの学名はFelis catusが正しい。',
      }
    ]
  }
  async initDb(){
    await this.cleanDb()
    this.pushProductsToDB()
  }
  async cleanDb(){
    await Product.deleteMany({})
  }
  pushProductsToDB() {
    this.products.forEach((product) => {
      const newProduct = new Product(product)
      newProduct.save()
    })
  }
  seeDb() {
    this.pushProductsToDB()
  }
}
module.exports=FakeDb