const words = [
    // 示例，添加更多单词和翻译
    { english: "ancient", chinese: "古老的" },
    { english: "advice", chinese: "建议" },
    { english: "barrier", chinese: "障碍" },
    { english: "calculate", chinese: "计算" },
    { english: "detail", chinese: "细节" },
    { english: "environment", chinese: "环境" },
    { english: "fabric", chinese: "织物" },
    { english: "gallery", chinese: "画廊" },
    { english: "habit", chinese: "习惯" },
    { english: "identity", chinese: "身份" },
    { english: "journey", chinese: "旅行" },
    { english: "knowledge", chinese: "知识" },
    { english: "language", chinese: "语言" },
    { english: "machine", chinese: "机器" },
    { english: "nature", chinese: "自然" },
    { english: "object", chinese: "物体" },
    { english: "package", chinese: "包裹" },
    { english: "quality", chinese: "质量" },
    { english: "resource", chinese: "资源" },
    { english: "system", chinese: "系统" },
    { english: "technology", chinese: "技术" },
    { english: "universe", chinese: "宇宙" },
    { english: "value", chinese: "价值" },
    { english: "wealth", chinese: "财富" },
    { english: "youth", chinese: "青春" },
    { english: "zone", chinese: "区域" },
    { english: "acquire", chinese: "获得" },
    { english: "benefit", chinese: "好处" },
    { english: "concept", chinese: "概念" },
    { english: "diverse", chinese: "多样的" },
    { english: "energy", chinese: "能量" },
    { english: "function", chinese: "功能" },
    { english: "global", chinese: "全球的" },
    { english: "hypothesis", chinese: "假设" },
    { english: "illustrate", chinese: "说明" },
    { english: "justify", chinese: "证明" },
    { english: "kinetic", chinese: "动力的" },
    { english: "legal", chinese: "法律的" },
    { english: "momentum", chinese: "动力" },
    { english: "negotiate", chinese: "谈判" },
    { english: "origin", chinese: "起源" },
    { english: "perspective", chinese: "视角" },
    { english: "quantity", chinese: "数量" },
    { english: "recover", chinese: "恢复" },
    { english: "strategy", chinese: "策略" },
    { english: "temporary", chinese: "临时的" },
    { english: "unique", chinese: "独特的" },
    { english: "variable", chinese: "变量" },
    { english: "wisdom", chinese: "智慧" },
    { english: "xenophobia", chinese: "排外" },
    { english: "yield", chinese: "产量" },
    { english: "zeal", chinese: "热情" },
    { english: "advocate", chinese: "提倡" },
    { english: "balance", chinese: "平衡" },
    { english: "clarity", chinese: "清晰" },
    { english: "derive", chinese: "得到" },
    { english: "evolve", chinese: "进化" },
    { english: "fundamental", chinese: "基础的"},
    { english: "generate", chinese: "生成" },
    { english: "hypothesis", chinese: "假说" },
    { english: "implement", chinese: "实现" },
    { english: "juxtapose", chinese: "并置" },
    { english: "keen", chinese: "热衷的" },
    { english: "leverage", chinese: "利用" },
    { english: "modify", chinese: "修改" },
    { english: "neutral", chinese: "中性的" },
    { english: "observe", chinese: "观察" },
    { english: "predict", chinese: "预测" },
    { english: "qualify", chinese: "限定" },
    { english: "reflect", chinese: "反映" },
    { english: "sustainable", chinese: "可持续的" },
    { english: "transform", chinese: "转换" },
    { english: "utilize", chinese: "利用" },
    { english: "validate", chinese: "验证" },
    { english: "warrant", chinese: "保证" },
    { english: "xenon", chinese: "氙" },
    { english: "yearn", chinese: "渴望" },
    { english: "zenith", chinese: "顶点" },
    { english: "abstract", chinese: "抽象的" },
    { english: "benchmark", chinese: "基准" },
    { english: "chronic", chinese: "慢性的" },
    { english: "domain", chinese: "领域" },
    { english: "empirical", chinese: "经验的" },
    { english: "finite", chinese: "有限的" },
    { english: "gradient", chinese: "梯度" },
    { english: "heuristic", chinese: "启发式的" },
    { english: "infrastructure", chinese: "基础设施" },
    { english: "jurisdiction", chinese: "管辖权" },
    { english: "kinetic", chinese: "运动的" },
    { english: "latitude", chinese: "纬度" },
    { english: "magnitude", chinese: "大小" },
    { english: "narrative", chinese: "叙述" },
    { english: "optimize", chinese: "优化" },
    { english: "protocol", chinese: "协议" },
    { english: "quantum", chinese: "量子" },
    { english: "resilient", chinese: "弹性的" },
    { english: "synthesis", chinese: "合成" },
    { english: "theoretical", chinese: "理论的" },
    { english: "ubiquitous", chinese: "无所不在的" }
    // 请根据需要继续添加单词到列表
];

function initWords() {
    const container = document.getElementById('wordsContainer');
    words.forEach((word, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1; // 显示单词索引
        button.classList.add('wordButton');
        button.setAttribute('id', `wordButton${index}`); // 给每个按钮一个唯一的ID
        button.onclick = () => {
            promptForAnswer(index);
            speak(word.english); // 播报单词发音
        };
        container.appendChild(button);
    });
}

function promptForAnswer(index) {
    const word = words[index];
    const wordPrompt = document.getElementById('wordPrompt');
    const input = document.getElementById('inputAnswer');
    const submit = document.getElementById('submitAnswer');
    document.getElementById('feedback').textContent = '';
    input.style.display = 'inline';
    submit.style.display = 'inline';
    input.value = '';
    input.focus();

    // 随机要求用户提供英文或中文翻译
    if (Math.random() > 0.5) {
        wordPrompt.textContent = `Translate to English: ${word.chinese}`;
        input.placeholder = "Type the English translation...";
    } else {
        wordPrompt.textContent = `Translate to Chinese: ${word.english}`;
        input.placeholder = "Type the Chinese translation...";
    }

    submit.onclick = () => {
        checkAnswer(word, input.value.trim(), wordPrompt.textContent.includes("English"), index);
    };
}

function checkAnswer(word, answer, isEnglish, index) {
    const feedback = document.getElementById('feedback');
    const correctAnswer = isEnglish ? word.english : word.chinese;
    const button = document.getElementById(`wordButton${index}`);

    if ((isEnglish && answer === word.chinese) || (!isEnglish && answer.toLowerCase() === word.english.toLowerCase())) {
        feedback.textContent = 'Correct!';
        button.classList.add('correct');
        button.classList.remove('incorrect');
    } else {
        feedback.textContent = `Incorrect. The correct translation is "${correctAnswer}".`;
        button.classList.add('incorrect');
        button.classList.remove('correct');
    }

    document.getElementById('inputAnswer').style.display = 'none';
    document.getElementById('submitAnswer').style.display = 'none';
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    } else {
        alert("Sorry, your browser does not support speech synthesis.");
    }
}

window.onload = initWords;