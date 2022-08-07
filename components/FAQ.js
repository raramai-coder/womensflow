import * as React from "react";
//import { View, Text } from "react-native";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, Alert } from "react-native";
import colors from "../config/colors";


export default function FAQ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>MENSTRUATION</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Yes you can, it is possible for you to get pregnant if you have unprotected sex during your period')}>
          <Text>Can I get pregnant on my period?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Yes you can, Premenstrual syndrome (PMS) refers to emotional and physical symptoms that regularly occur in the one to two weeks before the start of each menstrual period. Symptoms resolve around the time menstrual bleeding begins. Different women experience different symptoms. The common emotional symptoms include irritability and mood changes. The common physical symptoms include acne, tender breasts, bloating, and feeling tired.')}>
          <Text>Is Premenstrual Syndrome real?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('For all the technology that we have in the world, the female body and intricacies of the menstrual cycle have long been ignored. More and more research is being done, fortunately, to unlock the mysteries of menstruation. What we do know is that there can be a lot of variety to women’s cycles. In general, however, if your period is heavy for more than seven days and/or you have heavy bleeding that is a lot more than usual, it could be a sign of a problem.')}>
          <Text>Why are some periods so different?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('First up, why the heck do we call it a “menstrual” cycle anyway? Turns out, it comes from the Latin word menses, which translates to month. Ah, so it actually does make sense.')}>
          <Text>Why do we call it menstruation?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Dealing with period blood is bad enough, but to add insult to injury, it feels like you’re also running to the bathroom every six seconds on your period, right? If you’ve ever wondered if you could just be imagining the fact that you have to poop more on your period, let me assure you that you’re not imagining things. Your menstrual cycle really gets things flowing in your body, including making your stool flow a little more smoothly than usual. The stool is looser, so you’re more likely to have a bowel movement when you’re on your period. You have that bonus fun thanks to prostaglandins in your body that help your smooth muscle relax, preparing to shed your uterine lining for you.Thanks, body!Fun fact: Those prostaglandins are also the same vital part of the labor process, to help your body get rid of excess poop that stands in the way of your baby’s descent into the birth canal.')}>
          <Text>Why do you poop so much on your period?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('If your cramps are not alleviated with traditional over the counter medications, you may have another condition such as endometriosis or adenomyosis – disorders with the uterus and menstrual tissue.” So, if popping a pain reliever doesn’t help, get yourself to the gyno to see')}>
          <Text>How much pain is okay, and when should I see a doctor?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Menstrual cups are usually made of silicone and rarely cause any type of allergic reaction. They’re generally safe to use.” Just be sure to follow the instructions carefully, and empty it as often as recommended, for best results ')}>
          <Text>Are menstrual cups safe to use?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Have fun! But do make sure you do not skip your normal method of protection. Basically, ensure you have good contraception and STI (sexually transmitted infection) prevention throughout the menstrual cycle should make it even more safe and enjoyable.')}>
          <Text>Is it safe to have sex when I’m on my period?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('It is really a matter of personal preference')}>
          <Text>What’s better for my body, tampons or pads?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Sometimes when you have heavy flow, your body doesn’t have time to break down thick menstrual blood, resulting in clots. It’s nothing to worry about, unless the clots are bigger than the size of a quarter')}>
          <Text>Should I be worried if I see clots coming out during my period?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('This is usually due to a shift in your hormones, primarily progesterone, which may cause mood swings, GI upset, and even flu-like symptoms of fatigue')}>
          <Text>Why do I feel like I’m coming down with the flu right before I start my period?</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text style={styles.text}>FERTILITY</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Menopause is usually considered to be the moment when a woman’s fertility period ends. A woman is considered to be menopausal if she experiences 12 months of amenorrhea after the final menstrual period in the absence of any other pathological or physiological causes. The range of menopause is usually between 50 to 60 years old ')}>
          <Text>At what age does a woman stop being fertile?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('When a woman ovulates, she is at her most fertile. Ovulation occurs when the egg moves from the ovaries through the fallopian tube to the uterus. For most women, ovulation is 12 to 16 days before her period begins. To find out when that is for you, begin keeping track of your menstrual periods. Once you know how far apart your periods are, count backward from the day your period will start to the day that you are likely to be ovulating.')}>
          <Text>When is a woman at her most fertile?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('After going to a fertility specialist and having tests conducted, your doctor will suggest a course of action that will be tailored to you.In some cases, women are unable to conceive because of blockages in their fallopian tube. If that is the issue, your doctor will suggest tuboplasty, a surgery to clear the fallopian tubes. Tuboplasty is also used to resect sections of damaged tubes. If there are other difficulties, fertility drugs can be prescribed to help regulate your cycle. Taking fertility drugs can trigger the release of eggs during ovulation. In vitro fertilization(IVF) is another common fertility treatment which requires the removal of eggs.The eggs are then injected with semen in a lab. If fertilization occurs, the embryo is inserted into the uterus. IVF allows donor eggs to be fertilized using sperm from a partner.The fertilized embryo is then transferred to the woman’s uterus.While there are further options, the above are the most common.')}>
          <Text>What fertility treatments are available?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Egg freezing technology has had some significant advancements over the last several years, but it’s still not the right solution for all women and all situations. Generally speaking, women in their 20s or early 30s will have greater success with egg freezing.Reproductive specialists have varying degrees of success with pregnancy after egg freezing.There’s no guarantee that freezing your eggs now will guarantee a baby later on')}>
          <Text>Should I freeze my eggs?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Some forms of birth control have a longer impact than others. For example, some hormonal birth controls can delay your period for several months. (But check in with your doc to confirm everything is OK.)')}>
          <Text>What about my birth control?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Your fertility doctor may advise you treatment options like: Intra - uterine insemination(IUI) – This process involves placing a sperm inside the woman’s uterus to bring about fertilization. This process increases the chances of fertilization. In-vitro fertilization (IVF) – Eggs and sperm samples are extracted and combined in a laboratory tube to form an embryo. The embryo is transferred into the uterus. Intra-cytoplasmic sperm injection (ICSI) – It is a specialized form of IVF used mainly in case of male infertility.')}>
          <Text>Which Treatment Is Recommended First And How Long Will It Take?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('It is always better to be well informed about any possible side-effects which can occur as a result of medications or other forms of fertility treatment. This helps you to be mentally prepared for the same.')}>
          <Text>Are There Any Side Effects For this Treatment?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Success rates for any kind of fertility treatment are influenced by the individual patient’s response to the treatment. Your doctor may tell you his experience of a successful pregnancy with patients of similar profile to that of yours.')}>
          <Text>What Is The Success Rate For These Procedures?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('If one of the treatment options fails, your doctor may advise you to go for other options. For example, if you have had an unsuccessful IUI, your doctor may advise you to go for IVF or ICSI or IVF surrogacy depending upon feasibility.')}>
          <Text>What Other Treatment Can We Plan If This One Turns Out Unsuccessful?</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text style={styles.text}>SEXUAL VIOLENCE</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('“Sexual assault” is any unwanted sexual, physical, verbal, or visual act that forces someone to have sexual contact against his or her will. It’s motivated by the need to control, humiliate, and harm. Some examples are: harassment, rape, incest, oral sex, molestation, forcing someone to pose for pictures, and unwanted touching.')}>
          <Text>What is sexual assault?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('It’s a specific type of sexual assault. It involves any forced, manipulated, or coerced penetration of the vagina, anus, or mouth by a penis or other object. It is not a crime of passion. It’s a crime of violence—often used to scare or degrade the victim. It’s a common misconception that sexual assault and rape are perpetrated by strangers.  Most survivors know their perpetrators.')}>
          <Text>What is rape?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Sexual activity requires consent, which is defined as clear, unambiguous, and voluntary agreement between the participants to engage in specific sexual or nonsexual activity. Consent is an enthusiastic, clearly communicated and ongoing yes. Consent is a clear “yes” to your partner, not the absence of a “no.”  It’s not okay to assume that once someone consents to an activity,  they are consenting to it anytime in the future as well.')}>
          <Text>What is consent?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('ONE: Reach out for support, TWO: Consider your medical options (Choosing to go to the hospital or a medical rape center after an assault can be beneficial for a number of reasons. Most critically, health care practitioners can treat bodily injury and help ensure your sexual and physical health. Additionally, they can provide you with a rape kit—a sexual assault forensic exam that can be used to collect DNA, blood samples and other evidence. If you are not ready to file a police report immediately, some centers can freeze the evidence and store it for later access), THREE: Consider your legal options, FINALLY: Give yourself time to proccess the incidence and reconnect with yourself and your life')}>
          <Text>What to do after you've been sexually assaulted?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Some forms of birth control have a longer impact than others. For example, some hormonal birth controls can delay your period for several months. (But check in with your doc to confirm everything is OK.)')}>
          <Text>What about my birth control?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('If your cramps are not alleviated with traditional over the counter medications, you may have another condition such as endometriosis or adenomyosis – disorders with the uterus and menstrual tissue.” So, if popping a pain reliever doesn’t help, get yourself to the gyno to see')}>
          <Text>How much pain is okay, and when should I see a doctor?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Menstrual cups are usually made of silicone and rarely cause any type of allergic reaction. They’re generally safe to use.” Just be sure to follow the instructions carefully, and empty it as often as recommended, for best results ')}>
          <Text>Are menstrual cups safe to use?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Have fun! But do make sure you do not skip your normal method of protection. Basically, ensure you have good contraception and STI (sexually transmitted infection) prevention throughout the menstrual cycle should make it even more safe and enjoyable.')}>
          <Text>Is it safe to have sex when I’m on my period?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('It is really a matter of personal preference')}>
          <Text>What’s better for my body, tampons or pads?</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text style={styles.text}>SEXUALLY TRANSMITTED DISEASES</Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('In the very technical sense, yes. “STD” stands for Sexual Transmitted Disease. “STI” stands for Sexually Transmitted Infection. A disease typically signifies a more advanced condition or infection and may carry an associated stigma, which is why there has been an effort to shift the term to infection.Many infections can be asymptomatic and are not considered a disease until they present with symptoms. Regardless of what you call them, it’s important to know that both STDs and STIs need to be screened for and treated.')}>
          <Text>Is there a difference between an STD and STI? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('It ultimately depends on your sexual behaviors. It is recommended that any sexually active female under the age of 25 receive at least annual screenings')}>
          <Text>How often should I get tested for an STD? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Yes, some STIs can be present without symptoms and others may have delayed symptoms. For example, gonorrhea and chlamydia can be present without any symptoms. Similarly, syphilis initially presents as a painless ulcer which if it is located inside the vagina may go unrecognized. Other sexually-transmitted viruses like human papilloma virus (HPV) or human immunodeficiency virus (HIV) can take weeks, months, or years for symptoms to develop.  This is why screening for STIs even when a patient doesn’t have symptoms is so important.')}>
          <Text>Is it true that some STDs have no symptoms at all?</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Unfortunately, not. If you are exposed and treated for an STD, you are susceptible again after treatment. For the bacterial infections (i.e. gonorrhea, chlamydia, syphilis), treatment will include a short-course of antibiotics and follow-up testing to confirm the treatment worked. Certain STDs like herpes and HIV are lifelong infections and require ongoing treatment.')}>
          <Text>If I receive treatment for an STD does that mean I can’t catch it again in the future? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Yes and no. Cold sores come from the herpes virus and there are two strains that can cause cold sores: HSV-1 and HSV-2.  HSV-1 is very common among the population and is often not obtained through sexual contact (many people are exposed when they are young from kissing older relatives, etc) and usually causes cold sores on the mouth. HSV-2 is less common and traditionally obtained through sexual activity (oral, vaginal, anal intercourse) and usually produces sores on the gentials.  You can, however, get HSV-1 on your genitals and HSV-2 on your mouth and regardless of how you obtained either strain: both can be transmitted through kissing and sexual contact. If you have symptoms of a cold sore or anogenital lesions you should refrain from all activity including kissing until the lesions have completely healed.It’s important to know that the virus can be spread even when you are not showing signs of infection.It is also important to know that even condoms don’t always work against active lesions.The good news is that if you are prone to outbreaks there are daily medications you can take to prevent them.')}>
          <Text>Is a cold sore an STD? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Not always, there are many reasons for vaginal discharge! Discolored or increased discharge can be a symptom of a non-sexually transmitted infection (such as a yeast infection) or could even be due to hormonal changes. It’s important to consider your recent sexual activity to better understand if this symptom could be linked to an STD and if you have any concerns it is always best to call your doctor.')}>
          <Text>My vaginal discharge is a different color than normal, does that mean I have an STD? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Yes! You can be at-risk of both giving and receiving an STD through oral sex. You can develop infections of the throat with gonorrhea and chlamydia as well as sores around the mouth with herpes.')}>
          <Text>Can STDs be transmitted through oral sex? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('No!  Let me repeat: No.  Birth control in any form (i.e. the pill, patches, IUDs) only works to prevent pregnancy. Birth control does not provide any protection again STDs. Barrier contraceptives (i.e. condoms/dental dams) can protect against some STDs, but are not 100% effective.')}>
          <Text>Does being on the pill protect me from STDs? </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Possibly. Often, pelvic pain is not related to an STD. Pelvic pain during sex is very common and may be related to other conditions including endometriosis, cysts, or tension.   Your anatomy – how your uterus is positioned in your pelvis – may also make intercourse painful during certain positions.  Severe infections with gonorrhea of chlamydia or an active herpes outbreak can also make intercourse painful.  We want sex to be enjoyable and if you are having pain for any reason don’t hesitate to call your doctor so that we can help you figure out the cause.')}>
          <Text> I’m experiencing pain during sex, does that mean I have an STD?</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEC7C3",
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    marginHorizontal: 25,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.primaryButton,
    borderColor: colors.primaryButtonBorder,
    padding: 25,
    borderRadius: 25,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.titleColor

  }
});
