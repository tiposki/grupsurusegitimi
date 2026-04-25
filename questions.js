/* ===== MODULE QUESTIONS ===== */
const MODULE_QUESTIONS = [
  [ // Module 0
    {type:'mc',q:'Grup sürüşünün temel amacı nedir?',opts:['Yarış yapmak','Güvenle, keyifle ve birlikte gitmek','Hız denemesi yapmak','Tek başına sürmek'],ans:1},
    {type:'tf',q:'Grup sürüşünde sadece kendi güvenliğiniz önemlidir.',ans:false},
    {type:'fill',q:'Grup sürüşünde en ön sırada tutulması gereken kavram ___ dir.',ans:'güvenlik'}
  ],
  [ // Module 1
    {type:'mc',q:'Sürüş grubunun en önünde giden kişiye ne denir?',opts:['Safety','Artçı','Lider','Kaptan'],ans:2},
    {type:'tf',q:'Safety, grubun en arkasından gelen ve sürüş emniyetinden sorumlu sürücüdür.',ans:true},
    {type:'match',q:'Kavramları eşleştirin:',left:['Lider','Safety','Sürüş Grubu'],right:['En arkadan gelen','En önden giden','Lider ile safety arası'],ansMap:{0:1,1:0,2:2}}
  ],
  [ // Module 2
    {type:'mc',q:'Grup sürüşlerinde sürücüler grup içinde ne yapamaz?',opts:['Hız ayarlamak','Sollama yapmak','Sinyal vermek','Fren yapmak'],ans:1},
    {type:'tf',q:'Kaza tehlikesi hariç sürüş sırası bozulmaz.',ans:true},
    {type:'fill',q:'Her sürücü hızını yola, viraja ve kendisinin güvenli sürebileceği ___ göre ayarlamalıdır.',ans:'hıza'},
    {type:'mc',q:'Lider tarafından yapılan sürüş işaretleri nasıl iletilir?',opts:['Sadece lider yapar','Bir arkadaki sürücüye aktarılır','Telsizle bildirilir','Yapılmaz'],ans:1}
  ],
  [ // Module 3
    {type:'mc',q:'Fermuar sürüş düzeninde çaprazdaki sürücüler arasındaki mesafe kaç saniyedir?',opts:['2 saniye','3 saniye','1 saniye','0.5 saniye'],ans:2},
    {type:'tf',q:'Tek sıra sürüş düzeninde öndeki sürücü ile 2 saniye mesafe bırakılır.',ans:true},
    {type:'mc',q:'Kortej sürüş düzeni hangi durumlarda uygulanır?',opts:['Otoyollarda','Virajlarda','Özel sürüşlerde ve kortejlerde','Meskun mahallerde'],ans:2},
    {type:'fill',q:'Fermuar düzeninde aynı sıradaki sürücüler arasındaki mesafe ___ saniyedir.',ans:'2'},
    {type:'drag',q:'Sürüş düzenlerini doğru sıraya yerleştirin (düz yol → viraj → özel):',items:['Fermuar','Tek Sıra','Kortej'],ans:['Fermuar','Tek Sıra','Kortej']}
  ],
  [ // Module 4
    {type:'match',q:'El işaretlerini anlamlarıyla eşleştirin:',left:['1 parmak yukarı','2 parmak yukarı','Avuç içi aşağı'],right:['Fermuar düzeni','Tek sıra düzeni','Hızını düşür'],ansMap:{0:1,1:0,2:2}},
    {type:'tf',q:'Yol üzerindeki tehlike sol el işaret parmağı ya da sağ ayak ucu ile gösterilir.',ans:true},
    {type:'mc',q:'Hızını arttır işareti nasıl yapılır?',opts:['Sol el aşağı sallanır, avuç içi yukarı','Sol el yukarı kaldırılır','Sağ el sallanır','Korna çalınır'],ans:0}
  ],
  [ // Module 5
    {type:'mc',q:'Meskun mahallerde mesafeler neden kısa olur?',opts:['Yol dar olduğu için','Sürat düşük olduğu için','Trafik az olduğu için','Hava kötü olduğu için'],ans:1},
    {type:'tf',q:'Grubun filtreleme yaparak araçların arasında kalması tercih edilir.',ans:false},
    {type:'fill',q:'Otoyollarda yüksek hacimli araçların geçişlerinde rüzgar ___ olabilir.',ans:'türbülansı'},
    {type:'mc',q:'Virajlarda her sürücü ne yapar?',opts:['Hızlanır','Fermuar düzenini korur','Viraj yönüne daha fazla görüş alabilmek için konum alır','Durur'],ans:2}
  ],
  [ // Module 6
    {type:'mc',q:'Otoyollarda sollamada ilk sinyal veren kimdir?',opts:['Safety','2 numara','Lider','Artçı'],ans:2},
    {type:'tf',q:'Sollama sonrası gruba yetişme çabasıyla yüksek süratlere çıkılabilir.',ans:false},
    {type:'fill',q:'Gidiş-geliş yollarda sollama öncesi lider grubu ___ sürüş düzenine alır.',ans:'tek sıra'},
    {type:'mc',q:'Sollamalarda safety ne yapar?',opts:['En önde gider','Sol şeride çıkarak yol güvenliğini sağlar','Grubu durdurur','Hiçbir şey'],ans:1}
  ],
  [ // Module 7
    {type:'mc',q:'Sürüş öncesi yol brifingini kim paylaşır?',opts:['Safety','Herkes','Lider','Başkan'],ans:2},
    {type:'tf',q:'Sürücülerden biri gruptan ayrıldığında yeri boş bırakılır, doldurulmaz.',ans:true},
    {type:'match',q:'Görevleri doğru kişiyle eşleştirin:',left:['Yol brifingi verir','Ekipman kontrolü yapar','Dörtlü flaşör yakar'],right:['Sürücü (sorun anında)','Safety','Lider'],ansMap:{0:2,1:1,2:0}},
    {type:'mc',q:'Safety sürüş sırasında sinyal vermeyen sürücüyü ne yapar?',opts:['Gruptan çıkarır','Emniyetli şekilde yanına gelerek uyarır','Görmezden gelir','Lidere telsizle bildirir'],ans:1}
  ],
  [ // Module 8
    {type:'mc',q:'Motosikletler park edilirken hangi yöne bakmalıdır?',opts:['Giriş yönüne','Çıkış istikametine','Yanlara','Farketmez'],ans:1},
    {type:'tf',q:'Sürüş liderinin, başkanın olmadığı durumlarda başkanı temsilen hareket ettiği unutulmamalıdır.',ans:true},
    {type:'fill',q:'Sürüşten bilgi vermeden ayrılan sürücü ___ sevk edilir.',ans:'disipline'}
  ]
];

