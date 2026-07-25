import Image from "next/image";
import Link from "next/link";
import React from "react";
import Shape from "./components/ui/icons/Shape";
import Swiper from "./components/ui/Swiper";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Icon } from "@iconify/react";
import Shape2 from "./components/ui/icons/Shape2";
import Header from "./components/Header";
import { imageUrl } from "./lib/image-url";

function page() {
  const publications = [
    {
      title: "Work - Family Boundary Management",
      content: (
        <>
          <p>
            I explore and address questions on how work-family enrichment is
            achieved, how employees can avoid conflict and what are best
            possible solutions to ensure motivated employees across domains. Our
            research develops interesting concepts such as “family crafting”,
            “integration”, “segmentation” and “relational crafting”.
          </p>
          <ul>
            <li>
              <p>
                <strong>
                  <Link
                    target="_blank"
                    href="https://www.sciencedirect.com/science/article/pii/S0001879119300375"
                  >
                    Serving followers and family? A trickle-down model of how
                    servant leadership shapes employee work performance
                  </Link>{" "}
                </strong>
                Jakob Stollberger, Mireia Las Heras,&nbsp;Yasin Rofcanin, Maria
                Jose Bosch Kreis – Journal of Vocational Behavior – February
                2019
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <Link
                    target="_blank"
                    href="https://pubmed.ncbi.nlm.nih.gov/27101338/"
                  >
                    Family supportive supervisor behaviors and organizational
                    culture: Effects on work engagement and performance
                  </Link>{" "}
                  –&nbsp;
                </strong>
                Yasin Rofcanin, Mireia Las Heras , Arnold B Bakker – Journal of
                occupational Health Psychology – April 2016
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Proactive Work Behaviours",
      content: (
        <>
          <p>
            How can employees be proactive? What is the role of managers and
            organizations? Are proactive work behaviours good or bad? In my
            recent papers, I develop and implement these ideas.
          </p>
          <ul>
            <li>
              <p>
                <Link
                  target="_blank"
                  href="https://journals.sagepub.com/doi/10.1177/0018726718779121"
                >
                  <strong>
                    Relational job crafting: Exploring the role of employee
                    motives with a weekly diary study
                  </strong>
                </Link>{" "}
                – Yasin Rofcanin, Arnold Bakker, Aykut Berber, Ismail Golgeci,
                Mireia Las Heras – Human Relations – April 2019
              </p>
            </li>
            <li>
              <p>
                <Link
                  target="_blank"
                  href="https://www.sciencedirect.com/science/article/pii/S0001879119301472"
                >
                  <strong>
                    Seeking an “i-deal” balance: Schedule-flexibility i-deals as
                    mediating mechanisms between supervisor emotional support
                    and employee work and home performance
                  </strong>
                </Link>{" "}
                – Ciara M. Kelly,&nbsp;Yasin Rofcanin, Mireia Las Heras,
                Chidiebere Ogbonnaya, Elise Marescaux, María José Bosch –
                Journal of Vocational Behavior – April 2020
              </p>
            </li>
            <li>
              <p>
                <Link
                  target="_blank"
                  href="https://researchportal.bath.ac.uk/en/publications/how-do-flexibility-i-deals-relate-to-work-performance-exploring-t"
                >
                  <strong>
                    How do flexibility i-deals relate to work performance?
                    Exploring the roles of family performance and organizational
                    context
                  </strong>
                </Link>{" "}
                – Yasin Rofcanin, Mireia Las Heras, P. Matthijs Bal, Jakob
                Stollberger – Journal of Organisational Behaivour – October 2017
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Individualization of HRM Practices",
      content: (
        <>
          <p>
            Every employee is unique and has certain work needs and preferences.
            I develop and explore the idea of differentiating human resource
            practices for organizations.
          </p>
          <ul>
            <li>
              <p>
                <strong>
                  <Link
                    target="_blank"
                    href="hhttps://psycnet.apa.org/record/2017-24675-001"
                  >
                    How do flexibility i‐deals relate to work performance?
                    Exploring the roles of family performance and organizational
                    context.
                  </Link>{" "}
                  –&nbsp;
                </strong>
                Yasin Rofcanin, Aykut Berber, Elise Marescaux, Matthjis
                Bal,&nbsp;Farooq Mughal, Mine Afacan Findikli – Human Resource
                Management Journal – December 2018
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <Link
                    target="_blank"
                    href="https://journals.aom.org/doi/10.5465/AMBPP.2018.38"
                  >
                    Seeing Eye to Eye on Family Supportive Supervisor Behaviors:
                    The Impact on Employee Outcomes
                  </Link>{" "}
                  –&nbsp;
                </strong>
                Elise Marescaux,&nbsp;Yasin Rofcanin, Mireia Las Heras – Academy
                of Management Best Paper Proceedings – July 2018
              </p>
            </li>
          </ul>
        </>
      ),
    },
  ];

  const teachings = [
    {
      title: "Analytics and Big Data Use in Human Resources Management",
      content: <p>Master’s and MBA levels.</p>,
    },
    {
      title: "Strategic and People Management",
      content: <p>MBA level.</p>,
    },
    {
      title: "Organizational Behaviour",
      content: <p>Undergraduate level.</p>,
    },
    {
      title: "Business & Management",
      content: <p>Undergraduate level.</p>,
    },
  ];

  const blogs = [
    {
      title: "Balanced lives help us all",
      description:
        "The more family-friendly employers are, the greater the benefits for them, their staff and society as a whole.",
      publishers: "Mireia Las Heras and Yasin Rofcanin",
      site: "Financial Times",
      date: "November 2019",
      image: imageUrl("blog-1.webp"),
      url: "https://www.ft.com/content/2c50fadc-01f0-11ea-be59-e49b2a136b8d",
    },
    {
      title:
        "Why business should do more for employees looking after elderly relatives",
      description:
        "The word’s population of elderly people – aged 70 or over – is expected to increase sharply in the coming decades. Many of these people will need some kind of care – and much of that care will come from family members who already have time-consuming jobs.",
      publishers: "Yasin Rofcanin",
      site: "The Conversation",
      date: "November 2018",
      image: imageUrl("blog-2.webp"),
      url: "https://theconversation.com/why-business-should-do-more-for-employees-looking-after-elderly-relatives-98275",
    },
    {
      title:
        "Empathy in organisations: How considerate managers improve employee performance",
      description:
        "Dr Yasin Rofcanin is exploring the links between employee wellbeing and organisational productivity.",
      publishers: "Yasin Rofcanin",
      site: "University of Bath",
      image: imageUrl("blog-3.webp"),
      url: "https://www.bath.ac.uk/case-studies/empathy-in-organisations-how-considerate-managers-improve-employee-performance/",
    },
  ];

  const medias = [
    {
      video: "bun72cIXHd0",
      content: (
        <p>
          Here, my talk focuses on how companies and organisations can implement
          idiosyncratic deals in a fair and effective way. From{" "}
          <Link
            className=" hover:text-[#23a455] transition-all"
            target="_blank"
            href="https://researchportal.bath.ac.uk/en/publications/co-worker-reactions-to-i-deals-through-the-lens-of-social-compari"
          >
            <em>
              <strong>our&nbsp;published paper</strong>
            </em>
          </Link>{" "}
          at Human Relations.
        </p>
      ),
    },
    {
      video: "W3GoTvGvVMM",
      content: <p>New ways of working and flexibility.</p>,
    },
    {
      video: "C-aPws4MIoc",
      content: <p>Women and leadership talk. A key take away from my talk.</p>,
    },
    {
      url: "https://x.com/UniofBath/status/1244618911636742145",
      image: imageUrl("blog-3.webp"),
      content: (
        <p>
          A short talk on how to work from home and manage work-family under
          Covid-19.
        </p>
      ),
    },
  ];

  const socials = [
    {
      icon: "fa-brands:linkedin",
      url: "https://uk.linkedin.com/in/yasin-rofcanin-19a05956",
      color: "#0077b5",
    },
    {
      icon: "fa-solid:envelope",
      url: "mailto:Y.Rofcanin@bath.ac.uk",
      color: "#23A455",
    },
    {
      icon: "fa-solid:university",
      url: "mailto:Y.Rofcanin@bath.ac.uk",
      color: "#818a91",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full h-[600px] relative overflow-hidden mt-20">
        <Image
          src={imageUrl("hero.webp")}
          className="w-full h-full object-cover"
          alt="Hero Image"
          width={1920}
          height={600}
        />
        <div className="absolute bottom-0 right-0 p-3 lg:p-12 text-end">
          <h1 className="text-6xl lg:text-8xl text-[#f3f3f3] font-secondary">
            Yasin Rofcanin
          </h1>
          <p className="text-[15px] lg:text-2xl text-[#f3f3f3] font-bold">
            Chair (Professor) in Organisational Psychology and Human Resource
            Management
            <br />
            <em>Co-Director of Future of Work Research (FoW) Centre</em>
            <br />
            <em>School of Management, University of Bath</em>
            <br />
            <em>Associate Editor of Human Relations</em>
            <br />
            <em>Associate Editor at Journal of Management Studies</em>
          </p>
        </div>
        {/* <Shape className="w-[200%] h-[55px] absolute left-0 bottom-0 fill-[#ebebeb]" /> */}
      </div>
      <section className="py-6 px-5 lg:px-0" id="about-me">
        <div className="container mx-auto flex flex-col gap-6">
          <hr className="border-black"></hr>
          <h2 className="text-3xl font-semibold text-center">About Me</h2>
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <Swiper
              images={[
                imageUrl("slide-0.webp"),
                imageUrl("slide-1.webp"),
                imageUrl("slide-2.webp"),
              ]}
            />
            <div className="w-full flex items-center justify-center text-justify">
              <p className="leading-loose">
                I am a Professor of Organisational Psychology and Human Resource
                Management at the University of Bath, School of Management. Born
                and educated in Istanbul (Bogazici University), I completed my
                Ph.D. study at Warwick Business School, University of Warwick.
                Over the last decade, I explored how employees feel motivated
                and productive at work. In particular, my research and teaching
                focus on how employees obtain personalized human resource
                practices and engage in proactive job crafting to enhance their
                well-being. Placing employees in a position of self-starters and
                change-initiator, my research explores how new ways of working
                impact on employee engagement and productivity. My ideas have
                reached a wide range of audience through my peer-reviewed
                publications, book and articles targeted at managers.
              </p>
            </div>
          </div>
          <hr className="border-black"></hr>
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-32 px-5 lg:px-0" id="publications">
        <div className="container mx-auto flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-center">
            Selected Publications
          </h2>
          <p>
            &lt;&lt; My work with colleagues explore three interrelated areas in
            management research. &gt;&gt;
          </p>
          <Accordion
            transition
            transitionTimeout={250}
            className="border-b-0 border-2 border-[#d4d4d4]"
          >
            {publications.map((item, index) => (
              <AccordionItem
                key={index}
                header={
                  <div className="flex items-center gap-4 font-semibold cursor-pointer text-start text-start">
                    <Icon
                      className="w-3.5 h-3.5 text-black flex-shrink-0"
                      icon="fa:paper-plane"
                    />
                    {item.title}
                  </div>
                }
                className="border-b-2 border-[#d4d4d4] px-5 py-4 leading-none flex flex-col"
                contentProps={{
                  className: "transition-all prose-sm",
                }}
              >
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
          <Link
            className="text-black hover:text-[#23a455] transition-all italic font-semibold"
            target="_blank"
            href="https://researchportal.bath.ac.uk/en/persons/yasin-rofcanin"
          >
            &gt;&gt; Click here to see my all publications &lt;&lt;
          </Link>
        </div>
      </section>
      <Shape2 className="fill-[#f3f3f3] h-14 w-full" />
      <section className="py-6" id="blog">
        <div className="container mx-auto flex flex-col gap-10 px-5 lg:px-20">
          <h2 className="text-3xl font-semibold text-center">Blog</h2>
          {blogs.map((item, index) => (
            <div className="flex flex-col gap-10" key={index}>
              <div
                className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 leading-loose"
                key={index}
              >
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="text-2xl text-[#333333] hover:text-[#23a455] font-semibold transition-all">
                    <Link href={item.url} target="_blank">
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.description}</p>
                  <p className="font-semibold">
                    {item.publishers} - {item.site}{" "}
                    {item.date && ` - ${item.date}`}
                  </p>
                </div>
                <Link
                  href={item.url}
                  target="_blank"
                  className="w-60 flex items-center justify-center"
                >
                  <Image
                    className="w-full h-auto object-contain"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                </Link>
              </div>
              <hr className="border-black"></hr>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-32" id="invited-keynote-talks">
        <div className="container mx-auto flex flex-col gap-6 px-5 lg:px-20">
          <h2 className="text-3xl font-semibold text-center">
            Latest Keynote Talks
          </h2>
          <div className="prose-sm w-full">
            <p>
              <Link
                className="hover:text-[#23a455] transition-all"
                target="_blank"
                href="https://www.linkedin.com/posts/yasin-rofcanin-19a05956_jms-workshop-istanbul-activity-7300938275148423169-d9Wz/?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAACJ4wjsBBIABeacTOzuxdHb0dE8AA6NNQII"
              >
                <strong>
                  Journal of Management Studies Paper Development Workshop
                  (PDW), Sabancı Business School, March, 2025.
                </strong>{" "}
              </Link>
              This workshop aims to help scholars refine their research,
              navigate the publication process, and engage in meaningful
              academic discussions. We received an impressive number of
              high-quality submissions, and I’m particularly eager to support
              early career researchers from Turkey in developing their work for
              top-tier journals.
            </p>
            <p>
              <strong>
                Recent and Critical Debates in Human Resource Management
                Practices, Istanbul Beykent University, February, 2020.
              </strong>{" "}
              This is a two-day mini workshop and symposium organised by Beykent
              Univeristy, the largest HR institution in Turkey (translated into
              Personnel Management).
            </p>
            <p>
              <strong>
                Individualisation of Human Resources Management Practices at the
                International Conference on Critical Debates in Social Sciences
                held in May 2019, Izmir, Turkey.
              </strong>{" "}
              My keynote underpinned the increasing prevalence of human
              resources differentiation and how the implementation of such
              practices may raise concerns of fairness for co-workers.
            </p>
            <p>
              <strong>
                International Conference of Women and Leadership, July 2018,
                Barcelona, Spain.
              </strong>{" "}
              My talk included a critical evaluation of flexible work practices
              and adopting a gender perspective. My keynote addressed recent
              debates on how such practices may unintentionally discriminate
              different genders and offered a future research agenda.
            </p>
            <p>
              <strong>
                Key note on Job Crafting Academy of Management Conference held
                in Philadelphia, the USA, in 2016.
              </strong>{" "}
              This symposium was organised by experts on job crafting, and my
              role was the be the key discussant, integrating the discussions of
              the studies presented in the symposium and outlining a future
              research agenda.
            </p>
          </div>
        </div>
      </section>
      <section className="py-32" id="editoral-roles">
        <div className="container mx-auto flex flex-col gap-10 px-5 lg:px-20">
          <h2 className="text-3xl font-semibold text-center">Editoral Roles</h2>
          <div className="prose-sm w-full">
            <p>
              <strong>Associate Editorship</strong>: &nbsp;I am an Associate
              Editor of <em>Human Relations</em> which is considered a flagship
              journal of the <em>Tavistock Institute</em> and has been published
              for over 70 years.
            </p>
            <p>
              My responsibilities as Associate Editor cover two areas: Firstly,
              I am responsible for handling the submissions that fall in the
              areas of flexible work practices, human resource management,
              proactive work behaviours and organisational psychology. Secondly,
              I raise media impact by encouraging and supporting authors to a)
              publish blog posts of their articles and b) develop short videos
              of their articles all of which are managed in the social media
              channels of the journal. The focus of my leadership in this
              process is to develop and manage social media channels, namely
              Human Relations Youtube channel, Facebook, Twitter and Linkedin on
              behalf of Human Relations.
            </p>
            <p>
              In addition to my on-going Associate Editorship role, I am an
              elected member of and sit on the Editorial Boards of three ABS 4
              journals. These are:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="prose-sm">
              <p>
                <strong>
                  <u>Editorial Membership:</u>
                </strong>
              </p>
              <ul>
                <li>British Journal of Management (January 2019 – Present)</li>
                <li>
                  Journal of Occupational Health Psychology (January 2020 –
                  Present)
                </li>
                <li>
                  Journal of Organizational Behavior (Invited in February 2020 –
                  Present)
                </li>
              </ul>
            </div>
            <Link
              href="https://www.humanrelationsjournal.org/about/editorial-team/"
              target="_blank"
              className="w-72 flex items-center justify-center"
            >
              <Image
                className="w-full h-auto object-contain border border-black hover:scale-110 transition-all"
                src={imageUrl("human-relations.webp")}
                alt="Human Relations"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      </section>
      <hr className="container mx-auto border-black"></hr>
      <section className="py-32" id="future-of-work">
        <div className="container mx-auto flex flex-col gap-6 px-5 lg:px-20">
          <h2 className="text-3xl font-semibold text-center">Future of Work</h2>
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="w-full prose-sm">
              <p>
                <strong>Future of Work Research Centre Leadership </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>I am a Co-Director of the{" "}
                <Link
                  className="hover:text-[#23a455] transition-all"
                  target="_blank"
                  href="https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/"
                >
                  <em>
                    <strong>Future of Work</strong>
                  </em>
                </Link>{" "}
                Research at University of Bath, School of Management.
              </p>
              <ul>
                <li>
                  We organise workshops on improving the quality of research
                  output at the School level (Sessions of Deep Reading, Writing
                  Retreats and Publishing in the USA Journals) and developing
                  sessions to the career development of postgraduate students
                  and early career researchers (Sessions of Meet the Editors,
                  Afternoon Tea Talks).
                </li>
                <li>
                  Furthermore, we carry out activities&nbsp;includingseries of
                  mini-conferences that key external stakeholders (companies and
                  practitioners). Please get in touch with us if you are
                  interested.
                </li>
                <li>
                  Finally, our research centre &nbsp;regularly hosts Visiting
                  Researcher.
                </li>
              </ul>
              <Link
                className="text-black hover:text-[#23a455] transition-all italic font-semibold"
                target="_blank"
                href="https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/"
              >
                &gt;&gt; Click to see our website &lt;&lt;
              </Link>
            </div>
            <Swiper
              images={[
                imageUrl("future-our-work-0.webp"),
                imageUrl("future-our-work-1.webp"),
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-32" id="teachings">
        <div className="container mx-auto flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-center">Teachings</h2>
          <p>
            &lt;&lt;My teaching experience covers a) developing and b)
            delivering modules at MBA, Master’s and Ungraduated levels. &gt;&gt;
          </p>
          <Accordion
            transition
            transitionTimeout={250}
            className="border-b-0 border-2 border-[#d4d4d4]"
          >
            {teachings.map((item, index) => (
              <AccordionItem
                key={index}
                header={
                  <div className="flex items-center gap-4 font-semibold cursor-pointer text-start">
                    <Icon
                      className="w-3.5 h-3.5 text-black flex-shrink-0"
                      icon="fa:pencil"
                    />
                    {item.title}
                  </div>
                }
                className="border-b-2 border-[#d4d4d4] px-5 py-4 leading-none flex flex-col"
                contentProps={{
                  className: "transition-all prose-sm",
                }}
              >
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Shape2 className="fill-[#f3f3f3] h-14 w-full" />
      <section className="pt-32 pb-6" id="visitings">
        <div className="container mx-auto flex flex-col gap-14 px-5 lg:px-20">
          <h2 className="text-3xl font-semibold text-center">
            Visitings Positions and Professorships
          </h2>
          <div className="prose-sm w-full">
            <p>
              <Link
                className=" hover:text-[#23a455] transition-all"
                target="_blank"
                href="https://www.iese.edu/faculty-research/research-centers/icwf-international-center-work-family/"
              >
                <strong>
                  <em>IESE Business School</em>
                </strong>{" "}
              </Link>
              (Barcelona, Spain): Visiting Professor and Member of International
              Centre of Work-Family.
            </p>
            <p>
              <Link
                className=" hover:text-[#23a455] transition-all"
                target="_blank"
                href="https://bschool.nus.edu.sg/"
              >
                <strong>
                  <em>NUS Business School</em>
                </strong>{" "}
              </Link>
              (Singapore): Visiting Researcher
            </p>
            <p>
              <Link
                className=" hover:text-[#23a455] transition-all"
                target="_blank"
                href="https://mgmt.bogazici.edu.tr/"
              >
                <strong>
                  <em>Bogazici University</em>
                </strong>{" "}
              </Link>
              (Istanbul, Turkey): Adjunct Professor at the Department of
              Management.
            </p>
          </div>
          <hr className="container mx-auto border-black" id="media"></hr>
          <h2 className="text-3xl font-semibold text-center">Media</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {medias.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                {item.video && (
                  <iframe
                    className="w-full aspect-video"
                    title="youtube Video Player"
                    src={`https://www.youtube.com/embed/${item.video}?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0`}
                  ></iframe>
                )}
                {item.url && item.image && (
                  <Link
                    href={item.url}
                    target="_blank"
                    className="w-full aspect-video"
                  >
                    <Image
                      className="w-full h-full object-contain border border-black"
                      src={item.image}
                      width={600}
                      height={600}
                    />
                  </Link>
                )}

                {item.content}
              </div>
            ))}
          </div>
          <hr className="container mx-auto border-black" id="contact-me"></hr>
          <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
          <div className="flex justify-center gap-5">
            {socials.map((item, index) => (
              <Link
                target="_blank"
                href={item.url}
                key={index}
                className="w-20 lg:w-28 h-20 lg:h-28 rounded-full flex items-center justify-center p-7 transition-all hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: item.color }}
              >
                <Icon icon={item.icon} className="w-full h-full text-white" />
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-5">
            <p>Copyright 2025 - Yasin Rofcanin</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
