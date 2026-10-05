const projects = {
  sns: {
    category: "SNS Operation",
    title: "SNS 콘텐츠 운영 프로젝트",
    caption: "릴스와 카드뉴스를 직접 기획하고 게시물별 반응을 비교한 콘텐츠 운영 경험입니다.",
    goal: "20대 대학생 타깃의 관심 주제를 찾아 저장과 댓글 반응을 높이는 것.",
    execution: "콘텐츠 12개를 기획하고, 업로드 후 조회수와 저장률을 비교해 다음 주제를 조정했습니다.",
    result: "정보형 콘텐츠보다 상황 공감형 콘텐츠의 저장률이 높다는 인사이트를 얻었습니다.",
    learning: "좋은 콘텐츠는 예쁜 디자인보다 타깃의 상황과 질문을 정확히 잡는 데서 시작된다는 점을 배웠습니다.",
    tags: ["#SNS콘텐츠", "#릴스기획", "#성과분석"],
    visual: "card-a",
  },
  brand: {
    category: "Brand Campaign",
    title: "브랜드 공모전 캠페인",
    caption: "팀 프로젝트에서 타깃 페르소나와 캠페인 메시지 전략을 맡았습니다.",
    goal: "브랜드 인지도 상승을 위한 대학생 타깃 캠페인 아이디어를 제안하는 것.",
    execution: "경쟁사 사례를 조사하고, 고객 페르소나와 핵심 메시지를 정리해 발표 흐름을 구성했습니다.",
    result: "문제 정의와 메시지 전략 파트를 담당해 팀 발표의 설득력을 높였습니다.",
    learning: "캠페인은 아이디어보다 문제 정의와 타깃 해석이 먼저라는 점을 체감했습니다.",
    tags: ["#브랜드전략", "#공모전", "#페르소나"],
    visual: "card-b",
  },
  data: {
    category: "Data Insight",
    title: "설문 기반 마케팅 개선 제안",
    caption: "137개 설문 응답을 기반으로 구매 동기와 가격 민감도를 분석했습니다.",
    goal: "가설이 아니라 응답 데이터를 바탕으로 타깃의 구매 장벽을 찾는 것.",
    execution: "설문 문항을 설계하고, 응답 결과를 Excel로 정리해 주요 패턴을 비교했습니다.",
    result: "가격보다 사용 상황에 대한 확신 부족이 더 큰 장벽이라는 결론을 도출했습니다.",
    learning: "숫자는 결론 자체가 아니라 더 좋은 질문으로 이어지는 출발점이라는 점을 배웠습니다.",
    tags: ["#설문분석", "#Excel", "#고객인사이트"],
    visual: "card-c",
  },
  local: {
    category: "Local Marketing",
    title: "로컬 브랜드 콘텐츠",
    caption: "지역 매장의 방문 동기를 콘텐츠 소재로 바꾼 로컬 마케팅 실험입니다.",
    goal: "매장 분위기와 이용 상황을 콘텐츠로 전달해 방문 관심을 높이는 것.",
    execution: "방문 후기, 메뉴 선택 이유, 사진 포인트를 중심으로 카드뉴스 구성을 기획했습니다.",
    result: "단순 메뉴 소개보다 방문 상황을 담은 콘텐츠가 더 많은 저장 반응을 얻었습니다.",
    learning: "로컬 콘텐츠는 정보보다 장면을 보여줄 때 더 쉽게 기억된다는 점을 확인했습니다.",
    tags: ["#로컬마케팅", "#방문후기", "#콘텐츠기획"],
    visual: "card-d",
  },
  blog: {
    category: "SEO Content",
    title: "블로그 콘텐츠 실험",
    caption: "검색 키워드와 글 구조를 조정하며 정보형 콘텐츠의 읽기 흐름을 개선했습니다.",
    goal: "검색 의도에 맞는 제목과 목차를 구성해 체류 시간을 높이는 것.",
    execution: "키워드별 상위 글 구조를 분석하고, 제목과 소제목을 질문형으로 재구성했습니다.",
    result: "독자가 필요한 정보를 빠르게 찾도록 글의 스캔 가능성을 높였습니다.",
    learning: "SEO 콘텐츠는 키워드 반복보다 독자의 다음 질문을 예측하는 일이 중요했습니다.",
    tags: ["#SEO", "#블로그", "#콘텐츠구조"],
    visual: "card-e",
  },
  launch: {
    category: "Launch Plan",
    title: "신제품 런칭 제안",
    caption: "고객 여정별 접점을 나누어 신제품 인지부터 구매까지의 흐름을 설계했습니다.",
    goal: "신제품을 처음 접하는 고객이 자연스럽게 관심을 갖고 비교하도록 만드는 것.",
    execution: "인지, 탐색, 구매, 후기 단계로 나누어 채널별 콘텐츠 아이디어를 정리했습니다.",
    result: "제품 특징을 나열하기보다 고객 여정별 메시지를 달리하는 전략을 제안했습니다.",
    learning: "런칭 전략은 한 번의 강한 메시지가 아니라 접점마다 다른 역할을 주는 설계에 가깝습니다.",
    tags: ["#런칭전략", "#고객여정", "#캠페인기획"],
    visual: "card-f",
  },
};

const modal = document.querySelector("#project-modal");
const modalVisual = document.querySelector("#modal-visual");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalCaption = document.querySelector("#modal-caption");
const modalGoal = document.querySelector("#modal-goal");
const modalExecution = document.querySelector("#modal-execution");
const modalResult = document.querySelector("#modal-result");
const modalLearning = document.querySelector("#modal-learning");
const modalTags = document.querySelector("#modal-tags");
const toast = document.querySelector(".toast");
let lastFocusedElement = null;

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalCaption.textContent = project.caption;
  modalGoal.textContent = project.goal;
  modalExecution.textContent = project.execution;
  modalResult.textContent = project.result;
  modalLearning.textContent = project.learning;
  modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalVisual.className = `modal-visual ${project.visual}`;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("이메일이 복사되었습니다.");
    } catch (error) {
      showToast("복사에 실패했습니다. 이메일을 직접 선택해 주세요.");
    }
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeLink = navItems.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      navItems.forEach((link) => link.classList.remove("active"));
      if (activeLink) activeLink.classList.add("active");
    });
  },
  { rootMargin: "-45% 0px -45% 0px" }
);

sections.forEach((section) => observer.observe(section));