/* ===== EXAM QUESTIONS (40) ===== */
const EXAM_QUESTIONS = [
  {type:'mc',q:'1. Grup sürüşünün temel amacı nedir?',opts:['Hız yarışı yapmak','Güvenle, keyifle ve birlikte gitmek','Motor denemek','Tek başına sürmek'],ans:1},
  {type:'tf',q:'2. Grup sürüşünde sadece kendi güvenliğiniz yeterlidir.',ans:false},
  {type:'mc',q:'3. Sürüş grubunun en önünde giden kişi kimdir?',opts:['Safety','Lider','1 numara','Artçı'],ans:1},
  {type:'fill',q:'4. Grubun en arkasından gelen ve sürüş emniyetinden sorumlu sürücüye ___ denir.',ans:'safety'},
  {type:'mc',q:'5. Sürüş grubundaki sürücüler liderden itibaren nasıl numaralandırılır?',opts:['0\'dan başlayarak','1\'den başlayarak','Rastgele','İsme göre'],ans:1},
  {type:'tf',q:'6. Grup sürüşlerinde sürücüler grup içinde sollama yapabilir.',ans:false},
  {type:'mc',q:'7. Fermuar sürüş düzeninde çaprazdaki sürücüler arası mesafe kaç saniyedir?',opts:['0.5 sn','1 sn','2 sn','3 sn'],ans:1},
  {type:'mc',q:'8. Fermuar düzeninde aynı sıradaki sürücüler arası mesafe kaç saniyedir?',opts:['1 sn','2 sn','3 sn','4 sn'],ans:1},
  {type:'tf',q:'9. Sürat arttıkça takip mesafesi doğal olarak artar.',ans:true},
  {type:'mc',q:'10. Tek sıra sürüş düzeninde öndeki sürücü ile kaç sn mesafe bırakılır?',opts:['1 sn','2 sn','3 sn','0.5 sn'],ans:1},
  {type:'fill',q:'11. Tek sıra sürüş düzeninde sürücüler öndekinin ___ izinden gider.',ans:'teker'},
  {type:'mc',q:'12. Tek sıra sürüş düzeni genellikle nerelerde kullanılır?',opts:['Düz yollarda','Viraj girişlerinde ve görüşün azaldığı durumlarda','Otoyollarda','Park alanlarında'],ans:1},
  {type:'tf',q:'13. Kortej sürüş düzeninde sürat diğer düzenlere göre düşüktür.',ans:true},
  {type:'mc',q:'14. Fermuar sürüş düzeni hangi yollarda tercih edilir?',opts:['Virajlı yollar','Görüşün açık olduğu düz yollar','Toprak yollar','Dar sokaklar'],ans:1},
  {type:'match',q:'15. Sürüş düzenlerini uygun durumlarla eşleştirin:',left:['Fermuar','Tek Sıra','Kortej'],right:['Özel sürüşler','Düz ve açık yollar','Viraj girişleri'],ansMap:{0:1,1:2,2:0}},
  {type:'mc',q:'16. Tek sıra sürüş düzeni işareti nasıl yapılır?',opts:['İki parmak kaldırılır','Bir parmak kaldırılır','El sallanır','Korna çalınır'],ans:1},
  {type:'mc',q:'17. Fermuar sürüş düzeni işareti nasıl yapılır?',opts:['Bir parmak kaldırılır','İşaret ve orta parmak kaldırılır','El aşağı sallanır','Ayak gösterilir'],ans:1},
  {type:'tf',q:'18. Tehlike işareti sol el işaret parmağı ya da sağ ayak ucu ile yapılır.',ans:true},
  {type:'mc',q:'19. "Hızını düşür" işaretinde avuç içi nereyi gösterir?',opts:['Yukarıyı','Aşağıyı','Yana','Arkaya'],ans:1},
  {type:'fill',q:'20. "Hızını arttır" işaretinde avuç içi ___ gösterir.',ans:'yukarıyı'},
  {type:'mc',q:'21. Meskun mahallerde grup halinde sürerken mesafeler neden kısa olur?',opts:['Yol geniş olduğu için','Sürat düşük olduğu için','Araç az olduğu için','Kural gereği'],ans:1},
  {type:'tf',q:'22. Grubun filtreleme yaparak araçların arasında kalması tercih edilmelidir.',ans:false},
  {type:'mc',q:'23. Trafik ışıklarında durulacaksa ne yapılır?',opts:['Dağılınır','Daha yakın mesafelerde durularak grubun derinliği azaltılır','Yan yana durulur','İlk gelen geçer'],ans:1},
  {type:'fill',q:'24. Virajlarda her sürücü viraj yönüne daha fazla görüş alabilmek için ___ alır.',ans:'konum'},
  {type:'mc',q:'25. Otoyollarda hangi şeritte ilerlenir?',opts:['Sol şerit','Sağ şerit','Sürüş hızına uygun şerit','Emniyet şeridi'],ans:2},
  {type:'tf',q:'26. Otoyollarda yüksek hacimli araçların geçişlerinde rüzgar türbülansı oluşabilir.',ans:true},
  {type:'mc',q:'27. Otoyollarda sollamada ilk sinyal veren kimdir?',opts:['Safety','1 numara','Lider','En arkadaki'],ans:2},
  {type:'mc',q:'28. Sollamada safety\'nin görevi nedir?',opts:['En önde gitmek','Sol şeride çıkarak yol güvenliğini sağlamak','Grubu durdurmak','Hiçbir şey'],ans:1},
  {type:'tf',q:'29. Sollama sonrası gruba yetişmek için yüksek süratlere çıkılmamalıdır.',ans:true},
  {type:'fill',q:'30. Gidiş-geliş yollarda sollama öncesi lider grubu ___ sürüş düzenine alır.',ans:'tek sıra'},
  {type:'mc',q:'31. Sürüş öncesi yol brifingini kim paylaşır?',opts:['Safety','Herhangi biri','Lider','Başkan'],ans:2},
  {type:'tf',q:'32. Lider gerekli gördüğünde ilave mola verebilir.',ans:true},
  {type:'mc',q:'33. Sürücü bir sorun olduğunda ne yapar?',opts:['Bağırır','Dörtlü flaşörlerini yakar','Grubu geçer','Durur'],ans:1},
  {type:'fill',q:'34. Sürücülerden biri gruptan ayrıldığında yeri boş bırakılır, ___ .',ans:'doldurulmaz'},
  {type:'mc',q:'35. Safety sürüş öncesi neleri kontrol eder?',opts:['Sadece yakıt','Motosiklet ve ekipmanları','Sadece lastikleri','Hiçbir şey'],ans:1},
  {type:'tf',q:'36. Safety, sinyal vermeyen sürücüyü emniyetli şekilde yanına gelerek uyarır.',ans:true},
  {type:'mc',q:'37. Motosikletler park edilirken hangi yöne bakmalıdır?',opts:['Giriş yönüne','Herhangi bir yöne','Çıkış istikametine','Yanlara'],ans:2},
  {type:'drag',q:'38. Sürüş düzenlerini düz yoldan dar yola doğru sıralayın:',items:['Tek Sıra','Fermuar','Kortej'],ans:['Fermuar','Kortej','Tek Sıra']},
  {type:'tf',q:'39. Sürüş liderinin, başkanın olmadığı durumlarda başkanı temsilen hareket ettiği unutulmamalıdır.',ans:true},
  {type:'mc',q:'40. Sürüşten bilgi vermeden ayrılan sürücüye ne olur?',opts:['Uyarılır','Ceza alır','Disipline sevk edilir ve kulüple ilişkisi kesilir','Hiçbir şey'],ans:2}
];
