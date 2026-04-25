/* ===== MODULE DATA ===== */
const MODULES = [
  {
    title: "Grup Sürüşünün Amacı",
    desc: "Grup sürüşünün neden yapıldığı ve temel ilkeleri",
    content: `<div class="content-block">
      <h3>Grup Sürüşünün Amacı</h3>
      <p>Grup ile beraber sürüş, toplu halde bir yerden bir yere <span class="highlight">güvenle, keyifle ve birlikte</span> gitmek için yapılır.</p>
      <p>Burada en önemli konu sadece kendiniz değil, birlikte sürdüğünüz kişilerin de sizin bir hatanızda zarar görebilecek olmalarıdır.</p>
      <p>Bu kapsamda sürüş kurallarına dikkat etmeniz ve <span class="highlight-blue">güvenliği en ön sırada tutmanız</span> gerekmektedir.</p>
    </div>`
  },
  {
    title: "Tanımlar",
    desc: "Lider, Sürüş Grubu ve Safety kavramları",
    content: `<div class="content-block">
      <h3>Tanımlar</h3>
      <p><strong>LİDER:</strong> Sürüş grubunun en önünden giderek tüm sürücülerin emniyetli ve güvenli şekilde sürüşü tamamlamaları için sürüş <span class="highlight">temposunu ve hızını belirleyen</span>, nispeten daha tecrübeli olan sürücüdür.</p>
      <p><strong>SÜRÜŞ GRUBU:</strong> Lider ile safety arasında kalan sürücüler ve artçılardır. Lider'den itibaren <span class="highlight-blue">1 (Bir) numaradan başlayarak</span> isimlendirilirler.</p>
      <p><strong>SAFETY:</strong> Genellikle grubun en arkasından gelen sürüş grubunun <span class="highlight">genel ve sürüş emniyetinden sorumlu</span> sürücüdür. Sürüş kurallarına uyulmasını kontrol ve takip eder.</p>
    </div>`
  },
  {
    title: "Dikkat Edilmesi Gereken Hususlar",
    desc: "Grup sürüşünde uyulması gereken temel kurallar",
    content: `<div class="content-block">
      <h3>Grup Sürüşünde Dikkat Edilmesi Gereken Hususlar</h3>
      <ul>
        <li>Grup sürüşü toplu bir sürüş olsa da her sürücü grupla beraber ama <span class="highlight">bireysel olarak sürüşünü yapmalıdır</span>.</li>
        <li>Sürüş grupları içindeki motosikletler hacim, sürat konularında birbirine yakın modellerden, sürücüler ise hız kabiliyeti ve sürüş tarzına göre daha uyumlu kişilerden seçilir.</li>
        <li>Her sürücü, bir öndeki sürücünün fren lambasına, motoruna veya sürüş liderine değil; <span class="highlight-blue">yola, tehlikelere ve sisteme uygun olarak bakması</span> gerek yerlere bakmalıdır.</li>
        <li>Her sürücü hızını lidere, gruptaki diğer sürücülere göre değil <span class="highlight">yola, viraja ve asıl olarak kendisinin sistemli sürüşten ödün vermeden güvenli sürebileceği hıza göre</span> ayarlamalıdır.</li>
        <li>Grup sürüşlerinde her sürücü sürüşün gerektirdiği konumu bireysel olarak alır.</li>
        <li>Grup sürüşlerinde sürücüler <span class="highlight">grup içinde sollama yapamazlar</span>.</li>
        <li>Kaza tehlikesi hariç <span class="highlight-blue">sürüş sırası bozulmaz</span>.</li>
        <li>Artçısı olan sürücüler fermuar düzeni sürüşte mümkün olduğunca sağ tarafa gelecek şekilde (1-3-5..) konumlandırılır.</li>
        <li>Lider tarafından yapılan tüm sürüş işaretleri, sürüş grubu tarafından bir arkadaki sürücüye aktarılır, işaret safety de dahil olmak üzere yapıldıktan ve lider tarafından görüldükten sonra uygulanarak sonlandırılır.</li>
      </ul>
    </div>`
  },
  {
    title: "Grup Sürüş Düzenleri",
    desc: "Fermuar, Tek Sıra ve Kortej düzenleri",
    content: `<div class="content-block">
      <h3>a) Fermuar Sürüş Düzeni</h3>
      <div class="content-image"><img src="fermuar.png" alt="Fermuar Sürüş Düzeni"><span class="image-caption">Fermuar Sürüş Düzeni</span></div>
      <ul>
        <li>En önde lider, arkasında <span class="highlight">1 numara sağda, 2 numara bir arkada solda</span> olacak şekilde sırayla sağda ve solda, en arkadaki sürücü safety olacak şekilde konumlanıldığı sürüş düzenidir.</li>
        <li>Lider ile 1 numara, 1 numara ile 2 numara arasında yani çaprazda kalan sürücü ile aradaki mesafe <span class="highlight-blue">1 sn</span> olacak şekilde; aynı sıradaki sürücüler arasında ise <span class="highlight-blue">2 sn</span> olacak şekilde mesafe bırakılır.</li>
        <li>Bu 1 sn ve 2 sn olan süre ile mesafe doğal olarak <span class="highlight">sürat arttıkça artar, sürat azaldıkça azalır</span>.</li>
        <li>Her sürücü durumun, sürüşün ve güvenliğin gerektirdiği zamanlarda konumunu sağa ya da sola değiştirebilir. Bu sebeple <span class="highlight">öndeki veya arkadaki sürücünün yanal alanına girilmemelidir</span>.</li>
        <li><span class="highlight-blue">Görüşün açık</span> olduğu, nispeten <span class="highlight-blue">düz</span> olan yollarda tercihen bu sürüş düzeni kullanılır.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>b) Tek Sıra Sürüş Düzeni</h3>
      <div class="content-image"><img src="teksira.png" alt="Tek Sıra Sürüş Düzeni"><span class="image-caption">Tek Sıra Sürüş Düzeni</span></div>
      <ul>
        <li>Gruptaki sürücülerin tek sıra halinde öndeki sürücünün <span class="highlight">teker izinden</span> gittiği sürüş düzenidir.</li>
        <li>Bir öndeki sürücü ile arada <span class="highlight-blue">2 sn mesafe</span> bırakılır.</li>
        <li>Tek sıra halinde öndekinin teker izinde gidilse de <span class="highlight">her sürücü bireysel olarak sürüşünü yapar</span>, sisteme ve güvenlik şartlarına göre konumunu ve hızını ayarlar.</li>
        <li><span class="highlight-blue">Viraj girişlerinde, ana yol çıkışlarında</span> ve görüşün azaldığı durumlarda genellikle bu sürüş düzeni kullanılır.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>c) Kortej Sürüş Düzeni</h3>
      <div class="content-image"><img src="kortej.png" alt="Kortej Sürüş Düzeni"><span class="image-caption">Kortej Sürüş Düzeni</span></div>
      <ul>
        <li>Özel sürüşlerde ve kortejlerde uygulanır.</li>
        <li>Sürat diğer sürüş düzenlerine göre <span class="highlight">düşüktür</span>.</li>
        <li>Öndeki mesafe sürate göre emniyetli olacak şekilde ayarlanır.</li>
        <li>Yanca hizalama sağdaki motora göre yapılır. Soldaki motor sağdakinden hizasını ayarlar.</li>
      </ul>
    </div>`
  },
  {
    title: "Grup Sürüş İşaretleri",
    desc: "El işaretleri ve anlamları",
    content: `<div class="content-block">
      <h3>Grup Sürüş İşaretleri</h3>
      <div class="content-image"><img src="isaret1.png" alt="Tek Sıra İşareti"><span class="image-caption">Tek sıra sürüş düzeni — Sol el işaret parmağı yukarı kaldırılır.</span></div>
      <div class="content-image"><img src="isaret2.png" alt="Fermuar İşareti"><span class="image-caption">Fermuar sürüş düzeni — Sol el işaret parmağı ve orta parmak yukarı kaldırılır.</span></div>
      <div class="content-image"><img src="isaret3.png" alt="Tehlike İşareti"><span class="image-caption">Yol üzerinde tehlike var — Sol el işaret parmağı ya da sağ ayak ucu ile tehlike gösterilir.</span></div>
      <div class="content-image"><img src="isaret4.png" alt="Hızını Düşür"><span class="image-caption">Hızını düşür — Sol el yukarı aşağı sallanır, avuç içi aşağıyı gösterir.</span></div>
      <div class="content-image"><img src="isaret5.png" alt="Hızını Arttır"><span class="image-caption">Hızını arttır — Sol el yukarı aşağı sallanır, avuç içi yukarıyı gösterir.</span></div>
    </div>`
  },
  {
    title: "Farklı Bölgelerde Grup Sürüşü",
    desc: "Meskun mahaller, virajlar ve otoyollarda dikkat edilecekler",
    content: `<div class="content-block">
      <h3>a) Meskun Mahaller</h3>
      <ul>
        <li>Meskun mahallerde grup halinde sürerken sürat düşük olacağı için <span class="highlight">mesafeler de hıza bağlı olarak kısa olur</span>.</li>
        <li>Sağdan ve soldan gelecek tehlikelere karşı <span class="highlight-blue">daha dikkatli olunması</span> gerektiği unutulmamalıdır.</li>
        <li>Tehlikelere göre sürücü şerit içerisinde konumunu (sağa-sola) değiştirebilir.</li>
        <li>Grup dışında kalan diğer araç veya motosiklet sürücüleri fırsat bulduklarında <span class="highlight">grup içerisine girmek</span>, aralarındaki boşluklardan geçip grubun önüne bir şekilde geçmeye çalışmak gibi tehlikeli eylemlerde bulunabilirler.</li>
        <li>Trafik ışıklarında durulacaksa daha az yer kaplamak ve kalkış anında tüm grubun geçebilmesini sağlayabilmek için <span class="highlight-blue">daha yakın mesafelerde</span> durularak grubun derinliği azaltılır.</li>
        <li>Grubun <span class="highlight">filtreleme (araç aralarından düşük hızla geçiş)</span> yaparak araçların arasında kalması tercih edilmemelidir.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>b) Virajlar</h3>
      <ul>
        <li><span class="highlight">Virajlarda her sürücü</span> viraj yönüne daha fazla görüş alabilmek maksadıyla <span class="highlight-blue">konum alır</span>.</li>
        <li>Çok açık, neredeyse düz yola yakın geniş virajlarda emniyet açısından sıkıntı olmadıkça fermuar düzeni bozulmayabilir.</li>
        <li>Viraj girişlerinde seyir sürati azalacağı için grup dışı, arkadan gelerek grubu geçmeye çalışabilecek <span class="highlight">diğer araçların olabileceği</span> unutulmamalıdır.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>c) Otoyollar</h3>
      <ul>
        <li>Grup sürüş <span class="highlight-blue">hızına uygun</span> olan şeritte ilerler.</li>
        <li>Yüksek hacimli araçların geçişlerinde rüzgar türbülansı olabileceği sebebiyle <span class="highlight">hız ve mesafeler daha emniyetli</span> seviyede tutulmalıdır.</li>
      </ul>
    </div>`
  },
  {
    title: "Grup Sürüşlerinde Sollama",
    desc: "Otoyollarda ve gidiş-geliş yollarda sollama kuralları",
    content: `<div class="content-block">
      <h3>a) Otoyollarda ve Bölünmüş Yollarda Sollama</h3>
      <ul>
        <li>Lider öndeki aracı veya araçları sollamayı gerekli gördüğü zaman <span class="highlight">sol sinyal verir</span>.</li>
        <li>Gruptaki tüm sürücüler de aynı şekilde sinyal verir.</li>
        <li>Müteakiben <span class="highlight-blue">Safety yol güvenli olduğunda sol şeride çıkar</span>.</li>
        <li>Sollama şeridi güvenli olduğunu gören <span class="highlight">liderle beraber tüm grup sollamaya çıkar</span> ve öndeki araç veya araçları sollar.</li>
        <li>Sollamalar <span class="highlight-blue">en hızlı ve en çabuk</span> şekilde sonlanmalıdır.</li>
        <li>Sollama sonrası lider ve tüm grup hızlarına uygun şeritte sürüşe devam eder.</li>
        <li>Sağ şeride geçişlerde safety'nin yol emniyetli olduğunu gösterir şekilde <span class="highlight">sağa çıkması beklenmez</span>.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>b) Gidiş-Geliş Yollarda Sollama</h3>
      <ul>
        <li>Gidiş-geliş olan yollarda lider, toplu halde sollamanın uygun olmadığı zamanlarda, sürüş grubunu <span class="highlight-blue">tek sıra sürüş düzenine alır</span>.</li>
        <li>Müteakiben lider ve gruptaki diğer sürücüler uygun ve güvenli gördüklerinde sollama işlemini <span class="highlight">bireysel</span> olarak icra ederler ve gruba tekrar dahil olurlar.</li>
        <li>Lider sollamayı tamamladıktan sonra <span class="highlight-blue">ayna kontrolü yaparak, sağ sinyalle birlikte şeridinde yerini alır</span>, bu durumu gruptaki diğer sürücüler de sırası ile icra eder.</li>
        <li>Tüm sürücüler ancak tam olarak <span class="highlight">güvenli hissettiklerinde</span> sollamalarını yaparlar.</li>
        <li>Sollama sonrası gruba yetişme çabasıyla <span class="highlight">yüksek süratlere çıkılmamalıdır</span>.</li>
      </ul>
    </div>`
  },
  {
    title: "Sürücüler ve Görevleri",
    desc: "Lider, sürüş grubundaki sürücüler ve safety'nin görevleri",
    content: `<div class="content-block">
      <h3>a) Lider</h3>
      <ul>
        <li>Liderin görevi, grubu bir yerden başka bir yere <span class="highlight">emniyetli bir şekilde</span> götürmektir.</li>
        <li>Sürüş lideri, varış noktasına kadar <span class="highlight-blue">sürüş grubundan sorumludur</span>.</li>
        <li>Sürüş öncesi <span class="highlight">yol brifingini</span> sürüş grubuyla paylaşır.</li>
        <li>Mola yerlerini, güzergahı, yakıt ikmal noktalarını ve <span class="highlight-blue">zaman planlamasını</span> sürüş grubuna bildirir.</li>
        <li>Eğer önceden planlama yapılmadıysa, güzergaha ve mola yerlerine sürüş grubu ile birlikte karar verir.</li>
        <li>Grubun sürüşünde tespit ettiği yorulma, dikkat dalgınlığı ve benzer sebeplerle <span class="highlight">ilave molalar verilmesi sürüş lideri inisiyatifindedir</span>.</li>
        <li>Grup içerisindeki motosiklet, sürücü ya da artçılarla ile ilgili varsa özel durumları (ilaç kullanımı vb.) öğrenir ve sürüş planlamasına dahil eder.</li>
        <li>Lider grup sürüşünün gerektirdiği konum dışında gerektiği zamanlarda <span class="highlight-blue">şerit içerisinde farklı konumlara (sağa-sola) geçebilir</span>.</li>
        <li>Gruptaki tüm sürücüleri takip eder, gerekli gördüğünde konumlarını ve sürüş sırasını değiştirebilir.</li>
        <li>Emniyet sebebiyle gerekli gördüğünde bir sürücüyü gruptan ayırıp gruptan ayrı bir şekilde sürmesini isteyebilir.</li>
        <li>Grubun sürüş <span class="highlight">hızını ve temposunu</span> sürüş grubuna uygun olarak ayarlar.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>b) Sürüş Grubundaki Sürücüler</h3>
      <ul>
        <li>Grup sürüşü toplu yapılan <span class="highlight">bireysel sürüştür</span>. Gruptaki sürücüler uyumlu bir şekilde sürerler ancak sisteme göre sürüşlerini yaparlar.</li>
        <li>Sürücüler öndeki veya çaprazdaki sürücülerle <span class="highlight-blue">mesafelerini korurlar</span>.</li>
        <li>Hiçbir sürücü bir öndeki sürücünün <span class="highlight">emniyet alanına girmez</span>.</li>
        <li>Güvenli mesafeyi daima korur. Böylece her sürücü ihtiyaç halinde hiçbir şekilde güvenliği ihlal etmeden <span class="highlight-blue">şerit içinde konumunu değiştirebilir</span>.</li>
        <li>Sürücülerden herhangi birisinde safety'ye iletmesi gereken bir durum olduğunda <span class="highlight">dörtlü flaşörlerini yakar</span>.</li>
        <li>Yol ve güvenlik şartları müsait olduğunda safety'nin yanına gelmesini bekler.</li>
        <li>Duraklama ihtiyacı var ise <span class="highlight-blue">safety'ye deposunu işaret eder</span>, safety de liderin yanına giderek duraklama ihtiyacını bildirir.</li>
        <li>Sürüş grubundan herhangi bir sebeple sürücülerden birinin ayrılması durumunda <span class="highlight">yeri boş bırakılır, doldurulmaz</span>.</li>
      </ul>
    </div>
    <div class="content-block">
      <h3>c) Safety</h3>
      <ul>
        <li>Sürüş öncesi tüm motosikletler (sigorta, muayene, yakıt durumu) ve ekipmanlarla (kask, motosiklet ceketi, eldiven, dizlik ya da motosiklet pantalonu, motosiklet botu) ilgili <span class="highlight">gerekli kontrolleri yapar, lidere bilgi verir</span>.</li>
        <li>Sollamalarda <span class="highlight-blue">lider'e yardımcı olur</span>.</li>
        <li>Tek sıra sürüş düzenine geçilen yerlerde, arkada emniyetli mesafede ve hızda, konumunu şeridin ortasında koruyarak <span class="highlight">diğer araçların sürüş grubunu emniyetsiz şekilde geçmesine müsaade etmez</span>.</li>
        <li>Sürüş sırasında motosikletinde ya da ekipmanlarında sorun yaşayarak (kramp, kaska arı girmesi vb.) durması gereken sürücülere eşlik eder. Bu durumda safety'lik görevini <span class="highlight-blue">en arkada kalan sürücü</span> üstlenir.</li>
        <li>Sürüş esnasında, lider sinyal verdiğinde sinyal vermeyen, el işaretlerini arkaya iletmeyen, sinyalini açık unutan sürücülerin emniyetli şekilde <span class="highlight">yanına gelerek uyarır</span>.</li>
        <li>Emniyet hususunu ihlal eden durumlar oluştuğunda liderin yanına giderek <span class="highlight-blue">sürüşü durdurmasını isteyebilir</span>.</li>
      </ul>
    </div>`
  },
  {
    title: "Diğer Hususlar",
    desc: "Zaman planlaması, park etme ve disiplin kuralları",
    content: `<div class="content-block">
      <h3>Diğer Hususlar</h3>
      <ul>
        <li><span class="highlight">Zaman planlamasına</span> vakitlice riayet ederek, gereksiz zaman kayıplarına müsaade edilmemelidir.</li>
        <li>Motosikletler çıkış istikametine bakacak şekilde, <span class="highlight-blue">grup bütünlüğü</span> içerisinde emniyetli şekilde park edilir.</li>
        <li>Sürüş esnasında verilen molalarda ve sürüş sonrasında sürüş hakkında <span class="highlight">karşılıklı geri bildirimlerde bulunulur</span>.</li>
        <li>Sürüş liderinin, başkanın olmadığı durumlarda <span class="highlight-blue">başkanı temsilen hareket ettiği unutulmamalıdır</span>.</li>
        <li>Sürücüler, sürüşten herhangi bir sebeple <span class="highlight">kimseye bilgi vermeden</span> ayrılması durumunda disipline sevk edileceğini ve bunun karşılığının da <span class="highlight">kulüp ile ilişkisinin kesilmesi</span> olacağını bilmelidir.</li>
      </ul>
    </div>`
  }
];
