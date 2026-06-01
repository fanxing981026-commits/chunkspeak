const chunks = [
  {
    id: "personally",
    category: "表达观点",
    phrase: "Personally, I feel that...",
    meaning: "就我个人而言，我觉得...",
    scene: "适合表达个人看法，比直接说 I think 更自然，也更像聊天中的真实表达。",
    tone: "语气：真诚、轻松，适合朋友聊天、课堂讨论、面试回答。",
    tip: "用它接观点，再补一个原因。结构是 Personally, I feel that + 观点 + because + 理由。",
    examples: [
      ["Personally, I feel that walking in the rain is quite relaxing.", "就我个人而言，我觉得在雨中散步很放松。"],
      ["Personally, I feel that social media is both helpful and distracting.", "就我个人而言，我觉得社交媒体既有用又让人分心。"],
      ["Personally, I feel that trying new foods is the best part of traveling.", "就我个人而言，我觉得尝试新食物是旅行最棒的部分。"],
    ],
  },
  {
    id: "if-you-ask-me",
    category: "表达观点",
    phrase: "If you ask me...",
    meaning: "如果你问我的话...",
    scene: "别人问你怎么看时，用它开头会很口语，像是顺着对话自然接话。",
    tone: "语气：直接但不强硬，适合朋友建议、讨论选择、表达偏好。",
    tip: "后面接一个简单判断，不要写得太正式。",
    examples: [
      ["If you ask me, that cafe is a little overrated.", "如果你问我的话，那家咖啡店有点被高估了。"],
      ["If you ask me, we should leave a bit earlier.", "如果你问我的话，我们应该早点出发。"],
      ["If you ask me, this plan sounds much more realistic.", "如果你问我的话，这个计划听起来现实多了。"],
    ],
  },
  {
    id: "way-i-see-it",
    category: "表达观点",
    phrase: "The way I see it...",
    meaning: "依我看...",
    scene: "用于解释你看待一件事的角度，适合稍微认真一点的讨论。",
    tone: "语气：理性、清楚，适合表达分析和判断。",
    tip: "可以用来替代 In my opinion，让表达更地道。",
    examples: [
      ["The way I see it, practice matters more than talent.", "依我看，练习比天赋更重要。"],
      ["The way I see it, we need more time to test this idea.", "依我看，我们需要更多时间测试这个想法。"],
      ["The way I see it, this is a chance to learn something new.", "依我看，这是一个学习新东西的机会。"],
    ],
  },
  {
    id: "maybe-we-could",
    category: "提出建议",
    phrase: "Maybe we could...",
    meaning: "也许我们可以...",
    scene: "提出建议时更委婉，不会让对方觉得你在命令。",
    tone: "语气：柔和、合作，适合团队讨论、约会安排、朋友沟通。",
    tip: "后面接动词原形，适合提出一个可执行动作。",
    examples: [
      ["Maybe we could try a different approach.", "也许我们可以试试另一种方法。"],
      ["Maybe we could talk about this after lunch.", "也许我们可以午饭后再聊这个。"],
      ["Maybe we could split the work into smaller parts.", "也许我们可以把工作拆成小部分。"],
    ],
  },
  {
    id: "you-might-want-to",
    category: "提出建议",
    phrase: "You might want to...",
    meaning: "你可以考虑...",
    scene: "给建议时很有分寸，比 You should 更不压迫。",
    tone: "语气：体贴、委婉，适合提醒、建议、轻度纠正。",
    tip: "适合指出一个更好的选择，尤其是怕对方尴尬时。",
    examples: [
      ["You might want to bring a jacket. It gets cold at night.", "你可以考虑带件外套，晚上会变冷。"],
      ["You might want to check the address again.", "你可以考虑再确认一下地址。"],
      ["You might want to slow down a little when you speak.", "你可以考虑说话时稍微慢一点。"],
    ],
  },
  {
    id: "one-thing",
    category: "提出建议",
    phrase: "One thing you could try is...",
    meaning: "你可以尝试的一件事是...",
    scene: "当别人卡住、不知道怎么做时，用这个给一个具体建议。",
    tone: "语气：实用、温和，适合教学、咨询、朋友求助。",
    tip: "后面接名词或动名词，给对方一个明确动作。",
    examples: [
      ["One thing you could try is recording yourself speaking.", "你可以尝试的一件事是录下自己说英语。"],
      ["One thing you could try is making the sentence shorter.", "你可以尝试的一件事是把句子变短。"],
      ["One thing you could try is practicing with the same chunk every day.", "你可以尝试的一件事是每天练同一个语块。"],
    ],
  },
  {
    id: "haven-seen",
    category: "社交寒暄",
    phrase: "Haven't seen you around lately.",
    meaning: "最近没怎么见到你啊。",
    scene: "开启近况话题，非常适合熟人、同学、同事之间自然寒暄。",
    tone: "语气：亲切、带一点惊喜，不适合过于正式的场合。",
    tip: "后面可以接 been busy? 或 everything okay? 继续展开。",
    examples: [
      ["Haven't seen you around lately. Been busy?", "最近没怎么见到你啊，很忙吗？"],
      ["Haven't seen you around lately. How have you been?", "最近没怎么见到你啊，你最近怎么样？"],
      ["Haven't seen you around lately. Everything okay?", "最近没怎么见到你啊，一切还好吗？"],
    ],
  },
  {
    id: "been-keeping",
    category: "社交寒暄",
    phrase: "Been keeping busy?",
    meaning: "最近忙吗？",
    scene: "比 Are you busy 更像母语者寒暄，适合轻松开场。",
    tone: "语气：熟络、自然，适合半熟关系和朋友。",
    tip: "回答时可以说 A little, but in a good way.",
    examples: [
      ["Been keeping busy with school lately?", "最近学校的事挺忙吗？"],
      ["Been keeping busy, or finally taking a break?", "最近一直忙，还是终于休息了？"],
      ["Been keeping busy with your new job?", "最近新工作忙吗？"],
    ],
  },
  {
    id: "cant-get-enough",
    category: "社交寒暄",
    phrase: "I can't get enough of...",
    meaning: "我对...永远不嫌多。",
    scene: "表达喜欢某个东西，比 I like it very much 更有感染力。",
    tone: "语气：兴奋、分享，适合美食、音乐、电影、爱好。",
    tip: "后面接名词或动名词，把喜欢说得更鲜活。",
    examples: [
      ["I can't get enough of this song.", "这首歌我怎么听都不够。"],
      ["I can't get enough of spicy noodles lately.", "我最近怎么吃辣面都不够。"],
      ["I can't get enough of watching travel videos.", "我怎么看旅行视频都不够。"],
    ],
  },
  {
    id: "not-really",
    category: "委婉拒绝",
    phrase: "I'm not really in the mood for...",
    meaning: "我现在不太想...",
    scene: "拒绝邀请时保留礼貌，不会显得冷冰冰。",
    tone: "语气：真实、委婉，适合朋友邀约、临时安排。",
    tip: "后面接名词或动名词，再补一句 maybe next time 更自然。",
    examples: [
      ["I'm not really in the mood for partying tonight.", "我今晚不太想参加聚会。"],
      ["I'm not really in the mood for a long conversation right now.", "我现在不太想长聊。"],
      ["I'm not really in the mood for anything heavy.", "我现在不太想聊太沉重的东西。"],
    ],
  },
  {
    id: "doesnt-work",
    category: "委婉拒绝",
    phrase: "That doesn't quite work for me.",
    meaning: "那对我来说不太合适。",
    scene: "拒绝时间、方案、安排时很有礼貌，比 No 更成熟。",
    tone: "语气：克制、清楚，适合工作、约时间、协商。",
    tip: "后面加 Could we...? 提出替代方案。",
    examples: [
      ["That doesn't quite work for me. Could we do Friday instead?", "那对我来说不太合适。我们能改周五吗？"],
      ["That time doesn't quite work for me.", "那个时间对我来说不太合适。"],
      ["That plan doesn't quite work for me, but I'm open to other ideas.", "那个计划对我来说不太合适，但我愿意听听其他想法。"],
    ],
  },
  {
    id: "wish-i-could",
    category: "委婉拒绝",
    phrase: "I wish I could, but...",
    meaning: "我也想，但...",
    scene: "拒绝别人邀请时先表达善意，再说明原因。",
    tone: "语气：遗憾、友好，适合朋友和同事。",
    tip: "原因不用解释太多，保持简洁更自然。",
    examples: [
      ["I wish I could, but I already have plans.", "我也想去，但我已经有安排了。"],
      ["I wish I could, but I'm really tired today.", "我也想，但我今天真的很累。"],
      ["I wish I could join you, but I have to finish something first.", "我也想加入你们，但我得先完成点事。"],
    ],
  },
  {
    id: "what-trying",
    category: "解释说明",
    phrase: "What I'm trying to say is...",
    meaning: "我想说的是...",
    scene: "当你发现自己说得有点乱时，用它把重点拉回来。",
    tone: "语气：澄清、认真，适合讨论、解释误会、表达观点。",
    tip: "后面接真正的重点，适合把复杂想法变简单。",
    examples: [
      ["What I'm trying to say is that we need more practice, not more rules.", "我想说的是，我们需要更多练习，而不是更多规则。"],
      ["What I'm trying to say is that I care about this.", "我想说的是，我在乎这件事。"],
      ["What I'm trying to say is that the idea is good, but the timing is wrong.", "我想说的是，想法很好，但时机不对。"],
    ],
  },
  {
    id: "another-way",
    category: "解释说明",
    phrase: "To put it another way...",
    meaning: "换句话说...",
    scene: "解释一个观点时换一种更清楚的说法。",
    tone: "语气：耐心、清晰，适合教学、讨论、说明原因。",
    tip: "先说复杂观点，再用这个语块给一个更简单版本。",
    examples: [
      ["To put it another way, we need more time.", "换句话说，我们需要更多时间。"],
      ["To put it another way, the risks outweigh the benefits.", "换句话说，风险大于收益。"],
      ["To put it another way, fluency comes from patterns, not single words.", "换句话说，流利来自表达模式，而不是单个单词。"],
    ],
  },
  {
    id: "makes-sense",
    category: "解释说明",
    phrase: "That makes perfect sense.",
    meaning: "这完全说得通。",
    scene: "表示理解对方的解释，也可以让对话更顺滑。",
    tone: "语气：积极、礼貌、中性偏友好。",
    tip: "后面可以接 Now I see why... 展开你的理解。",
    examples: [
      ["That makes perfect sense. Now I see why you chose that option.", "这完全说得通。现在我明白你为什么选那个了。"],
      ["That makes perfect sense. I hadn't thought of it that way before.", "这完全说得通。我之前没这样想过。"],
      ["That makes perfect sense, especially if time is limited.", "这完全说得通，尤其是在时间有限的情况下。"],
    ],
  },
  {
    id: "from-my-point",
    category: "表达观点",
    phrase: "From my point of view...",
    meaning: "从我的角度来看...",
    scene: "适合更正式一点地表达个人视角，课堂、会议、面试都能用。",
    tone: "语气：理性、清楚，比 I think 更稳重。",
    tip: "后面接观点，再补一个原因，会显得表达更完整。",
    examples: [
      ["From my point of view, remote work saves a lot of time.", "从我的角度来看，远程办公节省了很多时间。"],
      ["From my point of view, this solution is easier to explain.", "从我的角度来看，这个方案更容易解释。"],
      ["From my point of view, confidence comes from preparation.", "从我的角度来看，自信来自准备。"],
    ],
  },
  {
    id: "i-tend-to-think",
    category: "表达观点",
    phrase: "I tend to think...",
    meaning: "我倾向于认为...",
    scene: "当你不是百分百确定，但有一个倾向性看法时很自然。",
    tone: "语气：谨慎、柔和，不会显得武断。",
    tip: "适合讨论复杂问题，后面接 that 从句。",
    examples: [
      ["I tend to think that habits matter more than motivation.", "我倾向于认为习惯比动力更重要。"],
      ["I tend to think small steps are easier to stick with.", "我倾向于认为小步骤更容易坚持。"],
      ["I tend to think the first option is safer.", "我倾向于认为第一个选择更稳妥。"],
    ],
  },
  {
    id: "as-far-as-i-can-tell",
    category: "表达观点",
    phrase: "As far as I can tell...",
    meaning: "就我目前所知...",
    scene: "根据你掌握的信息表达判断，避免说得太绝对。",
    tone: "语气：谨慎、客观，适合讨论事实或观察。",
    tip: "后面接你观察到的结论。",
    examples: [
      ["As far as I can tell, the meeting is still on.", "就我目前所知，会议还照常进行。"],
      ["As far as I can tell, she handled it really well.", "就我目前所知，她处理得很好。"],
      ["As far as I can tell, this app is easy to use.", "就我目前所知，这个应用很好用。"],
    ],
  },
  {
    id: "i-would-say",
    category: "表达观点",
    phrase: "I would say...",
    meaning: "我会说...",
    scene: "回答问题时给一个自然、不生硬的判断。",
    tone: "语气：轻松、自然，比直接下结论更圆润。",
    tip: "适合面试、讨论、日常评价。",
    examples: [
      ["I would say the hardest part is getting started.", "我会说最难的部分是开始。"],
      ["I would say this one feels more natural.", "我会说这个听起来更自然。"],
      ["I would say we need another day.", "我会说我们还需要一天。"],
    ],
  },
  {
    id: "to-be-honest",
    category: "表达观点",
    phrase: "To be honest...",
    meaning: "说实话...",
    scene: "表达真实想法，尤其是略带转折或保留意见时。",
    tone: "语气：坦诚、自然，注意不要用得太频繁。",
    tip: "后面接真实感受，可以让表达更像聊天。",
    examples: [
      ["To be honest, I didn't expect it to be this difficult.", "说实话，我没想到它会这么难。"],
      ["To be honest, I prefer staying in tonight.", "说实话，我今晚更想待在家。"],
      ["To be honest, your idea sounds pretty good.", "说实话，你的想法听起来挺不错。"],
    ],
  },
  {
    id: "what-if-we",
    category: "提出建议",
    phrase: "What if we...",
    meaning: "要不我们...",
    scene: "提出一个想法让大家一起考虑，适合头脑风暴。",
    tone: "语气：开放、轻松，像是在邀请讨论。",
    tip: "后面接动词原形，用来提出试探性建议。",
    examples: [
      ["What if we start with the easiest part?", "要不我们从最简单的部分开始？"],
      ["What if we meet online instead?", "要不我们改成线上见？"],
      ["What if we practice five minutes every morning?", "要不我们每天早上练五分钟？"],
    ],
  },
  {
    id: "how-about",
    category: "提出建议",
    phrase: "How about...",
    meaning: "...怎么样？",
    scene: "日常安排、约时间、提选择都很常用。",
    tone: "语气：轻松、随意，适合朋友和同事。",
    tip: "后面接名词或动名词。",
    examples: [
      ["How about grabbing coffee after class?", "下课后喝杯咖啡怎么样？"],
      ["How about trying this sentence again?", "再试一次这个句子怎么样？"],
      ["How about Saturday afternoon?", "周六下午怎么样？"],
    ],
  },
  {
    id: "it-might-help-to",
    category: "提出建议",
    phrase: "It might help to...",
    meaning: "...可能会有帮助。",
    scene: "给建议时非常温和，适合学习指导或安慰对方。",
    tone: "语气：体贴、低压，不像命令。",
    tip: "后面接动词原形，说出一个具体动作。",
    examples: [
      ["It might help to write the sentence down first.", "先把句子写下来可能会有帮助。"],
      ["It might help to slow down a bit.", "稍微慢一点可能会有帮助。"],
      ["It might help to practice with a friend.", "和朋友一起练可能会有帮助。"],
    ],
  },
  {
    id: "why-dont-we",
    category: "提出建议",
    phrase: "Why don't we...",
    meaning: "我们为什么不...",
    scene: "邀请对方一起做某事，比 Let's 稍微更委婉。",
    tone: "语气：积极、合作，适合团队和朋友。",
    tip: "后面接动词原形，适合提出共同计划。",
    examples: [
      ["Why don't we take a short break?", "我们为什么不休息一下？"],
      ["Why don't we review the examples first?", "我们为什么不先复习例句？"],
      ["Why don't we choose three chunks for today?", "我们为什么不今天选三个语块？"],
    ],
  },
  {
    id: "you-could-always",
    category: "提出建议",
    phrase: "You could always...",
    meaning: "你也可以...",
    scene: "给对方一个备选方案，不会显得强迫。",
    tone: "语气：随和、灵活，适合提供选择。",
    tip: "适合在对方犹豫时补一个简单选择。",
    examples: [
      ["You could always ask her directly.", "你也可以直接问她。"],
      ["You could always use a simpler word.", "你也可以用一个更简单的词。"],
      ["You could always come back to it later.", "你也可以晚点再回来看它。"],
    ],
  },
  {
    id: "long-time-no-see",
    category: "社交寒暄",
    phrase: "Long time no see.",
    meaning: "好久不见。",
    scene: "很经典的熟人重逢开场白，简单但自然。",
    tone: "语气：轻松、亲切，适合熟人。",
    tip: "后面接 How have you been? 更完整。",
    examples: [
      ["Long time no see. How have you been?", "好久不见。你最近怎么样？"],
      ["Long time no see. You look great!", "好久不见。你看起来状态很好！"],
      ["Long time no see. What have you been up to?", "好久不见。你最近都在忙什么？"],
    ],
  },
  {
    id: "what-have-you-been-up-to",
    category: "社交寒暄",
    phrase: "What have you been up to?",
    meaning: "你最近在忙什么？",
    scene: "比 What are you doing 更适合问近况。",
    tone: "语气：自然、关心，适合朋友和熟人。",
    tip: "回答时可以说 I've been working on... 或 Not much, just...",
    examples: [
      ["What have you been up to lately?", "你最近在忙什么？"],
      ["What have you been up to these days?", "你这阵子都在忙什么？"],
      ["What have you been up to since graduation?", "毕业之后你都在忙什么？"],
    ],
  },
  {
    id: "how-is-it-going",
    category: "社交寒暄",
    phrase: "How's it going?",
    meaning: "最近怎么样？",
    scene: "非常常用的日常问候，比 How are you 更随意。",
    tone: "语气：轻松、口语，适合日常开场。",
    tip: "可以回答 Pretty good 或 Not bad。",
    examples: [
      ["Hey, how's it going?", "嘿，最近怎么样？"],
      ["How's it going with your new project?", "你的新项目进展怎么样？"],
      ["How's it going so far?", "到目前为止怎么样？"],
    ],
  },
  {
    id: "good-to-see-you",
    category: "社交寒暄",
    phrase: "Good to see you.",
    meaning: "见到你真好。",
    scene: "见面时自然表达开心，简单但很有温度。",
    tone: "语气：友好、真诚，适合熟人和同事。",
    tip: "后面可以接 It's been a while.",
    examples: [
      ["Good to see you. It's been a while.", "见到你真好。好久不见了。"],
      ["Good to see you again.", "很高兴再次见到你。"],
      ["Good to see you here.", "在这里见到你真好。"],
    ],
  },
  {
    id: "that-sounds-fun",
    category: "社交寒暄",
    phrase: "That sounds fun.",
    meaning: "听起来挺有意思。",
    scene: "回应对方分享时很好用，让对话继续下去。",
    tone: "语气：积极、轻松，适合聊天回应。",
    tip: "后面可以接 Tell me more.",
    examples: [
      ["That sounds fun. Who did you go with?", "听起来挺有意思。你和谁一起去的？"],
      ["That sounds fun. I should try it sometime.", "听起来挺有意思。我哪天也该试试。"],
      ["That sounds fun. Tell me more.", "听起来挺有意思。多跟我讲讲。"],
    ],
  },
  {
    id: "i-am-afraid",
    category: "委婉拒绝",
    phrase: "I'm afraid...",
    meaning: "恐怕...",
    scene: "正式或礼貌地表达坏消息、拒绝或限制。",
    tone: "语气：礼貌、克制，适合工作和陌生人。",
    tip: "后面接完整句子，说明不能做的原因。",
    examples: [
      ["I'm afraid I can't make it tonight.", "恐怕我今晚去不了。"],
      ["I'm afraid that's not possible right now.", "恐怕现在不太可能。"],
      ["I'm afraid we need to reschedule.", "恐怕我们需要改时间。"],
    ],
  },
  {
    id: "maybe-another-time",
    category: "委婉拒绝",
    phrase: "Maybe another time.",
    meaning: "下次吧。",
    scene: "拒绝邀请时简短自然，适合轻松场合。",
    tone: "语气：友好、轻松，但不解释太多。",
    tip: "前面加 Thanks for inviting me 更礼貌。",
    examples: [
      ["Thanks for inviting me. Maybe another time.", "谢谢邀请我。下次吧。"],
      ["I can't tonight, but maybe another time.", "我今晚不行，但下次吧。"],
      ["Maybe another time. I have a lot to finish today.", "下次吧。我今天还有很多事要做。"],
    ],
  },
  {
    id: "i-would-rather-not",
    category: "委婉拒绝",
    phrase: "I'd rather not...",
    meaning: "我宁愿不...",
    scene: "表达自己不想做某事，比 I don't want to 更委婉。",
    tone: "语气：清楚、有边界，但仍然礼貌。",
    tip: "后面接动词原形，必要时补一句原因。",
    examples: [
      ["I'd rather not talk about it right now.", "我现在不太想聊这个。"],
      ["I'd rather not go out tonight.", "我今晚不太想出去。"],
      ["I'd rather not make a decision too quickly.", "我不太想太快做决定。"],
    ],
  },
  {
    id: "i-dont-think-i-can",
    category: "委婉拒绝",
    phrase: "I don't think I can...",
    meaning: "我觉得我可能不能...",
    scene: "拒绝任务或邀请时，比 I can't 更柔和。",
    tone: "语气：委婉、诚实，适合朋友和工作。",
    tip: "可以后接 today / this week / right now 说明限制。",
    examples: [
      ["I don't think I can finish it today.", "我觉得我今天可能完成不了。"],
      ["I don't think I can join the call.", "我觉得我可能参加不了通话。"],
      ["I don't think I can help this time.", "这次我可能帮不上忙。"],
    ],
  },
  {
    id: "that-might-be-difficult",
    category: "委婉拒绝",
    phrase: "That might be difficult.",
    meaning: "那可能有点难。",
    scene: "不直接说不，但表达事情不太可行。",
    tone: "语气：缓和、保留，适合协商。",
    tip: "后面可以接 because 或 suggest another option。",
    examples: [
      ["That might be difficult because I have class then.", "那可能有点难，因为我那时候有课。"],
      ["That might be difficult on such short notice.", "这么临时可能有点难。"],
      ["That might be difficult, but I can try.", "那可能有点难，但我可以试试。"],
    ],
  },
  {
    id: "what-i-mean-is",
    category: "解释说明",
    phrase: "What I mean is...",
    meaning: "我的意思是...",
    scene: "发现对方可能没听懂时，用来重新解释。",
    tone: "语气：澄清、耐心，适合避免误会。",
    tip: "后面接更简单、更直接的解释。",
    examples: [
      ["What I mean is, we should focus on speaking first.", "我的意思是，我们应该先专注于开口说。"],
      ["What I mean is, it's not your fault.", "我的意思是，这不是你的错。"],
      ["What I mean is, the idea is good but needs more detail.", "我的意思是，想法不错，但需要更多细节。"],
    ],
  },
  {
    id: "in-other-words",
    category: "解释说明",
    phrase: "In other words...",
    meaning: "换句话说...",
    scene: "把复杂观点换成更容易理解的说法。",
    tone: "语气：清楚、解释型，适合学习和讨论。",
    tip: "适合做总结或二次解释。",
    examples: [
      ["In other words, we need a simpler plan.", "换句话说，我们需要一个更简单的计划。"],
      ["In other words, you're saying practice matters most.", "换句话说，你是在说练习最重要。"],
      ["In other words, the problem is timing.", "换句话说，问题在于时机。"],
    ],
  },
  {
    id: "the-point-is",
    category: "解释说明",
    phrase: "The point is...",
    meaning: "重点是...",
    scene: "把话题拉回核心重点时使用。",
    tone: "语气：直接、清楚，注意不要太强硬。",
    tip: "后面接真正想强调的内容。",
    examples: [
      ["The point is, you don't need perfect grammar to start speaking.", "重点是，你不需要语法完美才开始说。"],
      ["The point is, we learned something from it.", "重点是，我们从中学到了东西。"],
      ["The point is, this method is easier to repeat.", "重点是，这个方法更容易重复。"],
    ],
  },
  {
    id: "let-me-put-it-this-way",
    category: "解释说明",
    phrase: "Let me put it this way...",
    meaning: "我这么说吧...",
    scene: "准备换个角度解释时非常自然。",
    tone: "语气：耐心、带引导感，适合教学或说服。",
    tip: "后面可以接一个类比或更口语的解释。",
    examples: [
      ["Let me put it this way: chunks are shortcuts for speaking.", "我这么说吧：语块就是开口表达的捷径。"],
      ["Let me put it this way: you don't need to invent every sentence.", "我这么说吧：你不需要每句话都临时造。"],
      ["Let me put it this way: small habits beat big plans.", "我这么说吧：小习惯胜过大计划。"],
    ],
  },
  {
    id: "that-being-said",
    category: "解释说明",
    phrase: "That being said...",
    meaning: "话虽如此...",
    scene: "承认前面内容后，提出转折或补充。",
    tone: "语气：平衡、成熟，适合表达复杂观点。",
    tip: "前一句先认可，后一句用它转折。",
    examples: [
      ["That being said, we still need more practice.", "话虽如此，我们仍然需要更多练习。"],
      ["That being said, I understand why you're worried.", "话虽如此，我理解你为什么担心。"],
      ["That being said, the result is still pretty good.", "话虽如此，结果还是挺不错的。"],
    ],
  },
  {
    id: "i-get-what-you-mean",
    category: "解释说明",
    phrase: "I get what you mean.",
    meaning: "我明白你的意思。",
    scene: "回应对方解释时使用，表示你跟上了对方的思路。",
    tone: "语气：理解、友好，适合日常聊天和讨论。",
    tip: "后面可以接 but... 轻柔转折。",
    examples: [
      ["I get what you mean. It does sound complicated.", "我明白你的意思。它确实听起来有点复杂。"],
      ["I get what you mean, but I see it a little differently.", "我明白你的意思，但我的看法有点不一样。"],
      ["I get what you mean now.", "我现在明白你的意思了。"],
    ],
  },
  {
    id: "just-to-be-clear",
    category: "解释说明",
    phrase: "Just to be clear...",
    meaning: "我确认一下...",
    scene: "确认信息、避免误会时很好用。",
    tone: "语气：谨慎、清楚，适合工作和学习场景。",
    tip: "后面接你理解到的内容。",
    examples: [
      ["Just to be clear, are we meeting at three?", "我确认一下，我们是三点见吗？"],
      ["Just to be clear, you want the shorter version, right?", "我确认一下，你想要短一点的版本，对吗？"],
      ["Just to be clear, this is only a draft.", "我确认一下，这只是草稿。"],
    ],
  },
  {
    id: "as-i-was-saying",
    category: "解释说明",
    phrase: "As I was saying...",
    meaning: "正如我刚才说的...",
    scene: "被打断后重新接回话题，或继续前面的观点。",
    tone: "语气：自然、衔接型，适合讨论和演讲。",
    tip: "后面接你刚才没说完的内容。",
    examples: [
      ["As I was saying, the main problem is timing.", "正如我刚才说的，主要问题是时机。"],
      ["As I was saying, practice should feel repeatable.", "正如我刚才说的，练习应该是可以重复的。"],
      ["As I was saying, we need a simpler plan.", "正如我刚才说的，我们需要一个更简单的计划。"],
    ],
  },
  {
    id: "i-see-your-point",
    category: "表达观点",
    phrase: "I see your point, but...",
    meaning: "我明白你的观点，但是...",
    scene: "先认可对方，再提出不同看法。",
    tone: "语气：礼貌、理性，适合讨论分歧。",
    tip: "but 后面接你的观点，避免直接否定对方。",
    examples: [
      ["I see your point, but I still think we need more time.", "我明白你的观点，但我还是觉得我们需要更多时间。"],
      ["I see your point, but this option feels safer.", "我明白你的观点，但这个选择感觉更稳妥。"],
      ["I see your point, but I'm not fully convinced.", "我明白你的观点，但我还没有完全被说服。"],
    ],
  },
  {
    id: "i-could-be-wrong",
    category: "表达观点",
    phrase: "I could be wrong, but...",
    meaning: "我可能不对，但...",
    scene: "提出不确定看法时很自然，避免显得武断。",
    tone: "语气：谦虚、谨慎，适合讨论和建议。",
    tip: "后面接自己的观察或判断。",
    examples: [
      ["I could be wrong, but this sounds like a better idea.", "我可能不对，但这听起来像是更好的想法。"],
      ["I could be wrong, but we may need to check it again.", "我可能不对，但我们可能需要再检查一下。"],
      ["I could be wrong, but she didn't seem upset.", "我可能不对，但她看起来并没有不高兴。"],
    ],
  },
  {
    id: "i-am-not-sure",
    category: "表达观点",
    phrase: "I'm not sure if...",
    meaning: "我不确定是否...",
    scene: "表达疑虑或不确定，比直接反对更柔和。",
    tone: "语气：谨慎、委婉，适合提出担心。",
    tip: "后面接一件你不确定的事。",
    examples: [
      ["I'm not sure if this is the best time.", "我不确定这是不是最好的时机。"],
      ["I'm not sure if I explained that clearly.", "我不确定我有没有解释清楚。"],
      ["I'm not sure if we have enough information.", "我不确定我们是否有足够信息。"],
    ],
  },
  {
    id: "would-it-be-possible",
    category: "提出建议",
    phrase: "Would it be possible to...",
    meaning: "是否可以...",
    scene: "非常礼貌地提出请求，适合正式场合。",
    tone: "语气：礼貌、正式，适合邮件、工作、服务场景。",
    tip: "后面接动词原形。",
    examples: [
      ["Would it be possible to move the meeting to Friday?", "是否可以把会议挪到周五？"],
      ["Would it be possible to get more examples?", "是否可以多给几个例子？"],
      ["Would it be possible to try again later?", "是否可以晚点再试？"],
    ],
  },
  {
    id: "could-you-help-me",
    category: "提出建议",
    phrase: "Could you help me...",
    meaning: "你能帮我...吗？",
    scene: "礼貌请求别人帮忙，日常和工作都常用。",
    tone: "语气：礼貌、直接，不会太生硬。",
    tip: "后面接动词原形或 with + 名词。",
    examples: [
      ["Could you help me check this sentence?", "你能帮我检查这个句子吗？"],
      ["Could you help me understand this part?", "你能帮我理解这一部分吗？"],
      ["Could you help me with my pronunciation?", "你能帮我练发音吗？"],
    ],
  },
  {
    id: "do-you-mind-if",
    category: "提出建议",
    phrase: "Do you mind if I...",
    meaning: "你介意我...吗？",
    scene: "询问许可时非常实用。",
    tone: "语气：礼貌、尊重，适合各种场景。",
    tip: "后面接动词原形。",
    examples: [
      ["Do you mind if I ask a quick question?", "你介意我问个小问题吗？"],
      ["Do you mind if I sit here?", "你介意我坐这里吗？"],
      ["Do you mind if I record this?", "你介意我录下来吗？"],
    ],
  },
  {
    id: "i-am-glad",
    category: "社交寒暄",
    phrase: "I'm glad to hear that.",
    meaning: "听到这个我很高兴。",
    scene: "回应好消息时使用，让对话更有温度。",
    tone: "语气：开心、真诚，适合朋友和同事。",
    tip: "后面可以接 That must feel great.",
    examples: [
      ["I'm glad to hear that. You worked really hard.", "听到这个我很高兴。你真的很努力。"],
      ["I'm glad to hear that everything went well.", "听到一切顺利我很高兴。"],
      ["I'm glad to hear that you're feeling better.", "听到你感觉好些了我很高兴。"],
    ],
  },
  {
    id: "that-must-be",
    category: "社交寒暄",
    phrase: "That must be...",
    meaning: "那一定很...",
    scene: "回应对方经历或感受时很自然。",
    tone: "语气：共情、理解，适合聊天回应。",
    tip: "后面接形容词，如 exciting, stressful, frustrating。",
    examples: [
      ["That must be really exciting.", "那一定很令人兴奋。"],
      ["That must be stressful for you.", "那对你来说一定很有压力。"],
      ["That must be a big relief.", "那一定让你松了一大口气。"],
    ],
  },
  {
    id: "i-know-the-feeling",
    category: "社交寒暄",
    phrase: "I know the feeling.",
    meaning: "我懂那种感觉。",
    scene: "对方表达情绪时，用来表示共情。",
    tone: "语气：理解、亲近，适合朋友聊天。",
    tip: "后面可以分享一个类似经历。",
    examples: [
      ["I know the feeling. It can be really frustrating.", "我懂那种感觉。那真的会让人很沮丧。"],
      ["I know the feeling. Starting is always the hardest part.", "我懂那种感觉。开始总是最难的。"],
      ["I know the feeling. I've been there too.", "我懂那种感觉。我也经历过。"],
    ],
  },
  {
    id: "i-am-going-to-pass",
    category: "委婉拒绝",
    phrase: "I'm going to pass.",
    meaning: "这次我就不参加了。",
    scene: "轻松拒绝邀请或机会。",
    tone: "语气：自然、直接但不冒犯。",
    tip: "后面加 Thanks though 更礼貌。",
    examples: [
      ["I'm going to pass, but thanks for inviting me.", "这次我就不去了，但谢谢你邀请我。"],
      ["I'm going to pass this time.", "这次我就不参加了。"],
      ["I'm going to pass, but you guys have fun.", "这次我就不去了，但你们玩得开心。"],
    ],
  },
  {
    id: "i-dont-feel-like",
    category: "委婉拒绝",
    phrase: "I don't feel like...",
    meaning: "我不太想...",
    scene: "表达当下不想做某事，比直接拒绝更自然。",
    tone: "语气：真实、日常，适合熟人。",
    tip: "后面接动名词或名词。",
    examples: [
      ["I don't feel like going out tonight.", "我今晚不太想出去。"],
      ["I don't feel like talking about it right now.", "我现在不太想聊这个。"],
      ["I don't feel like eating anything heavy.", "我不太想吃太油腻的东西。"],
    ],
  },
  {
    id: "i-have-to-sit-this-one-out",
    category: "委婉拒绝",
    phrase: "I'll have to sit this one out.",
    meaning: "这次我得先不参加了。",
    scene: "婉拒活动、游戏、聚会或任务。",
    tone: "语气：友好、有分寸，适合轻松场合。",
    tip: "this one 指这一次活动或安排。",
    examples: [
      ["I'll have to sit this one out. I'm not feeling great.", "这次我得先不参加了。我感觉不太舒服。"],
      ["I'll have to sit this one out, but keep me posted.", "这次我得先不参加了，但有进展告诉我。"],
      ["I'll have to sit this one out because I'm busy tonight.", "这次我得先不参加了，因为我今晚有事。"],
    ],
  },
  {
    id: "as-far-as-i-know",
    category: "表达观点",
    phrase: "As far as I know...",
    meaning: "据我所知...",
    scene: "根据自己掌握的信息表达判断。",
    tone: "语气：谨慎、客观，适合讨论事实。",
    tip: "后面接你知道的信息，不要说得太绝对。",
    examples: [
      ["As far as I know, the class starts at nine.", "据我所知，课九点开始。"],
      ["As far as I know, she hasn't decided yet.", "据我所知，她还没决定。"],
      ["As far as I know, this method works pretty well.", "据我所知，这个方法挺有效。"],
    ],
  },
  {
    id: "i-have-a-feeling",
    category: "表达观点",
    phrase: "I have a feeling that...",
    meaning: "我有种感觉...",
    scene: "表达直觉或预感。",
    tone: "语气：口语、自然，适合聊天。",
    tip: "后面接一个猜测或预感。",
    examples: [
      ["I have a feeling that this will work.", "我有种感觉这会有效。"],
      ["I have a feeling that he's not telling us everything.", "我有种感觉他没有把所有事都告诉我们。"],
      ["I have a feeling that today is going to be busy.", "我有种感觉今天会很忙。"],
    ],
  },
  {
    id: "if-you-think-about-it",
    category: "表达观点",
    phrase: "If you think about it...",
    meaning: "仔细想想的话...",
    scene: "引导对方换个角度看问题。",
    tone: "语气：解释、引导，适合讨论观点。",
    tip: "后面接一个你想强调的观察。",
    examples: [
      ["If you think about it, small habits make a big difference.", "仔细想想，小习惯会带来很大变化。"],
      ["If you think about it, this is actually a good chance.", "仔细想想，这其实是个好机会。"],
      ["If you think about it, we already know what to do.", "仔细想想，我们其实已经知道该怎么做了。"],
    ],
  },
  {
    id: "what-stands-out",
    category: "表达观点",
    phrase: "What stands out to me is...",
    meaning: "让我印象最深的是...",
    scene: "总结观察、评价作品或经历。",
    tone: "语气：清晰、有重点，适合汇报和讨论。",
    tip: "后面接最突出的点。",
    examples: [
      ["What stands out to me is how simple the design is.", "让我印象最深的是这个设计很简单。"],
      ["What stands out to me is your progress.", "让我印象最深的是你的进步。"],
      ["What stands out to me is the way she explains things.", "让我印象最深的是她解释事情的方式。"],
    ],
  },
  {
    id: "i-am-all-for",
    category: "表达观点",
    phrase: "I'm all for...",
    meaning: "我完全支持...",
    scene: "表达支持某个想法或做法。",
    tone: "语气：积极、明确，适合讨论计划。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm all for trying something new.", "我完全支持尝试新东西。"],
      ["I'm all for taking small steps.", "我完全支持一步步来。"],
      ["I'm all for using chunks to practice speaking.", "我完全支持用语块练口语。"],
    ],
  },
  {
    id: "have-you-considered",
    category: "提出建议",
    phrase: "Have you considered...",
    meaning: "你有没有考虑过...",
    scene: "给建议时让对方自己思考。",
    tone: "语气：委婉、启发式，适合咨询和建议。",
    tip: "后面接名词或动名词。",
    examples: [
      ["Have you considered talking to your manager?", "你有没有考虑过和经理聊聊？"],
      ["Have you considered practicing with short sentences first?", "你有没有考虑过先用短句练习？"],
      ["Have you considered taking a different route?", "你有没有考虑过换一条路线？"],
    ],
  },
  {
    id: "it-might-be-worth",
    category: "提出建议",
    phrase: "It might be worth...",
    meaning: "...也许值得一试。",
    scene: "建议尝试某事，但不强迫。",
    tone: "语气：温和、实用，适合工作和学习。",
    tip: "后面接动名词。",
    examples: [
      ["It might be worth checking the examples again.", "也许值得再看看例句。"],
      ["It might be worth asking for feedback.", "也许值得征求一下反馈。"],
      ["It might be worth trying a simpler version first.", "也许值得先试一个更简单的版本。"],
    ],
  },
  {
    id: "a-good-place-to-start",
    category: "提出建议",
    phrase: "A good place to start is...",
    meaning: "一个好的开始是...",
    scene: "帮别人找到第一步。",
    tone: "语气：清楚、鼓励，适合教学和指导。",
    tip: "后面接名词或动名词。",
    examples: [
      ["A good place to start is learning five chunks a day.", "一个好的开始是每天学五个语块。"],
      ["A good place to start is the first example.", "一个好的开始是第一个例句。"],
      ["A good place to start is recording yourself.", "一个好的开始是录下自己说话。"],
    ],
  },
  {
    id: "you-may-find-it-helpful",
    category: "提出建议",
    phrase: "You may find it helpful to...",
    meaning: "你可能会发现...很有帮助。",
    scene: "提出学习建议或工具建议。",
    tone: "语气：礼貌、专业，适合教学。",
    tip: "后面接动词原形。",
    examples: [
      ["You may find it helpful to repeat the sentence out loud.", "你可能会发现大声重复这个句子很有帮助。"],
      ["You may find it helpful to write your own example.", "你可能会发现写自己的例句很有帮助。"],
      ["You may find it helpful to review before bed.", "你可能会发现睡前复习很有帮助。"],
    ],
  },
  {
    id: "if-i-were-you",
    category: "提出建议",
    phrase: "If I were you, I'd...",
    meaning: "如果我是你，我会...",
    scene: "给比较直接但仍然自然的建议。",
    tone: "语气：朋友式建议，适合熟人。",
    tip: "I'd 后面接动词原形。",
    examples: [
      ["If I were you, I'd take a short break.", "如果我是你，我会休息一下。"],
      ["If I were you, I'd keep it simple.", "如果我是你，我会让它简单点。"],
      ["If I were you, I'd practice this sentence first.", "如果我是你，我会先练这个句子。"],
    ],
  },
  {
    id: "how-have-things-been",
    category: "社交寒暄",
    phrase: "How have things been?",
    meaning: "最近一切怎么样？",
    scene: "问近况，比 How are you 更自然一些。",
    tone: "语气：亲切、自然，适合熟人。",
    tip: "适合很久没见的人。",
    examples: [
      ["How have things been since we last talked?", "上次聊完之后最近怎么样？"],
      ["How have things been at work?", "工作最近怎么样？"],
      ["How have things been with your English practice?", "你的英语练习最近怎么样？"],
    ],
  },
  {
    id: "what-brings-you-here",
    category: "社交寒暄",
    phrase: "What brings you here?",
    meaning: "你怎么会来这里？",
    scene: "在活动、聚会或地点遇到人时开启话题。",
    tone: "语气：好奇、友好。",
    tip: "不是质问，是自然寒暄。",
    examples: [
      ["What brings you here today?", "你今天怎么会来这里？"],
      ["What brings you to this event?", "你怎么会来这个活动？"],
      ["What brings you to Kuala Lumpur?", "你怎么会来吉隆坡？"],
    ],
  },
  {
    id: "that-reminds-me",
    category: "社交寒暄",
    phrase: "That reminds me...",
    meaning: "这让我想起来...",
    scene: "接话、转入相关话题。",
    tone: "语气：自然、衔接型，适合聊天。",
    tip: "后面接想起的事情。",
    examples: [
      ["That reminds me, I need to send you the link.", "这让我想起来，我得把链接发给你。"],
      ["That reminds me of something funny.", "这让我想起一件有趣的事。"],
      ["That reminds me, have you finished the assignment?", "这让我想起来，你作业写完了吗？"],
    ],
  },
  {
    id: "you-made-my-day",
    category: "社交寒暄",
    phrase: "You made my day.",
    meaning: "你让我今天很开心。",
    scene: "回应夸奖、帮助或好消息。",
    tone: "语气：温暖、感谢，适合朋友和同事。",
    tip: "可以直接整句使用。",
    examples: [
      ["Thanks for saying that. You made my day.", "谢谢你这么说。你让我今天很开心。"],
      ["This message made my day.", "这条消息让我今天很开心。"],
      ["You made my day with that compliment.", "你的夸奖让我今天很开心。"],
    ],
  },
  {
    id: "i-appreciate-it",
    category: "社交寒暄",
    phrase: "I really appreciate it.",
    meaning: "我真的很感谢。",
    scene: "表达感谢，比 thanks 更正式真诚。",
    tone: "语气：真诚、礼貌。",
    tip: "前面或后面可说明感谢的事。",
    examples: [
      ["Thanks for your help. I really appreciate it.", "谢谢你的帮助。我真的很感谢。"],
      ["I really appreciate your patience.", "我真的很感谢你的耐心。"],
      ["I really appreciate you taking the time.", "我真的很感谢你抽时间。"],
    ],
  },
  {
    id: "i-am-not-comfortable",
    category: "委婉拒绝",
    phrase: "I'm not comfortable with...",
    meaning: "我对...不太舒服/不太接受。",
    scene: "表达边界，比直接拒绝更清楚。",
    tone: "语气：坚定、礼貌。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm not comfortable with sharing that information.", "我不太愿意分享那个信息。"],
      ["I'm not comfortable with this arrangement.", "我不太接受这个安排。"],
      ["I'm not comfortable with making a decision right now.", "我现在不太想做决定。"],
    ],
  },
  {
    id: "i-need-to-think",
    category: "委婉拒绝",
    phrase: "I need to think about it.",
    meaning: "我需要考虑一下。",
    scene: "不马上答应，也不直接拒绝。",
    tone: "语气：中性、礼貌。",
    tip: "适合需要时间时使用。",
    examples: [
      ["I need to think about it before I decide.", "我需要考虑一下再决定。"],
      ["I need to think about it. Can I get back to you tomorrow?", "我需要考虑一下。我明天回复你可以吗？"],
      ["I need to think about it a bit more.", "我还需要再考虑一下。"],
    ],
  },
  {
    id: "not-this-time",
    category: "委婉拒绝",
    phrase: "Not this time.",
    meaning: "这次不了。",
    scene: "简短拒绝邀请或提议。",
    tone: "语气：轻松、明确。",
    tip: "后面加 maybe next time 更友好。",
    examples: [
      ["Not this time, but maybe next time.", "这次不了，但下次也许可以。"],
      ["Not this time. I have too much to do.", "这次不了。我有太多事要做。"],
      ["Not this time, thanks.", "这次不了，谢谢。"],
    ],
  },
  {
    id: "i-dont-want-to-commit",
    category: "委婉拒绝",
    phrase: "I don't want to commit to...",
    meaning: "我不想承诺...",
    scene: "不想过早答应某个安排。",
    tone: "语气：谨慎、诚实。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I don't want to commit to anything yet.", "我还不想承诺任何事。"],
      ["I don't want to commit to a date right now.", "我现在不想定日期。"],
      ["I don't want to commit to this plan before I know more.", "在了解更多之前，我不想承诺这个计划。"],
    ],
  },
  {
    id: "does-that-make-sense",
    category: "解释说明",
    phrase: "Does that make sense?",
    meaning: "这样说得通吗？",
    scene: "解释后确认对方是否理解。",
    tone: "语气：友好、确认。",
    tip: "适合教学、汇报、讨论。",
    examples: [
      ["Does that make sense so far?", "到目前为止这样说得通吗？"],
      ["I hope that makes sense.", "我希望这样说得通。"],
      ["Does that make sense, or should I explain it another way?", "这样说得通吗，还是我换种方式解释？"],
    ],
  },
  {
    id: "what-i-like-about",
    category: "解释说明",
    phrase: "What I like about... is...",
    meaning: "我喜欢...的一点是...",
    scene: "说明喜欢某事的原因。",
    tone: "语气：具体、自然。",
    tip: "第一个空放对象，第二个空放原因。",
    examples: [
      ["What I like about this app is how simple it feels.", "我喜欢这个应用的一点是它用起来很简单。"],
      ["What I like about chunks is that they are easy to reuse.", "我喜欢语块的一点是它们容易复用。"],
      ["What I like about this sentence is the tone.", "我喜欢这个句子的一点是它的语气。"],
    ],
  },
  {
    id: "the-reason-is",
    category: "解释说明",
    phrase: "The reason is...",
    meaning: "原因是...",
    scene: "直接解释原因。",
    tone: "语气：清楚、直接。",
    tip: "后面接原因，不要太长。",
    examples: [
      ["The reason is, I need more time.", "原因是，我需要更多时间。"],
      ["The reason is, this version is easier to understand.", "原因是，这个版本更容易理解。"],
      ["The reason is, I want to practice every day.", "原因是，我想每天练习。"],
    ],
  },
  {
    id: "what-happened-was",
    category: "解释说明",
    phrase: "What happened was...",
    meaning: "事情是这样的...",
    scene: "解释发生了什么。",
    tone: "语气：叙述、解释。",
    tip: "后面按顺序说发生的事。",
    examples: [
      ["What happened was, I missed the first message.", "事情是这样的，我错过了第一条消息。"],
      ["What happened was, we changed the plan at the last minute.", "事情是这样的，我们最后一刻改了计划。"],
      ["What happened was, I misunderstood the instructions.", "事情是这样的，我误解了说明。"],
    ],
  },
  {
    id: "the-thing-is",
    category: "解释说明",
    phrase: "The thing is...",
    meaning: "问题是/情况是...",
    scene: "解释困难、限制或真正原因。",
    tone: "语气：口语、铺垫。",
    tip: "后面说关键限制。",
    examples: [
      ["The thing is, I don't have enough time.", "问题是，我没有足够时间。"],
      ["The thing is, I'm still not sure.", "问题是，我还是不确定。"],
      ["The thing is, we need a simpler way to practice.", "问题是，我们需要一个更简单的练习方式。"],
    ],
  },
  {
    id: "i-was-wondering-if",
    category: "提出建议",
    phrase: "I was wondering if...",
    meaning: "我想问一下是否...",
    scene: "礼貌提出请求或询问可能性。",
    tone: "语气：非常委婉、正式，适合邮件和工作沟通。",
    tip: "后面接完整句子，如 you could... / we could...",
    examples: [
      ["I was wondering if you could take a look at this.", "我想问一下你能不能看一下这个。"],
      ["I was wondering if we could meet tomorrow.", "我想问一下我们明天能不能见面。"],
      ["I was wondering if there is another option.", "我想问一下是否还有另一个选择。"],
    ],
  },
  {
    id: "would-you-be-able-to",
    category: "提出建议",
    phrase: "Would you be able to...",
    meaning: "你能不能...",
    scene: "礼貌请求别人帮忙。",
    tone: "语气：礼貌、专业，比 Can you 更柔和。",
    tip: "后面接动词原形。",
    examples: [
      ["Would you be able to send me the file?", "你能不能把文件发给我？"],
      ["Would you be able to explain that again?", "你能不能再解释一遍？"],
      ["Would you be able to join the meeting later?", "你晚点能不能参加会议？"],
    ],
  },
  {
    id: "could-we-possibly",
    category: "提出建议",
    phrase: "Could we possibly...",
    meaning: "我们是否可以...",
    scene: "非常委婉地提出安排调整。",
    tone: "语气：礼貌、协商，适合工作沟通。",
    tip: "后面接动词原形。",
    examples: [
      ["Could we possibly move this to next week?", "我们是否可以把这个挪到下周？"],
      ["Could we possibly start a little earlier?", "我们是否可以稍微早点开始？"],
      ["Could we possibly keep this simple?", "我们是否可以让这个简单一点？"],
    ],
  },
  {
    id: "lets-not-rush",
    category: "提出建议",
    phrase: "Let's not rush into...",
    meaning: "我们先别急着...",
    scene: "提醒对方不要仓促决定。",
    tone: "语气：稳重、合作，适合团队讨论。",
    tip: "后面接名词或动名词。",
    examples: [
      ["Let's not rush into a decision.", "我们先别急着做决定。"],
      ["Let's not rush into changing everything.", "我们先别急着把所有东西都改掉。"],
      ["Let's not rush into buying it.", "我们先别急着买它。"],
    ],
  },
  {
    id: "the-best-thing-to-do",
    category: "提出建议",
    phrase: "The best thing to do is...",
    meaning: "最好的做法是...",
    scene: "给出明确、实用的建议。",
    tone: "语气：清晰、指导型。",
    tip: "后面接动词原形或动名词。",
    examples: [
      ["The best thing to do is start small.", "最好的做法是从小处开始。"],
      ["The best thing to do is ask for clarification.", "最好的做法是请求澄清。"],
      ["The best thing to do is practice one chunk at a time.", "最好的做法是一次练一个语块。"],
    ],
  },
  {
    id: "i-am-happy-to",
    category: "社交寒暄",
    phrase: "I'm happy to...",
    meaning: "我很乐意...",
    scene: "表达愿意帮忙或配合。",
    tone: "语气：友好、积极，适合工作和日常。",
    tip: "后面接动词原形。",
    examples: [
      ["I'm happy to help.", "我很乐意帮忙。"],
      ["I'm happy to take a look.", "我很乐意看一下。"],
      ["I'm happy to explain it again.", "我很乐意再解释一遍。"],
    ],
  },
  {
    id: "no-worries",
    category: "社交寒暄",
    phrase: "No worries.",
    meaning: "没关系/不用担心。",
    scene: "回应道歉或感谢，非常日常。",
    tone: "语气：轻松、友好。",
    tip: "可单独使用，也可后接 It's all good.",
    examples: [
      ["No worries. It happens.", "没关系。这种事会发生。"],
      ["No worries. Take your time.", "不用担心。慢慢来。"],
      ["No worries. I'm glad you told me.", "没关系。很高兴你告诉我。"],
    ],
  },
  {
    id: "that-means-a-lot",
    category: "社交寒暄",
    phrase: "That means a lot.",
    meaning: "这对我意义很大。",
    scene: "回应夸奖、支持或感谢。",
    tone: "语气：真诚、感动。",
    tip: "适合表达被支持的感觉。",
    examples: [
      ["Thank you. That means a lot.", "谢谢你。这对我意义很大。"],
      ["Hearing that means a lot.", "听到这句话对我意义很大。"],
      ["Your support means a lot to me.", "你的支持对我意义很大。"],
    ],
  },
  {
    id: "i-hope-you-dont-mind",
    category: "社交寒暄",
    phrase: "I hope you don't mind...",
    meaning: "希望你不介意...",
    scene: "做了或准备做某事时礼貌说明。",
    tone: "语气：礼貌、体贴。",
    tip: "后面接动名词。",
    examples: [
      ["I hope you don't mind me asking.", "希望你不介意我问一下。"],
      ["I hope you don't mind me saying this.", "希望你不介意我这么说。"],
      ["I hope you don't mind if I join you.", "希望你不介意我加入你们。"],
    ],
  },
  {
    id: "keep-me-posted",
    category: "社交寒暄",
    phrase: "Keep me posted.",
    meaning: "有进展告诉我。",
    scene: "让对方继续更新消息。",
    tone: "语气：自然、关心，适合工作和朋友。",
    tip: "可单独使用。",
    examples: [
      ["Keep me posted on how it goes.", "进展怎么样告诉我。"],
      ["Keep me posted if anything changes.", "如果有变化告诉我。"],
      ["Keep me posted. I'm curious to know what happens.", "有进展告诉我。我很好奇会发生什么。"],
    ],
  },
  {
    id: "i-am-not-in-a-position-to",
    category: "委婉拒绝",
    phrase: "I'm not in a position to...",
    meaning: "我现在不方便/没有条件...",
    scene: "正式地表达自己不能做某事。",
    tone: "语气：正式、谨慎，适合工作场景。",
    tip: "后面接动词原形。",
    examples: [
      ["I'm not in a position to make that decision.", "我现在没有权限做那个决定。"],
      ["I'm not in a position to comment on that.", "我现在不方便评论那件事。"],
      ["I'm not in a position to promise anything yet.", "我现在还不能承诺任何事。"],
    ],
  },
  {
    id: "i-have-to-draw-the-line",
    category: "委婉拒绝",
    phrase: "I have to draw the line at...",
    meaning: "我必须在...这件事上划清界限。",
    scene: "明确表达边界。",
    tone: "语气：坚定、有边界。",
    tip: "后面接不能接受的事情。",
    examples: [
      ["I have to draw the line at working late every night.", "我必须在每天加班到很晚这件事上划清界限。"],
      ["I have to draw the line at sharing personal information.", "我必须在分享个人信息这件事上划清界限。"],
      ["I have to draw the line at being spoken to like that.", "我不能接受别人那样跟我说话。"],
    ],
  },
  {
    id: "i-would-prefer-not-to",
    category: "委婉拒绝",
    phrase: "I'd prefer not to...",
    meaning: "我更希望不要...",
    scene: "礼貌表达不愿意做某事。",
    tone: "语气：克制、礼貌。",
    tip: "比 I don't want to 更柔和。",
    examples: [
      ["I'd prefer not to talk about it.", "我更希望不要聊这个。"],
      ["I'd prefer not to decide right now.", "我更希望现在不要决定。"],
      ["I'd prefer not to make this public.", "我更希望不要公开这件事。"],
    ],
  },
  {
    id: "i-cant-commit-right-now",
    category: "委婉拒绝",
    phrase: "I can't commit right now.",
    meaning: "我现在还不能答应。",
    scene: "不想立刻承诺时间、计划或关系。",
    tone: "语气：诚实、直接但礼貌。",
    tip: "可后接 Let me think about it.",
    examples: [
      ["I can't commit right now, but I'll let you know.", "我现在还不能答应，但我会告诉你。"],
      ["I can't commit right now. I need to check my schedule.", "我现在还不能答应。我需要看一下日程。"],
      ["I can't commit right now, but I'm interested.", "我现在还不能答应，但我有兴趣。"],
    ],
  },
  {
    id: "let-me-check",
    category: "解释说明",
    phrase: "Let me check...",
    meaning: "我查一下/确认一下...",
    scene: "需要确认信息时使用。",
    tone: "语气：自然、负责。",
    tip: "后面接 what/if 或直接说明要查的内容。",
    examples: [
      ["Let me check my calendar.", "我查一下我的日历。"],
      ["Let me check if that's possible.", "我确认一下那是否可行。"],
      ["Let me check the details first.", "我先确认一下细节。"],
    ],
  },
  {
    id: "here-is-the-thing",
    category: "解释说明",
    phrase: "Here's the thing...",
    meaning: "事情是这样的...",
    scene: "准备解释核心问题或背景。",
    tone: "语气：口语、铺垫。",
    tip: "后面接真正的情况。",
    examples: [
      ["Here's the thing: we don't have much time.", "事情是这样的：我们时间不多。"],
      ["Here's the thing: I actually agree with you.", "事情是这样的：我其实同意你。"],
      ["Here's the thing: this needs to be simpler.", "事情是这样的：这个需要更简单。"],
    ],
  },
  {
    id: "for-example",
    category: "解释说明",
    phrase: "For example...",
    meaning: "比如...",
    scene: "举例说明。",
    tone: "语气：清楚、解释型。",
    tip: "后面接一个具体例子。",
    examples: [
      ["For example, you can start with five chunks a day.", "比如，你可以从每天五个语块开始。"],
      ["For example, this sentence works in a meeting.", "比如，这个句子在会议里能用。"],
      ["For example, you could say it like this.", "比如，你可以这样说。"],
    ],
  },
  {
    id: "in-that-case",
    category: "解释说明",
    phrase: "In that case...",
    meaning: "既然这样...",
    scene: "根据新情况调整回应。",
    tone: "语气：自然、承接。",
    tip: "后面接新的决定或建议。",
    examples: [
      ["In that case, let's do it tomorrow.", "既然这样，我们明天做吧。"],
      ["In that case, we should keep it simple.", "既然这样，我们应该保持简单。"],
      ["In that case, I'll wait for your update.", "既然这样，我等你的更新。"],
    ],
  },
  {
    id: "so-what-you-are-saying",
    category: "解释说明",
    phrase: "So what you're saying is...",
    meaning: "所以你的意思是...",
    scene: "复述确认对方意思。",
    tone: "语气：确认、理解，适合讨论。",
    tip: "后面接你理解到的内容。",
    examples: [
      ["So what you're saying is, we need more examples.", "所以你的意思是，我们需要更多例子。"],
      ["So what you're saying is, the timing isn't right.", "所以你的意思是，时机不对。"],
      ["So what you're saying is, we should practice in chunks.", "所以你的意思是，我们应该按语块练习。"],
    ],
  },
  {
    id: "i-am-looking-forward-to",
    category: "社交寒暄",
    phrase: "I'm looking forward to...",
    meaning: "我很期待...",
    scene: "表达期待某事。",
    tone: "语气：积极、礼貌。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm looking forward to seeing you.", "我很期待见到你。"],
      ["I'm looking forward to the trip.", "我很期待这次旅行。"],
      ["I'm looking forward to learning more chunks.", "我很期待学习更多语块。"],
    ],
  },
  {
    id: "i-have-been-meaning-to",
    category: "社交寒暄",
    phrase: "I've been meaning to...",
    meaning: "我一直想...",
    scene: "说自己一直打算做某事。",
    tone: "语气：自然、日常。",
    tip: "后面接动词原形。",
    examples: [
      ["I've been meaning to ask you about that.", "我一直想问你那件事。"],
      ["I've been meaning to try this app.", "我一直想试试这个应用。"],
      ["I've been meaning to call you.", "我一直想给你打电话。"],
    ],
  },
  {
    id: "it-was-nice-catching-up",
    category: "社交寒暄",
    phrase: "It was nice catching up.",
    meaning: "聊聊近况很开心。",
    scene: "聊天结束时自然收尾。",
    tone: "语气：友好、温暖。",
    tip: "适合熟人重逢后告别。",
    examples: [
      ["It was nice catching up. Let's talk again soon.", "聊聊近况很开心。我们改天再聊。"],
      ["It was nice catching up with you.", "和你聊近况很开心。"],
      ["It was nice catching up after so long.", "这么久之后聊聊近况很开心。"],
    ],
  },
  {
    id: "that-sounds-like-a-plan",
    category: "社交寒暄",
    phrase: "That sounds like a plan.",
    meaning: "听起来就这么定了。",
    scene: "同意安排或计划。",
    tone: "语气：轻松、赞同。",
    tip: "常用于约时间、确认计划。",
    examples: [
      ["That sounds like a plan. See you then.", "听起来就这么定了。到时候见。"],
      ["That sounds like a plan to me.", "我觉得这样可以。"],
      ["That sounds like a plan. Let's do it.", "听起来就这么定了。我们做吧。"],
    ],
  },
  {
    id: "i-am-having-trouble",
    category: "解释说明",
    phrase: "I'm having trouble...",
    meaning: "我在...方面有困难。",
    scene: "说明自己遇到的问题。",
    tone: "语气：直接、求助型。",
    tip: "后面接动名词。",
    examples: [
      ["I'm having trouble understanding this sentence.", "我理解这个句子有困难。"],
      ["I'm having trouble staying focused.", "我保持专注有困难。"],
      ["I'm having trouble finding the right words.", "我找合适的词有困难。"],
    ],
  },
  {
    id: "i-am-working-on",
    category: "解释说明",
    phrase: "I'm working on...",
    meaning: "我正在努力...",
    scene: "说明自己正在练习或改进某事。",
    tone: "语气：积极、说明型。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm working on my pronunciation.", "我正在练发音。"],
      ["I'm working on speaking more naturally.", "我正在努力说得更自然。"],
      ["I'm working on building a daily habit.", "我正在努力养成每日习惯。"],
    ],
  },
  {
    id: "i-am-trying-to",
    category: "解释说明",
    phrase: "I'm trying to...",
    meaning: "我正在尝试...",
    scene: "表达努力做某事。",
    tone: "语气：自然、日常。",
    tip: "后面接动词原形。",
    examples: [
      ["I'm trying to speak more slowly.", "我正在尝试说慢一点。"],
      ["I'm trying to use more chunks when I speak.", "我正在尝试说话时使用更多语块。"],
      ["I'm trying to make this a habit.", "我正在尝试把这变成习惯。"],
    ],
  },
  {
    id: "it-depends-on",
    category: "表达观点",
    phrase: "It depends on...",
    meaning: "这取决于...",
    scene: "表达答案不固定，要看条件。",
    tone: "语气：客观、灵活。",
    tip: "后面接影响因素。",
    examples: [
      ["It depends on how much time we have.", "这取决于我们有多少时间。"],
      ["It depends on what you want to practice.", "这取决于你想练什么。"],
      ["It depends on the situation.", "这取决于情况。"],
    ],
  },
  {
    id: "i-am-leaning-toward",
    category: "表达观点",
    phrase: "I'm leaning toward...",
    meaning: "我倾向于...",
    scene: "表达暂时偏向某个选择。",
    tone: "语气：谨慎、自然。",
    tip: "后面接选择或动名词。",
    examples: [
      ["I'm leaning toward the second option.", "我倾向于第二个选择。"],
      ["I'm leaning toward staying home tonight.", "我今晚倾向于待在家。"],
      ["I'm leaning toward practicing speaking first.", "我倾向于先练口语。"],
    ],
  },
  {
    id: "i-would-rather",
    category: "表达观点",
    phrase: "I would rather...",
    meaning: "我宁愿...",
    scene: "表达偏好或选择。",
    tone: "语气：清楚、自然。",
    tip: "后面接动词原形。",
    examples: [
      ["I would rather keep it simple.", "我宁愿让它简单一点。"],
      ["I would rather practice for ten minutes every day.", "我宁愿每天练十分钟。"],
      ["I would rather talk about it later.", "我宁愿晚点再聊这个。"],
    ],
  },
  {
    id: "the-way-i-look-at-it",
    category: "表达观点",
    phrase: "The way I look at it...",
    meaning: "我的看法是...",
    scene: "表达自己的观察角度。",
    tone: "语气：理性、口语。",
    tip: "和 The way I see it 类似。",
    examples: [
      ["The way I look at it, consistency matters most.", "我的看法是，坚持最重要。"],
      ["The way I look at it, this is a learning process.", "我的看法是，这是一个学习过程。"],
      ["The way I look at it, we need more examples.", "我的看法是，我们需要更多例子。"],
    ],
  },
  {
    id: "i-am-not-saying-that",
    category: "解释说明",
    phrase: "I'm not saying that...",
    meaning: "我不是说...",
    scene: "避免对方误解你的意思。",
    tone: "语气：澄清、谨慎。",
    tip: "后面接你不想表达的意思。",
    examples: [
      ["I'm not saying that grammar isn't important.", "我不是说语法不重要。"],
      ["I'm not saying that this is easy.", "我不是说这很容易。"],
      ["I'm not saying that you have to memorize everything.", "我不是说你必须把所有东西都背下来。"],
    ],
  },
  {
    id: "all-i-am-saying-is",
    category: "解释说明",
    phrase: "All I'm saying is...",
    meaning: "我只是想说...",
    scene: "把观点收窄，避免听起来过强。",
    tone: "语气：缓和、澄清。",
    tip: "后面接核心观点。",
    examples: [
      ["All I'm saying is that practice helps.", "我只是想说练习有帮助。"],
      ["All I'm saying is that we should try it first.", "我只是想说我们应该先试试。"],
      ["All I'm saying is that chunks make speaking easier.", "我只是想说语块让口语更容易。"],
    ],
  },
  {
    id: "i-see-what-you-mean",
    category: "解释说明",
    phrase: "I see what you mean.",
    meaning: "我明白你的意思。",
    scene: "回应对方观点，表示你听懂了，不急着反驳。",
    tone: "语气：理解、自然，适合讨论和聊天。",
    tip: "后面可以接 but 或 and 补充自己的想法。",
    examples: [
      ["I see what you mean, but I still have one concern.", "我明白你的意思，但我还是有一个担心。"],
      ["I see what you mean. That does make sense.", "我明白你的意思。那确实说得通。"],
      ["I see what you mean now.", "我现在明白你的意思了。"],
    ],
  },
  {
    id: "i-am-with-you-on-that",
    category: "表达观点",
    phrase: "I'm with you on that.",
    meaning: "这一点我同意你。",
    scene: "表达同意时很自然，比 I agree 更有对话感。",
    tone: "语气：支持、轻松，适合朋友和团队讨论。",
    tip: "on that 指对方刚才说的那一点。",
    examples: [
      ["I'm with you on that. We should keep it simple.", "这一点我同意你。我们应该保持简单。"],
      ["I'm with you on that, especially about the timing.", "这一点我同意你，尤其是关于时间安排。"],
      ["I'm totally with you on that.", "这一点我完全同意你。"],
    ],
  },
  {
    id: "i-am-not-convinced",
    category: "表达观点",
    phrase: "I'm not convinced that...",
    meaning: "我还不太相信...",
    scene: "表达保留意见，不直接否定对方。",
    tone: "语气：理性、谨慎，适合讨论分歧。",
    tip: "后面接你还不认可的判断。",
    examples: [
      ["I'm not convinced that this is the best option.", "我还不太相信这是最好的选择。"],
      ["I'm not convinced that we need to change everything.", "我还不太相信我们需要把所有东西都改掉。"],
      ["I'm not convinced that more rules will help.", "我还不太相信更多规则会有帮助。"],
    ],
  },
  {
    id: "i-wouldnt-say-that",
    category: "表达观点",
    phrase: "I wouldn't say that...",
    meaning: "我倒不会说...",
    scene: "温和修正别人的说法。",
    tone: "语气：委婉、保留，适合轻度反对。",
    tip: "后面接你不完全同意的说法。",
    examples: [
      ["I wouldn't say that it's impossible.", "我倒不会说这是不可能的。"],
      ["I wouldn't say that he's wrong.", "我倒不会说他错了。"],
      ["I wouldn't say that grammar is useless.", "我倒不会说语法没用。"],
    ],
  },
  {
    id: "that-is-a-good-point",
    category: "表达观点",
    phrase: "That's a good point.",
    meaning: "这点说得好。",
    scene: "认可对方观点，让讨论更顺畅。",
    tone: "语气：礼貌、积极，适合课堂和会议。",
    tip: "后面可以接 I hadn't thought of that.",
    examples: [
      ["That's a good point. I hadn't thought of that.", "这点说得好。我之前没想到。"],
      ["That's a good point, but we also need to consider cost.", "这点说得好，但我们也要考虑成本。"],
      ["That's a really good point.", "这点真的说得很好。"],
    ],
  },
  {
    id: "i-hadnt-thought-of-that",
    category: "表达观点",
    phrase: "I hadn't thought of that.",
    meaning: "我之前没想到这一点。",
    scene: "承认对方提供了新角度。",
    tone: "语气：开放、真诚，适合讨论。",
    tip: "可以单独使用，也可以接 That's interesting.",
    examples: [
      ["I hadn't thought of that. That's interesting.", "我之前没想到这一点。挺有意思。"],
      ["I hadn't thought of that before.", "我以前没想到这一点。"],
      ["I hadn't thought of that, but it makes sense.", "我之前没想到这一点，但它说得通。"],
    ],
  },
  {
    id: "i-am-curious-about",
    category: "社交寒暄",
    phrase: "I'm curious about...",
    meaning: "我对...很好奇。",
    scene: "打开话题、继续追问对方分享。",
    tone: "语气：好奇、友好，适合聊天和学习。",
    tip: "后面接你想了解的对象。",
    examples: [
      ["I'm curious about how you learned that.", "我很好奇你是怎么学会那个的。"],
      ["I'm curious about your experience.", "我对你的经历很好奇。"],
      ["I'm curious about what happened next.", "我很好奇接下来发生了什么。"],
    ],
  },
  {
    id: "tell-me-more-about",
    category: "社交寒暄",
    phrase: "Tell me more about...",
    meaning: "多跟我讲讲...",
    scene: "让对方继续说，避免聊天断掉。",
    tone: "语气：感兴趣、自然，适合朋友聊天。",
    tip: "后面接对方刚提到的话题。",
    examples: [
      ["Tell me more about your trip.", "多跟我讲讲你的旅行。"],
      ["Tell me more about that idea.", "多跟我讲讲那个想法。"],
      ["Tell me more about how you practice English.", "多跟我讲讲你怎么练英语。"],
    ],
  },
  {
    id: "how-did-it-go",
    category: "社交寒暄",
    phrase: "How did it go?",
    meaning: "结果怎么样？",
    scene: "跟进对方之前说过的事情。",
    tone: "语气：关心、自然，适合熟人。",
    tip: "it 指前面提到的考试、面试、约会、会议等。",
    examples: [
      ["How did it go with your interview?", "你的面试怎么样？"],
      ["How did it go yesterday?", "昨天结果怎么样？"],
      ["How did it go after we talked?", "我们聊完之后结果怎么样？"],
    ],
  },
  {
    id: "that-sounds-rough",
    category: "社交寒暄",
    phrase: "That sounds rough.",
    meaning: "听起来挺不容易的。",
    scene: "回应对方困难经历，表达共情。",
    tone: "语气：理解、关心，适合安慰朋友。",
    tip: "后面可以接 Are you okay?",
    examples: [
      ["That sounds rough. Are you okay?", "听起来挺不容易的。你还好吗？"],
      ["That sounds rough. I hope things get better soon.", "听起来挺不容易的。希望事情很快好起来。"],
      ["That sounds really rough.", "那听起来真的很不容易。"],
    ],
  },
  {
    id: "i-am-sorry-to-hear-that",
    category: "社交寒暄",
    phrase: "I'm sorry to hear that.",
    meaning: "听到这个我很遗憾。",
    scene: "回应坏消息或不顺利的情况。",
    tone: "语气：礼貌、关心，适合朋友和同事。",
    tip: "后面可以接 Is there anything I can do?",
    examples: [
      ["I'm sorry to hear that. Is there anything I can do?", "听到这个我很遗憾。有什么我能做的吗？"],
      ["I'm sorry to hear that you had a hard week.", "听说你这周很难熬，我很遗憾。"],
      ["I'm really sorry to hear that.", "听到这个我真的很遗憾。"],
    ],
  },
  {
    id: "good-for-you",
    category: "社交寒暄",
    phrase: "Good for you.",
    meaning: "真为你高兴。",
    scene: "回应对方的好消息或进步。",
    tone: "语气：鼓励、支持。",
    tip: "注意语气要真诚，否则可能听起来讽刺。",
    examples: [
      ["You finished the course? Good for you!", "你完成课程了？真为你高兴！"],
      ["Good for you. You deserve it.", "真为你高兴。你值得。"],
      ["Good for you for sticking with it.", "你能坚持下来真不错。"],
    ],
  },
  {
    id: "i-am-proud-of-you",
    category: "社交寒暄",
    phrase: "I'm proud of you.",
    meaning: "我为你骄傲。",
    scene: "鼓励别人完成一件不容易的事。",
    tone: "语气：温暖、支持，适合亲近关系。",
    tip: "也可以说 I'm proud of your progress.",
    examples: [
      ["I'm proud of you for not giving up.", "你没有放弃，我为你骄傲。"],
      ["I'm proud of your progress.", "我为你的进步骄傲。"],
      ["I'm really proud of you.", "我真的为你骄傲。"],
    ],
  },
  {
    id: "hang-in-there",
    category: "社交寒暄",
    phrase: "Hang in there.",
    meaning: "坚持住。",
    scene: "安慰正在经历困难的人。",
    tone: "语气：鼓励、简短有力。",
    tip: "可单独使用，适合口语。",
    examples: [
      ["Hang in there. You're doing better than you think.", "坚持住。你比自己想的做得更好。"],
      ["Hang in there. This won't last forever.", "坚持住。这不会永远持续下去。"],
      ["Just hang in there a little longer.", "再坚持一下。"],
    ],
  },
  {
    id: "can-i-take-a-rain-check",
    category: "委婉拒绝",
    phrase: "Can I take a rain check?",
    meaning: "可以改天吗？",
    scene: "拒绝当前邀请，但表示以后愿意。",
    tone: "语气：友好、地道，适合朋友邀约。",
    tip: "rain check 表示改天再约。",
    examples: [
      ["Can I take a rain check? I'm exhausted tonight.", "可以改天吗？我今晚太累了。"],
      ["I'd love to, but can I take a rain check?", "我很想去，但可以改天吗？"],
      ["Can I take a rain check on dinner?", "晚饭可以改天吗？"],
    ],
  },
  {
    id: "i-am-going-to-skip",
    category: "委婉拒绝",
    phrase: "I'm going to skip...",
    meaning: "我这次就不...",
    scene: "自然地表示不参加某事。",
    tone: "语气：轻松、直接。",
    tip: "后面接活动名称。",
    examples: [
      ["I'm going to skip the party tonight.", "我今晚就不去派对了。"],
      ["I'm going to skip dessert.", "我就不吃甜点了。"],
      ["I'm going to skip this round.", "这一轮我就不参加了。"],
    ],
  },
  {
    id: "i-dont-think-that-is-for-me",
    category: "委婉拒绝",
    phrase: "I don't think that's for me.",
    meaning: "我觉得那不太适合我。",
    scene: "委婉拒绝产品、活动、建议或选择。",
    tone: "语气：礼貌、有边界。",
    tip: "可以先说 It sounds interesting, but...",
    examples: [
      ["It sounds interesting, but I don't think that's for me.", "听起来挺有意思，但我觉得那不太适合我。"],
      ["I don't think that's for me, but thanks for suggesting it.", "我觉得那不太适合我，但谢谢你的建议。"],
      ["I don't think this class is for me.", "我觉得这门课不太适合我。"],
    ],
  },
  {
    id: "i-am-not-ready-to",
    category: "委婉拒绝",
    phrase: "I'm not ready to...",
    meaning: "我还没准备好...",
    scene: "拒绝或推迟某个决定、行动。",
    tone: "语气：诚实、委婉。",
    tip: "后面接动词原形。",
    examples: [
      ["I'm not ready to make a decision yet.", "我还没准备好做决定。"],
      ["I'm not ready to talk about it.", "我还没准备好聊这个。"],
      ["I'm not ready to share it publicly.", "我还没准备好公开分享它。"],
    ],
  },
  {
    id: "i-have-other-plans",
    category: "委婉拒绝",
    phrase: "I have other plans.",
    meaning: "我有别的安排。",
    scene: "拒绝邀请时简洁明了。",
    tone: "语气：礼貌、中性。",
    tip: "不需要解释太多。",
    examples: [
      ["I have other plans tonight, but thanks for inviting me.", "我今晚有别的安排，但谢谢你邀请我。"],
      ["Sorry, I have other plans this weekend.", "抱歉，我这个周末有别的安排。"],
      ["I already have other plans.", "我已经有别的安排了。"],
    ],
  },
  {
    id: "let-me-get-back-to-you",
    category: "委婉拒绝",
    phrase: "Let me get back to you.",
    meaning: "我回头回复你。",
    scene: "暂时不做决定，给自己留时间。",
    tone: "语气：礼貌、稳妥。",
    tip: "最好补一个时间，如 tomorrow。",
    examples: [
      ["Let me get back to you tomorrow.", "我明天回复你。"],
      ["Let me get back to you after I check my schedule.", "我看一下日程后回复你。"],
      ["Let me get back to you on that.", "关于那件事我回头回复你。"],
    ],
  },
  {
    id: "can-you-walk-me-through",
    category: "提出建议",
    phrase: "Can you walk me through...",
    meaning: "你能带我过一遍...吗？",
    scene: "请求别人一步步解释流程。",
    tone: "语气：礼貌、学习型。",
    tip: "后面接流程、步骤或问题。",
    examples: [
      ["Can you walk me through the steps?", "你能带我过一遍步骤吗？"],
      ["Can you walk me through how this works?", "你能带我过一遍这是怎么运作的吗？"],
      ["Can you walk me through your thinking?", "你能带我过一遍你的思路吗？"],
    ],
  },
  {
    id: "could-you-clarify",
    category: "提出建议",
    phrase: "Could you clarify...",
    meaning: "你能说明一下...吗？",
    scene: "礼貌要求对方讲清楚。",
    tone: "语气：正式、清楚，适合课堂和工作。",
    tip: "后面接你不清楚的部分。",
    examples: [
      ["Could you clarify what you mean by that?", "你能说明一下你那是什么意思吗？"],
      ["Could you clarify the deadline?", "你能说明一下截止时间吗？"],
      ["Could you clarify this part for me?", "你能帮我说明一下这一部分吗？"],
    ],
  },
  {
    id: "would-you-mind",
    category: "提出建议",
    phrase: "Would you mind...",
    meaning: "你介意...吗？",
    scene: "非常礼貌地请求别人做事。",
    tone: "语气：礼貌、柔和。",
    tip: "后面接动名词。",
    examples: [
      ["Would you mind closing the window?", "你介意关一下窗户吗？"],
      ["Would you mind repeating that?", "你介意重复一下吗？"],
      ["Would you mind giving me a minute?", "你介意给我一分钟吗？"],
    ],
  },
  {
    id: "can-we-start-with",
    category: "提出建议",
    phrase: "Can we start with...",
    meaning: "我们可以先从...开始吗？",
    scene: "把任务拆小，先做第一步。",
    tone: "语气：合作、清楚。",
    tip: "后面接最容易开始的部分。",
    examples: [
      ["Can we start with the examples?", "我们可以先从例句开始吗？"],
      ["Can we start with a simple version?", "我们可以先从简单版本开始吗？"],
      ["Can we start with five chunks today?", "我们今天可以先从五个语块开始吗？"],
    ],
  },
  {
    id: "maybe-it-would-be-better-to",
    category: "提出建议",
    phrase: "Maybe it would be better to...",
    meaning: "也许...会更好。",
    scene: "提出替代方案时很委婉。",
    tone: "语气：温和、建议型。",
    tip: "后面接动词原形。",
    examples: [
      ["Maybe it would be better to wait until tomorrow.", "也许等到明天会更好。"],
      ["Maybe it would be better to keep the sentence shorter.", "也许把句子保持短一点会更好。"],
      ["Maybe it would be better to practice one chunk first.", "也许先练一个语块会更好。"],
    ],
  },
  {
    id: "lets-take-it-step-by-step",
    category: "提出建议",
    phrase: "Let's take it step by step.",
    meaning: "我们一步一步来。",
    scene: "对方觉得复杂或焦虑时，用来降低压力。",
    tone: "语气：安抚、合作。",
    tip: "可单独使用。",
    examples: [
      ["Let's take it step by step. We don't need to rush.", "我们一步一步来。不用急。"],
      ["Let's take it step by step and start with the first sentence.", "我们一步一步来，先从第一句开始。"],
      ["Let's take it step by step from here.", "从这里开始我们一步一步来。"],
    ],
  },
  {
    id: "just-so-you-know",
    category: "解释说明",
    phrase: "Just so you know...",
    meaning: "跟你说一下...",
    scene: "提前告知对方一个信息。",
    tone: "语气：自然、提醒型。",
    tip: "用于补充背景或提醒，不要太严肃。",
    examples: [
      ["Just so you know, I might be a few minutes late.", "跟你说一下，我可能会晚几分钟。"],
      ["Just so you know, this is still a draft.", "跟你说一下，这还只是草稿。"],
      ["Just so you know, the plan has changed.", "跟你说一下，计划变了。"],
    ],
  },
  {
    id: "for-what-its-worth",
    category: "表达观点",
    phrase: "For what it's worth...",
    meaning: "不一定有用，但我觉得...",
    scene: "给出自己的看法，但不强迫对方接受。",
    tone: "语气：谦和、补充型。",
    tip: "适合给建议或分享经验。",
    examples: [
      ["For what it's worth, I think you're doing well.", "不一定有用，但我觉得你做得很好。"],
      ["For what it's worth, I would keep the first version.", "不一定有用，但我会保留第一个版本。"],
      ["For what it's worth, this sentence sounds natural to me.", "不一定有用，但这句话我听起来很自然。"],
    ],
  },
  {
    id: "the-way-it-works-is",
    category: "解释说明",
    phrase: "The way it works is...",
    meaning: "它的运作方式是...",
    scene: "解释功能、规则或流程。",
    tone: "语气：清楚、说明型。",
    tip: "后面接步骤或机制。",
    examples: [
      ["The way it works is, you learn the chunk first and then reuse it.", "它的运作方式是，你先学语块，然后复用它。"],
      ["The way it works is simple.", "它的运作方式很简单。"],
      ["The way it works is different from memorizing single words.", "它的运作方式不同于背单词。"],
    ],
  },
  {
    id: "what-matters-is",
    category: "解释说明",
    phrase: "What matters is...",
    meaning: "重要的是...",
    scene: "强调真正关键的事情。",
    tone: "语气：清楚、有重点。",
    tip: "后面接核心标准或重点。",
    examples: [
      ["What matters is that you can use it in a real conversation.", "重要的是你能在真实对话里用出来。"],
      ["What matters is consistency, not perfection.", "重要的是坚持，不是完美。"],
      ["What matters is whether the sentence sounds natural.", "重要的是这个句子听起来是否自然。"],
    ],
  },
  {
    id: "it-comes-down-to",
    category: "解释说明",
    phrase: "It comes down to...",
    meaning: "归根结底是...",
    scene: "总结问题的本质。",
    tone: "语气：总结、分析型。",
    tip: "后面接最核心的因素。",
    examples: [
      ["It comes down to practice.", "归根结底是练习。"],
      ["It comes down to how often you use it.", "归根结底是你多久用一次。"],
      ["It comes down to building better habits.", "归根结底是建立更好的习惯。"],
    ],
  },
  {
    id: "in-the-end",
    category: "解释说明",
    phrase: "In the end...",
    meaning: "到最后...",
    scene: "总结结果或最终判断。",
    tone: "语气：总结、自然。",
    tip: "常用来收束一段话。",
    examples: [
      ["In the end, speaking is about communication.", "到最后，口语是关于沟通。"],
      ["In the end, we chose the simpler option.", "到最后，我们选择了更简单的方案。"],
      ["In the end, it worked out better than expected.", "到最后，结果比预期更好。"],
    ],
  },
  {
    id: "now-that-you-mention-it",
    category: "社交寒暄",
    phrase: "Now that you mention it...",
    meaning: "你这么一说...",
    scene: "听到对方提醒后想起某事。",
    tone: "语气：自然、接话型。",
    tip: "后面接你想到的内容。",
    examples: [
      ["Now that you mention it, I did notice that.", "你这么一说，我确实注意到了。"],
      ["Now that you mention it, I should check again.", "你这么一说，我应该再检查一下。"],
      ["Now that you mention it, that sounds familiar.", "你这么一说，那听起来有点熟悉。"],
    ],
  },
  {
    id: "speaking-of",
    category: "社交寒暄",
    phrase: "Speaking of...",
    meaning: "说到...",
    scene: "自然转到相关话题。",
    tone: "语气：轻松、衔接型。",
    tip: "后面接刚才提到的相关主题。",
    examples: [
      ["Speaking of travel, have you booked your ticket?", "说到旅行，你订票了吗？"],
      ["Speaking of English, how's your practice going?", "说到英语，你练得怎么样？"],
      ["Speaking of that, I have a question.", "说到那个，我有个问题。"],
    ],
  },
  {
    id: "by-the-way",
    category: "社交寒暄",
    phrase: "By the way...",
    meaning: "顺便说一下...",
    scene: "插入一个相关或新的信息。",
    tone: "语气：自然、日常。",
    tip: "用于转话题或补充信息。",
    examples: [
      ["By the way, I sent you the link.", "顺便说一下，我把链接发给你了。"],
      ["By the way, your pronunciation sounds better.", "顺便说一下，你的发音听起来更好了。"],
      ["By the way, are you free tomorrow?", "顺便问一下，你明天有空吗？"],
    ],
  },
  {
    id: "before-i-forget",
    category: "社交寒暄",
    phrase: "Before I forget...",
    meaning: "趁我还没忘...",
    scene: "想起一件要提醒或补充的事。",
    tone: "语气：自然、口语。",
    tip: "后面接需要说的事。",
    examples: [
      ["Before I forget, happy birthday!", "趁我还没忘，生日快乐！"],
      ["Before I forget, the meeting is at two.", "趁我还没忘，会议是两点。"],
      ["Before I forget, can you send me that file?", "趁我还没忘，你能把那个文件发给我吗？"],
    ],
  },
  {
    id: "to-make-a-long-story-short",
    category: "解释说明",
    phrase: "To make a long story short...",
    meaning: "长话短说...",
    scene: "快速总结复杂经历。",
    tone: "语气：口语、总结型。",
    tip: "后面接简短结论。",
    examples: [
      ["To make a long story short, we missed the train.", "长话短说，我们错过了火车。"],
      ["To make a long story short, the plan changed.", "长话短说，计划变了。"],
      ["To make a long story short, it was worth it.", "长话短说，它是值得的。"],
    ],
  },
  {
    id: "long-story-short",
    category: "解释说明",
    phrase: "Long story short...",
    meaning: "简单来说...",
    scene: "口语里快速跳到结果。",
    tone: "语气：轻松、简洁。",
    tip: "和 To make a long story short 类似，更口语。",
    examples: [
      ["Long story short, I got the job.", "简单来说，我拿到那份工作了。"],
      ["Long story short, we decided to try again.", "简单来说，我们决定再试一次。"],
      ["Long story short, it didn't work.", "简单来说，它没成功。"],
    ],
  },
  {
    id: "i-ended-up",
    category: "解释说明",
    phrase: "I ended up...",
    meaning: "我最后...",
    scene: "讲事情最终结果，非常口语。",
    tone: "语气：叙述、自然。",
    tip: "后面接动名词或地点。",
    examples: [
      ["I ended up staying home.", "我最后待在家里了。"],
      ["I ended up choosing the simpler option.", "我最后选择了更简单的选项。"],
      ["I ended up learning a lot from it.", "我最后从中学到了很多。"],
    ],
  },
  {
    id: "it-turns-out-that",
    category: "解释说明",
    phrase: "It turns out that...",
    meaning: "结果发现...",
    scene: "说明后来才知道的结果。",
    tone: "语气：叙述、发现型。",
    tip: "后面接完整句子。",
    examples: [
      ["It turns out that we were both right.", "结果发现我们俩都对。"],
      ["It turns out that the answer was simple.", "结果发现答案很简单。"],
      ["It turns out that I needed more practice.", "结果发现我需要更多练习。"],
    ],
  },
  {
    id: "i-am-used-to",
    category: "表达观点",
    phrase: "I'm used to...",
    meaning: "我习惯于...",
    scene: "说明自己已经适应某事。",
    tone: "语气：自然、说明型。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm used to speaking slowly when I practice.", "我练习时习惯慢慢说。"],
      ["I'm used to studying at night.", "我习惯晚上学习。"],
      ["I'm used to this kind of schedule.", "我习惯这种日程。"],
    ],
  },
  {
    id: "i-am-not-used-to",
    category: "解释说明",
    phrase: "I'm not used to...",
    meaning: "我不习惯...",
    scene: "解释自己不适应某件事。",
    tone: "语气：自然、说明型。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm not used to speaking in front of people.", "我不习惯在人前讲话。"],
      ["I'm not used to waking up this early.", "我不习惯这么早起。"],
      ["I'm not used to this accent yet.", "我还不习惯这个口音。"],
    ],
  },
  {
    id: "i-am-getting-used-to",
    category: "解释说明",
    phrase: "I'm getting used to...",
    meaning: "我正在慢慢习惯...",
    scene: "说明自己正在适应。",
    tone: "语气：积极、变化中。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm getting used to speaking English every day.", "我正在慢慢习惯每天说英语。"],
      ["I'm getting used to the new routine.", "我正在慢慢习惯新的日常。"],
      ["I'm getting used to learning in chunks.", "我正在慢慢习惯按语块学习。"],
    ],
  },
  {
    id: "i-am-supposed-to",
    category: "解释说明",
    phrase: "I'm supposed to...",
    meaning: "我应该/按理要...",
    scene: "说明安排、责任或预期。",
    tone: "语气：说明型、日常。",
    tip: "后面接动词原形。",
    examples: [
      ["I'm supposed to finish this today.", "我应该今天完成这个。"],
      ["I'm supposed to meet her at three.", "我应该三点见她。"],
      ["I'm supposed to practice before class.", "我应该课前练习。"],
    ],
  },
  {
    id: "i-am-about-to",
    category: "解释说明",
    phrase: "I'm about to...",
    meaning: "我正要...",
    scene: "表达马上要做某事。",
    tone: "语气：即时、口语。",
    tip: "后面接动词原形。",
    examples: [
      ["I'm about to leave.", "我正要走。"],
      ["I'm about to start practicing.", "我正要开始练习。"],
      ["I'm about to send it to you.", "我正要发给你。"],
    ],
  },
  {
    id: "i-was-about-to",
    category: "解释说明",
    phrase: "I was about to...",
    meaning: "我刚要...",
    scene: "说明刚准备做某事。",
    tone: "语气：叙述、口语。",
    tip: "后面接动词原形。",
    examples: [
      ["I was about to call you.", "我刚要给你打电话。"],
      ["I was about to say the same thing.", "我刚想说同样的话。"],
      ["I was about to ask that question.", "我刚要问那个问题。"],
    ],
  },
  {
    id: "i-cant-help-but",
    category: "表达观点",
    phrase: "I can't help but...",
    meaning: "我忍不住...",
    scene: "表达无法控制的想法或感受。",
    tone: "语气：自然、有情绪。",
    tip: "后面接动词原形。",
    examples: [
      ["I can't help but think this is a good idea.", "我忍不住觉得这是个好主意。"],
      ["I can't help but laugh when I hear that.", "我听到那个就忍不住笑。"],
      ["I can't help but feel nervous.", "我忍不住觉得紧张。"],
    ],
  },
  {
    id: "i-cant-stop",
    category: "社交寒暄",
    phrase: "I can't stop...",
    meaning: "我停不下来...",
    scene: "表达强烈兴趣或持续动作。",
    tone: "语气：兴奋、日常。",
    tip: "后面接动名词。",
    examples: [
      ["I can't stop listening to this song.", "我一直听这首歌停不下来。"],
      ["I can't stop thinking about that trip.", "我一直想着那次旅行。"],
      ["I can't stop practicing this sentence.", "我一直练这句话停不下来。"],
    ],
  },
  {
    id: "i-am-in-the-middle-of",
    category: "解释说明",
    phrase: "I'm in the middle of...",
    meaning: "我正在忙着...",
    scene: "解释自己当前正在做某事。",
    tone: "语气：自然、说明型。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm in the middle of something. Can I call you back?", "我正在忙点事。能回头打给你吗？"],
      ["I'm in the middle of a meeting.", "我正在开会。"],
      ["I'm in the middle of practicing.", "我正在练习。"],
    ],
  },
  {
    id: "i-am-running-late",
    category: "社交寒暄",
    phrase: "I'm running late.",
    meaning: "我要迟到了。",
    scene: "通知对方自己会晚到。",
    tone: "语气：日常、负责。",
    tip: "后面可补 I'll be there in...。",
    examples: [
      ["I'm running late. I'll be there in ten minutes.", "我要迟到了。我十分钟后到。"],
      ["Sorry, I'm running a little late.", "抱歉，我有点迟到了。"],
      ["I'm running late because of traffic.", "我因为堵车要迟到了。"],
    ],
  },
  {
    id: "i-am-on-my-way",
    category: "社交寒暄",
    phrase: "I'm on my way.",
    meaning: "我在路上了。",
    scene: "告诉对方你正在赶过去。",
    tone: "语气：简短、日常。",
    tip: "可单独使用。",
    examples: [
      ["I'm on my way. See you soon.", "我在路上了。待会见。"],
      ["I'm on my way now.", "我现在在路上了。"],
      ["I'm on my way to the cafe.", "我正在去咖啡店的路上。"],
    ],
  },
  {
    id: "ill-be-right-back",
    category: "社交寒暄",
    phrase: "I'll be right back.",
    meaning: "我马上回来。",
    scene: "短暂离开时使用。",
    tone: "语气：日常、自然。",
    tip: "常用于聊天、会议、聚会中。",
    examples: [
      ["I'll be right back. I need to grab some water.", "我马上回来。我去拿点水。"],
      ["I'll be right back in two minutes.", "我两分钟后回来。"],
      ["I'll be right back, okay?", "我马上回来，可以吗？"],
    ],
  },
  {
    id: "take-your-time",
    category: "社交寒暄",
    phrase: "Take your time.",
    meaning: "慢慢来。",
    scene: "让对方别着急。",
    tone: "语气：体贴、放松。",
    tip: "可单独使用，也可接 No rush.",
    examples: [
      ["Take your time. There's no rush.", "慢慢来。不着急。"],
      ["Take your time with the answer.", "你慢慢想答案。"],
      ["Take your time. I'm not in a hurry.", "慢慢来。我不赶时间。"],
    ],
  },
  {
    id: "no-rush",
    category: "社交寒暄",
    phrase: "No rush.",
    meaning: "不着急。",
    scene: "减轻对方压力。",
    tone: "语气：轻松、体贴。",
    tip: "常和 Take your time 搭配。",
    examples: [
      ["No rush. Send it when you're ready.", "不着急。你准备好了再发。"],
      ["No rush at all.", "完全不着急。"],
      ["No rush. We can do it tomorrow.", "不着急。我们可以明天做。"],
    ],
  },
  {
    id: "sounds-good-to-me",
    category: "社交寒暄",
    phrase: "Sounds good to me.",
    meaning: "我觉得可以。",
    scene: "同意计划或安排。",
    tone: "语气：轻松、赞同。",
    tip: "比 OK 更自然。",
    examples: [
      ["Sounds good to me. Let's do that.", "我觉得可以。就这么办吧。"],
      ["Friday sounds good to me.", "周五我觉得可以。"],
      ["That sounds good to me.", "那个我觉得可以。"],
    ],
  },
  {
    id: "that-works-for-me",
    category: "社交寒暄",
    phrase: "That works for me.",
    meaning: "那个对我可以。",
    scene: "确认时间、方案、安排。",
    tone: "语气：自然、协商型。",
    tip: "work here means 合适/可行。",
    examples: [
      ["Thursday works for me.", "周四对我可以。"],
      ["That time works for me.", "那个时间对我可以。"],
      ["That works for me. See you then.", "那个对我可以。到时候见。"],
    ],
  },
  {
    id: "i-am-fine-with",
    category: "表达观点",
    phrase: "I'm fine with...",
    meaning: "我可以接受...",
    scene: "表达自己不介意某个选择。",
    tone: "语气：随和、中性。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm fine with either option.", "两个选择我都可以。"],
      ["I'm fine with starting later.", "晚点开始我可以接受。"],
      ["I'm fine with keeping it simple.", "保持简单我可以接受。"],
    ],
  },
  {
    id: "i-am-open-to",
    category: "表达观点",
    phrase: "I'm open to...",
    meaning: "我愿意考虑...",
    scene: "表达开放态度。",
    tone: "语气：灵活、合作。",
    tip: "后面接名词或动名词。",
    examples: [
      ["I'm open to other ideas.", "我愿意考虑其他想法。"],
      ["I'm open to trying a new method.", "我愿意尝试新方法。"],
      ["I'm open to feedback.", "我愿意接受反馈。"],
    ],
  },
  {
    id: "it-is-up-to-you",
    category: "表达观点",
    phrase: "It's up to you.",
    meaning: "由你决定。",
    scene: "把选择权交给对方。",
    tone: "语气：随和、尊重。",
    tip: "可单独使用。",
    examples: [
      ["It's up to you. I'm fine either way.", "由你决定。我都可以。"],
      ["It's up to you whether we go or stay.", "去还是留由你决定。"],
      ["It's totally up to you.", "完全由你决定。"],
    ],
  },
  {
    id: "whatever-works-for-you",
    category: "社交寒暄",
    phrase: "Whatever works for you.",
    meaning: "你方便就行。",
    scene: "配合对方时间或方式。",
    tone: "语气：随和、体贴。",
    tip: "适合约时间、安排方式。",
    examples: [
      ["Whatever works for you. I'm flexible.", "你方便就行。我比较灵活。"],
      ["We can meet whenever works for you.", "你什么时候方便我们就什么时候见。"],
      ["Choose whatever works for you.", "选你方便的就行。"],
    ],
  },
  {
    id: "i-am-here-if-you-need-me",
    category: "社交寒暄",
    phrase: "I'm here if you need me.",
    meaning: "如果你需要我，我就在。",
    scene: "表达支持和陪伴。",
    tone: "语气：温暖、可靠。",
    tip: "适合安慰朋友或提供帮助。",
    examples: [
      ["I'm here if you need me.", "如果你需要我，我就在。"],
      ["I'm here if you need to talk.", "如果你需要聊聊，我就在。"],
      ["I'm here if you need any help.", "如果你需要任何帮助，我就在。"],
    ],
  },
  {
    id: "youve-got-this",
    category: "社交寒暄",
    phrase: "You've got this.",
    meaning: "你可以的。",
    scene: "鼓励别人面对挑战。",
    tone: "语气：鼓励、坚定。",
    tip: "很适合考试、面试、练习前使用。",
    examples: [
      ["You've got this. Just take it slowly.", "你可以的。慢慢来就好。"],
      ["You've got this. You've practiced a lot.", "你可以的。你已经练了很多。"],
      ["Don't worry. You've got this.", "别担心。你可以的。"],
    ],
  },
  {
    id: "dont-be-too-hard-on-yourself",
    category: "社交寒暄",
    phrase: "Don't be too hard on yourself.",
    meaning: "别对自己太苛刻。",
    scene: "安慰自责的人。",
    tone: "语气：温柔、鼓励。",
    tip: "后面可以接 You're learning.",
    examples: [
      ["Don't be too hard on yourself. You're still learning.", "别对自己太苛刻。你还在学习。"],
      ["Don't be too hard on yourself. Everyone makes mistakes.", "别对自己太苛刻。每个人都会犯错。"],
      ["Try not to be too hard on yourself.", "尽量别对自己太苛刻。"],
    ],
  },
  {
    id: "one-step-at-a-time",
    category: "提出建议",
    phrase: "One step at a time.",
    meaning: "一步一步来。",
    scene: "把复杂目标拆小。",
    tone: "语气：鼓励、安抚。",
    tip: "可单独使用。",
    examples: [
      ["One step at a time. Start with one chunk.", "一步一步来。先从一个语块开始。"],
      ["Take it one step at a time.", "一步一步来。"],
      ["One step at a time, and you'll get there.", "一步一步来，你会做到的。"],
    ],
  },
  {
    id: "lets-keep-it-simple",
    category: "提出建议",
    phrase: "Let's keep it simple.",
    meaning: "我们把它简单化。",
    scene: "避免方案过度复杂。",
    tone: "语气：清楚、实用。",
    tip: "适合学习、工作、设计讨论。",
    examples: [
      ["Let's keep it simple and start with five chunks.", "我们把它简单化，先从五个语块开始。"],
      ["Let's keep it simple for now.", "目前先简单一点。"],
      ["Let's keep the explanation simple.", "我们把解释简单化。"],
    ],
  },
  {
    id: "lets-focus-on",
    category: "提出建议",
    phrase: "Let's focus on...",
    meaning: "我们专注于...",
    scene: "把注意力拉回重点。",
    tone: "语气：合作、清楚。",
    tip: "后面接当前最重要的事。",
    examples: [
      ["Let's focus on speaking first.", "我们先专注口语。"],
      ["Let's focus on the most useful chunks.", "我们专注最有用的语块。"],
      ["Let's focus on one thing at a time.", "我们一次专注一件事。"],
    ],
  },
  {
    id: "lets-move-on-to",
    category: "提出建议",
    phrase: "Let's move on to...",
    meaning: "我们接着看...",
    scene: "切换到下一个话题或步骤。",
    tone: "语气：自然、推进型。",
    tip: "后面接下一项内容。",
    examples: [
      ["Let's move on to the next example.", "我们接着看下一个例子。"],
      ["Let's move on to practice.", "我们接着进入练习。"],
      ["Let's move on to the speaking part.", "我们接着看口语部分。"],
    ],
  },
  {
    id: "lets-circle-back-to",
    category: "解释说明",
    phrase: "Let's circle back to...",
    meaning: "我们回到...",
    scene: "会议或讨论中回到之前的话题。",
    tone: "语气：专业、自然。",
    tip: "后面接之前的话题。",
    examples: [
      ["Let's circle back to the main question.", "我们回到主要问题。"],
      ["Let's circle back to this later.", "我们稍后再回到这个。"],
      ["Let's circle back to your first point.", "我们回到你的第一点。"],
    ],
  },
  {
    id: "ill-keep-that-in-mind",
    category: "社交寒暄",
    phrase: "I'll keep that in mind.",
    meaning: "我会记住这一点。",
    scene: "回应建议或提醒。",
    tone: "语气：礼貌、接受。",
    tip: "适合听到建议后回应。",
    examples: [
      ["Thanks. I'll keep that in mind.", "谢谢。我会记住这一点。"],
      ["I'll keep that in mind next time.", "下次我会记住这一点。"],
      ["That's helpful. I'll keep that in mind.", "这很有帮助。我会记住这一点。"],
    ],
  },
  {
    id: "that-is-good-to-know",
    category: "社交寒暄",
    phrase: "That's good to know.",
    meaning: "知道这个挺好。",
    scene: "回应有用的信息。",
    tone: "语气：自然、感谢。",
    tip: "适合听到提醒、规则、经验后使用。",
    examples: [
      ["That's good to know. Thanks for telling me.", "知道这个挺好。谢谢你告诉我。"],
      ["That's good to know before the trip.", "出发前知道这个挺好。"],
      ["That's really good to know.", "知道这个真的挺好。"],
    ],
  },
  {
    id: "i-learned-that-the-hard-way",
    category: "解释说明",
    phrase: "I learned that the hard way.",
    meaning: "我是吃过亏才懂的。",
    scene: "分享经验教训。",
    tone: "语气：口语、带经历感。",
    tip: "常用于提醒别人。",
    examples: [
      ["Always back up your files. I learned that the hard way.", "一定要备份文件。我是吃过亏才懂的。"],
      ["Don't wait until the last minute. I learned that the hard way.", "别拖到最后一刻。我是吃过亏才懂的。"],
      ["I learned that the hard way last year.", "去年我是吃过亏才懂的。"],
    ],
  },
  {
    id: "it-is-not-the-end-of-the-world",
    category: "社交寒暄",
    phrase: "It's not the end of the world.",
    meaning: "这没那么严重。",
    scene: "安慰对方别过度焦虑。",
    tone: "语气：安抚、轻松。",
    tip: "适合小失误，不适合严重事件。",
    examples: [
      ["It's not the end of the world. We can fix it.", "这没那么严重。我们可以修好。"],
      ["You made a mistake, but it's not the end of the world.", "你犯了个错，但这没那么严重。"],
      ["It's not the end of the world if you forget one word.", "忘了一个词也没那么严重。"],
    ],
  },
  {
    id: "these-things-happen",
    category: "社交寒暄",
    phrase: "These things happen.",
    meaning: "这种事难免会发生。",
    scene: "安慰别人犯错或遇到小麻烦。",
    tone: "语气：宽慰、自然。",
    tip: "后面可以接 Don't worry.",
    examples: [
      ["These things happen. Don't worry about it.", "这种事难免会发生。别担心。"],
      ["These things happen when you're learning.", "学习的时候这种事难免会发生。"],
      ["It's okay. These things happen.", "没事。这种事难免会发生。"],
    ],
  },
  {
    id: "that-explains-it",
    category: "解释说明",
    phrase: "That explains it.",
    meaning: "那就解释得通了。",
    scene: "听到原因后表示理解。",
    tone: "语气：恍然、自然。",
    tip: "可单独使用。",
    examples: [
      ["That explains it. I was wondering why.", "那就解释得通了。我刚还在想为什么。"],
      ["Oh, that explains it.", "哦，那就解释得通了。"],
      ["That explains why you were late.", "那就解释了你为什么迟到。"],
    ],
  },
  {
    id: "that-is-what-i-was-thinking",
    category: "表达观点",
    phrase: "That's what I was thinking.",
    meaning: "我刚也是这么想的。",
    scene: "表达你和对方想法一致。",
    tone: "语气：自然、认同。",
    tip: "适合讨论时快速接话。",
    examples: [
      ["That's what I was thinking. We should start smaller.", "我刚也是这么想的。我们应该从更小的开始。"],
      ["That's exactly what I was thinking.", "我刚想的正是这个。"],
      ["That's what I was thinking too.", "我也是这么想的。"],
    ],
  },
  {
    id: "i-was-thinking-we-could",
    category: "提出建议",
    phrase: "I was thinking we could...",
    meaning: "我在想我们可以...",
    scene: "柔和地提出一个计划。",
    tone: "语气：试探、合作。",
    tip: "后面接动词原形。",
    examples: [
      ["I was thinking we could meet earlier.", "我在想我们可以早点见。"],
      ["I was thinking we could practice together.", "我在想我们可以一起练。"],
      ["I was thinking we could start with the easy part.", "我在想我们可以从简单的部分开始。"],
    ],
  },
  {
    id: "what-do-you-think-about",
    category: "提出建议",
    phrase: "What do you think about...",
    meaning: "你觉得...怎么样？",
    scene: "询问对方看法。",
    tone: "语气：开放、尊重。",
    tip: "后面接名词或动名词。",
    examples: [
      ["What do you think about this idea?", "你觉得这个想法怎么样？"],
      ["What do you think about practicing every morning?", "你觉得每天早上练习怎么样？"],
      ["What do you think about the new design?", "你觉得新设计怎么样？"],
    ],
  },
  {
    id: "would-that-work-for-you",
    category: "提出建议",
    phrase: "Would that work for you?",
    meaning: "这样对你可以吗？",
    scene: "提出安排后确认对方是否方便。",
    tone: "语气：礼貌、协商。",
    tip: "适合约时间、分配任务、安排计划。",
    examples: [
      ["We can meet at three. Would that work for you?", "我们可以三点见。这样对你可以吗？"],
      ["I can send it tomorrow. Would that work for you?", "我明天可以发给你。这样对你可以吗？"],
      ["Let's start with five chunks. Would that work for you?", "我们先从五个语块开始。这样对你可以吗？"],
    ],
  },
  {
    id: "let-me-know-if",
    category: "社交寒暄",
    phrase: "Let me know if...",
    meaning: "如果...告诉我。",
    scene: "给对方一个后续联系入口。",
    tone: "语气：友好、实用。",
    tip: "后面接条件。",
    examples: [
      ["Let me know if you need help.", "如果你需要帮助告诉我。"],
      ["Let me know if anything changes.", "如果有任何变化告诉我。"],
      ["Let me know if this sounds natural.", "如果这听起来自然告诉我。"],
    ],
  },
  {
    id: "feel-free-to",
    category: "提出建议",
    phrase: "Feel free to...",
    meaning: "你可以随时...",
    scene: "给对方许可或邀请。",
    tone: "语气：友好、开放。",
    tip: "后面接动词原形。",
    examples: [
      ["Feel free to ask questions.", "你可以随时提问。"],
      ["Feel free to use this example.", "你可以随时用这个例子。"],
      ["Feel free to reach out anytime.", "你可以随时联系我。"],
    ],
  },
  {
    id: "dont-hesitate-to",
    category: "提出建议",
    phrase: "Don't hesitate to...",
    meaning: "不要犹豫，尽管...",
    scene: "鼓励对方主动做某事。",
    tone: "语气：礼貌、正式一点。",
    tip: "后面接动词原形。",
    examples: [
      ["Don't hesitate to ask for help.", "需要帮助就尽管问。"],
      ["Don't hesitate to contact me.", "请随时联系我。"],
      ["Don't hesitate to practice out loud.", "不要犹豫，大声练出来。"],
    ],
  },
  {
    id: "when-it-comes-to",
    category: "解释说明",
    phrase: "When it comes to...",
    meaning: "说到...",
    scene: "引出某个主题。",
    tone: "语气：自然、主题引入。",
    tip: "后面接主题，再说观点。",
    examples: [
      ["When it comes to speaking, chunks are very useful.", "说到口语，语块非常有用。"],
      ["When it comes to learning English, consistency matters.", "说到学英语，坚持很重要。"],
      ["When it comes to pronunciation, listening helps a lot.", "说到发音，听力帮助很大。"],
    ],
  },
  {
    id: "as-long-as",
    category: "解释说明",
    phrase: "As long as...",
    meaning: "只要...",
    scene: "表达条件。",
    tone: "语气：清楚、常用。",
    tip: "后面接条件，再接结果。",
    examples: [
      ["As long as you practice every day, you'll improve.", "只要你每天练习，你就会进步。"],
      ["As long as it sounds natural, it's fine.", "只要听起来自然，就可以。"],
      ["As long as we start small, it won't feel hard.", "只要我们从小处开始，就不会觉得难。"],
    ],
  },
  {
    id: "even-if",
    category: "解释说明",
    phrase: "Even if...",
    meaning: "即使...",
    scene: "表达让步条件。",
    tone: "语气：自然、逻辑清楚。",
    tip: "后面接不利条件，再接主句。",
    examples: [
      ["Even if you make mistakes, keep speaking.", "即使你犯错，也继续说。"],
      ["Even if it's short, daily practice helps.", "即使时间很短，每天练习也有帮助。"],
      ["Even if you forget a word, you can still communicate.", "即使你忘了一个词，你仍然可以沟通。"],
    ],
  },
  {
    id: "the-more-the-more",
    category: "解释说明",
    phrase: "The more..., the more...",
    meaning: "越...越...",
    scene: "表达两个变化一起发生。",
    tone: "语气：规律、总结型。",
    tip: "常用于学习经验总结。",
    examples: [
      ["The more you use chunks, the more natural you sound.", "你越使用语块，听起来越自然。"],
      ["The more you practice, the more confident you become.", "你练得越多，就越自信。"],
      ["The more you listen, the more patterns you notice.", "你听得越多，注意到的模式越多。"],
    ],
  },
  {
    id: "i-would-love-to",
    category: "社交寒暄",
    phrase: "I'd love to...",
    meaning: "我很愿意...",
    scene: "热情接受邀请或表达愿望。",
    tone: "语气：积极、友好。",
    tip: "后面接动词原形。",
    examples: [
      ["I'd love to join you.", "我很愿意加入你们。"],
      ["I'd love to hear more about it.", "我很愿意多听听这个。"],
      ["I'd love to practice with you.", "我很愿意和你一起练。"],
    ],
  },
  {
    id: "i-was-hoping-to",
    category: "提出建议",
    phrase: "I was hoping to...",
    meaning: "我本来希望...",
    scene: "委婉表达自己想做的事或请求。",
    tone: "语气：柔和、礼貌。",
    tip: "后面接动词原形。",
    examples: [
      ["I was hoping to ask you a question.", "我本来想问你一个问题。"],
      ["I was hoping to get your feedback.", "我本来希望得到你的反馈。"],
      ["I was hoping to practice this with you.", "我本来希望和你练这个。"],
    ],
  },
];

const categoryCopy = {
  全部: "从高频表达开始，建立自己的口语素材库。",
  表达观点: "先把 I think 换成更自然、更有语气的观点表达。",
  提出建议: "练习更柔和的建议方式，让对方更容易接受。",
  社交寒暄: "把开场白说得像真实聊天，而不是课本句子。",
  委婉拒绝: "保留礼貌和边界，拒绝也能说得自然。",
  解释说明: "卡住时用这些语块把重点讲清楚。",
};

const palette = ["#fff4cf", "#dff6e9", "#e3f0ff", "#ffe1d7", "#f2e8ff"];
const CREEM_PAYMENT_LINK = "PASTE_CREEM_PAYMENT_LINK_HERE";
const PREMIUM_PRODUCT_NAME = "ChunkSpeak 完整语块库 Founding Pass";
const state = {
  category: "全部",
  view: "all",
  query: "",
  selectedId: chunks[0].id,
  modalOpen: false,
  dailyGoal: Number(localStorage.getItem("chunkDailyGoal") || "8"),
  dailyLearned: JSON.parse(localStorage.getItem("chunkDailyLearned") || "{}"),
  checkins: JSON.parse(localStorage.getItem("chunkCheckins") || "{}"),
  bestStreak: Number(localStorage.getItem("chunkBestStreak") || "0"),
  customChunks: JSON.parse(localStorage.getItem("chunkCustomChunks") || "[]"),
  module: "library",
  practiceMode: "type",
  currentQuiz: null,
  selectedChoice: "",
  showAllPhrases: false,
  favorites: new Set(JSON.parse(localStorage.getItem("chunkFavorites") || "[]")),
  mastered: new Set(JSON.parse(localStorage.getItem("chunkMastered") || "[]")),
};

const cardGrid = document.querySelector("#card-grid");
const searchInput = document.querySelector("#search-input");
const totalCount = document.querySelector("#total-count");
const favoriteCount = document.querySelector("#favorite-count");
const masteredCount = document.querySelector("#mastered-count");
const progressFill = document.querySelector("#progress-fill");
const practiceInput = document.querySelector("#practice-input");
const practiceOutput = document.querySelector("#practice-output");
const libraryTitle = document.querySelector("#library-title");
const librarySubtitle = document.querySelector("#library-subtitle");
const studyModal = document.querySelector("#study-modal");
const dailyGoalText = document.querySelector("#daily-goal-text");
const todayCount = document.querySelector("#today-count");
const streakCount = document.querySelector("#streak-count");
const bestStreakCount = document.querySelector("#best-streak-count");
const checkinMessage = document.querySelector("#checkin-message");
const checkinProgressFill = document.querySelector("#checkin-progress-fill");
const checkinButton = document.querySelector("#checkin-button");
const weekDots = document.querySelector("#week-dots");
const miniGoalCount = document.querySelector("#mini-goal-count");
const customPhrase = document.querySelector("#custom-phrase");
const customMeaning = document.querySelector("#custom-meaning");
const customScene = document.querySelector("#custom-scene");
const articleInput = document.querySelector("#article-input");
const articleResults = document.querySelector("#article-results");
const quizLabel = document.querySelector("#quiz-label");
const quizPrompt = document.querySelector("#quiz-prompt");
const quizHint = document.querySelector("#quiz-hint");
const quizOptions = document.querySelector("#quiz-options");
const quizAnswer = document.querySelector("#quiz-answer");
const quizFeedback = document.querySelector("#quiz-feedback");
const backToTopBtn = document.querySelector("#backToTop");
const loadMoreBtn = document.querySelector("#loadMore");
const buyPremiumBtn = document.querySelector("#buy-premium");
const paymentNote = document.querySelector("#payment-note");
let preferredVoice = null;

function saveState() {
  localStorage.setItem("chunkFavorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("chunkMastered", JSON.stringify([...state.mastered]));
  localStorage.setItem("chunkDailyGoal", String(state.dailyGoal));
  localStorage.setItem("chunkDailyLearned", JSON.stringify(state.dailyLearned));
  localStorage.setItem("chunkCheckins", JSON.stringify(state.checkins));
  localStorage.setItem("chunkBestStreak", String(state.bestStreak));
  localStorage.setItem("chunkCustomChunks", JSON.stringify(state.customChunks));
}

function allChunks() {
  return [...chunks, ...state.customChunks];
}

function getSelectedChunk() {
  return allChunks().find((chunk) => chunk.id === state.selectedId) || allChunks()[0];
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function todayLearnedIds() {
  const key = dateKey();
  if (!Array.isArray(state.dailyLearned[key])) state.dailyLearned[key] = [];
  return state.dailyLearned[key];
}

function getCurrentStreak() {
  let streak = 0;
  let cursor = new Date();
  while (state.checkins[dateKey(cursor)]) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

function renderCheckin() {
  const learned = todayLearnedIds().length;
  const goal = state.dailyGoal;
  const todayDone = Boolean(state.checkins[dateKey()]);
  const percent = Math.min((learned / goal) * 100, 100);
  const streak = getCurrentStreak();

  dailyGoalText.textContent = goal;
  miniGoalCount.textContent = goal;
  if (todayCount) todayCount.textContent = learned;
  streakCount.textContent = streak;
  bestStreakCount.textContent = Math.max(state.bestStreak, streak);
  checkinProgressFill.style.width = `${percent}%`;
  checkinButton.disabled = learned < goal || todayDone;
  checkinButton.textContent = todayDone ? "今日已打卡" : learned >= goal ? "完成今日打卡" : "目标未完成";
  checkinMessage.textContent = todayDone
    ? "今天已经打卡完成，明天继续保持。"
    : learned >= goal
      ? "今日目标已完成，可以打卡了。"
      : `还差 ${goal - learned} 个语块完成今日目标。`;

  document.querySelectorAll(".goal-chip").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.goal) === goal);
  });

  weekDots.innerHTML = Array.from({ length: 7 })
    .map((_, index) => {
      const date = addDays(new Date(), index - 6);
      const key = dateKey(date);
      const label = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
      return `<span class="week-dot ${state.checkins[key] ? "done" : ""}" title="${key}">${label}</span>`;
    })
    .join("");
}

function getChunkLens(chunk) {
  const phrase = chunk.phrase;
  if (phrase.includes("...")) {
    return {
      type: "半固定框架",
      slot: `${phrase.replace("...", "")} + 你的观点/动作/原因`,
      notice: "不要拆成单词背，先把开头说顺，再替换后半句。",
    };
  }
  if (phrase.includes("would") || phrase.includes("could") || phrase.includes("might")) {
    return {
      type: "委婉表达块",
      slot: "保留情态动词，让语气更柔和。",
      notice: "重点不是语法分析，而是记住它在真实对话里的礼貌感。",
    };
  }
  if (phrase.includes("That") || phrase.includes("I ")) {
    return {
      type: "固定回应块",
      slot: "整句直接调用，再接一句补充。",
      notice: "适合先作为自动反应背下来，再慢慢替换场景。",
    };
  }
  return {
    type: "自然搭配",
    slot: "把常一起出现的词作为一个单位记录。",
    notice: "学习重点是 collocation，也就是哪些词天然一起出现。",
  };
}

function chooseVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const naturalNames = ["Samantha", "Alex", "Google US English", "Microsoft Jenny", "Microsoft Aria"];
  preferredVoice =
    voices.find((voice) => naturalNames.some((name) => voice.name.includes(name))) ||
    voices.find((voice) => voice.lang === "en-US") ||
    voices.find((voice) => voice.lang.startsWith("en")) ||
    null;
  return preferredVoice;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.voice = preferredVoice || chooseVoice();
  utterance.rate = 0.82;
  utterance.pitch = 1.02;
  window.speechSynthesis.speak(utterance);
}

function filteredChunks() {
  const query = state.query.trim().toLowerCase();
  return allChunks().filter((chunk) => {
    const matchCategory = state.category === "全部" || chunk.category === state.category || chunk.category === "我的词块";
    const matchView =
      state.view === "all" ||
      (state.view === "favorites" && state.favorites.has(chunk.id)) ||
      (state.view === "mastered" && state.mastered.has(chunk.id));
    const text = [
      chunk.phrase,
      chunk.meaning,
      chunk.category,
      chunk.scene,
      chunk.tone,
      ...chunk.examples.flat(),
    ]
      .join(" ")
      .toLowerCase();
    return matchCategory && matchView && (!query || text.includes(query));
  });
}

function getGroupedChunks(items) {
  const order = ["表达观点", "提出建议", "社交寒暄", "委婉拒绝", "解释说明", "我的词块"];
  const groups = new Map();
  items.forEach((chunk) => {
    const key = chunk.category || "我的词块";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(chunk);
  });
  return order
    .filter((key) => groups.has(key))
    .map((key) => [key, groups.get(key)])
    .concat([...groups.entries()].filter(([key]) => !order.includes(key)));
}

function shouldLimitCards() {
  return window.matchMedia("(max-width: 768px)").matches && !state.showAllPhrases;
}

function renderChunkCard(chunk, index, hidden = false) {
  const isFavorite = state.favorites.has(chunk.id);
  const isMastered = state.mastered.has(chunk.id);
  const selected = state.selectedId === chunk.id ? " selected" : "";
  return `
    <article class="chunk-card phrase-card${selected}" data-id="${chunk.id}" data-accent="${index % palette.length}" style="${hidden ? "display: none;" : ""}">
      <div class="card-top">
        <span class="pill">${chunk.category}</span>
        <div class="card-actions">
          <button class="mini-button ${isFavorite ? "active" : ""}" data-action="favorite" data-id="${chunk.id}" aria-label="收藏">★</button>
          <button class="mini-button ${isMastered ? "active" : ""}" data-action="mastered" data-id="${chunk.id}" aria-label="标记掌握">✓</button>
        </div>
      </div>
      <h3>${chunk.phrase}</h3>
      <p>${chunk.meaning}</p>
      <div class="card-footer">
        <span>点开学习 · ${chunk.examples.length} 个例句</span>
        <span class="${isMastered ? "mastered-tag" : ""}">${isMastered ? "已掌握" : "待练习"}</span>
      </div>
    </article>
  `;
}

function renderCards() {
  const visible = filteredChunks();
  const learnedToday = todayLearnedIds().length;
  totalCount.textContent = allChunks().length;
  favoriteCount.textContent = state.favorites.size;
  masteredCount.textContent = Math.min(learnedToday, state.dailyGoal);
  progressFill.style.width = `${Math.min((learnedToday / state.dailyGoal) * 100, 100)}%`;
  libraryTitle.textContent =
    state.view === "favorites" ? "我的收藏" : state.view === "mastered" ? "已掌握语块" : state.category;
  librarySubtitle.textContent = categoryCopy[state.category] || categoryCopy.全部;
  document.querySelector("#nav-count-all").textContent = allChunks().length;
  document.querySelectorAll("[data-count]").forEach((item) => {
    item.textContent = allChunks().filter((chunk) => chunk.category === item.dataset.count).length;
  });

  if (!visible.length) {
    cardGrid.innerHTML = `<div class="empty-state">没有找到匹配的语块。换个关键词，或者切回“全部”。</div>`;
    loadMoreBtn.classList.remove("show");
    return;
  }

  const limitCards = shouldLimitCards();
  let renderedCount = 0;
  cardGrid.innerHTML = getGroupedChunks(visible)
    .map(([category, items], groupIndex) => {
      const isOpen = groupIndex === 0 ? " active" : "";
      const symbol = groupIndex === 0 ? "-" : "+";
      const cards = items
        .map((chunk) => {
          const hidden = limitCards && renderedCount >= 20;
          const card = renderChunkCard(chunk, renderedCount, hidden);
          renderedCount += 1;
          return card;
        })
        .join("");
      return `
        <div class="accordion-wrap">
          <button class="accordion-title" type="button" aria-expanded="${groupIndex === 0}">
            <span>${category}</span>
            <em>${items.length} 个</em>
            <strong>${symbol}</strong>
          </button>
          <div class="accordion-content${isOpen}">
            ${cards}
          </div>
        </div>
      `;
    })
    .join("");

  loadMoreBtn.classList.toggle("show", limitCards && visible.length > 20);
}

function renderDetail() {
  const chunk = getSelectedChunk();
  const lens = getChunkLens(chunk);
  document.querySelector("#detail-category").textContent = chunk.category;
  document.querySelector("#detail-title").textContent = chunk.phrase;
  document.querySelector("#detail-meaning").textContent = chunk.meaning;
  document.querySelector("#detail-scene").textContent = chunk.scene;
  document.querySelector("#detail-tone").textContent = chunk.tone;
  document.querySelector("#practice-tip").textContent = chunk.tip;
  document.querySelector("#chunk-lens").innerHTML = `
    <div class="lens-row"><strong>类型</strong><span>${lens.type}</span></div>
    <div class="lens-row"><strong>槽位</strong><span>${lens.slot}</span></div>
    <div class="lens-row"><strong>注意</strong><span>${lens.notice}</span></div>
  `;
  document.querySelector("#examples-list").innerHTML = chunk.examples
    .map(
      ([en, zh]) => `
        <div class="example-item">
          <button data-speak="${en}" aria-label="播放例句"><span class="play-icon"></span></button>
          <div>
            <strong>${en}</strong>
            <span>${zh}</span>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderModal() {
  studyModal.classList.toggle("open", state.modalOpen);
  studyModal.setAttribute("aria-hidden", state.modalOpen ? "false" : "true");
  document.body.classList.toggle("modal-open", state.modalOpen);
}

const practiceBank = [
  { tags: ["工作", "换工作", "职业"], en: "You might want to think about changing jobs.", zh: "你可以考虑换个工作。", categories: ["提出建议"] },
  { tags: ["工作", "会议", "时间"], en: "Would it be possible to move the meeting to Friday?", zh: "是否可以把会议挪到周五？", categories: ["提出建议"] },
  { tags: ["工作", "计划", "现实"], en: "From my point of view, this plan is more realistic.", zh: "从我的角度来看，这个计划更现实。", categories: ["表达观点"] },
  { tags: ["AI", "工具", "效率"], en: "Personally, I feel that trying more AI tools could save us time.", zh: "就我个人而言，我觉得尝试更多 AI 工具可以节省时间。", categories: ["表达观点"] },
  { tags: ["AI", "工具", "建议"], en: "Maybe we could try a few AI tools first.", zh: "也许我们可以先试几个 AI 工具。", categories: ["提出建议"] },
  { tags: ["休息", "累", "放松"], en: "Why don't we take a short break?", zh: "我们为什么不休息一下？", categories: ["提出建议"] },
  { tags: ["休息", "累", "拒绝"], en: "I'm not really in the mood for going out tonight.", zh: "我今晚不太想出去。", categories: ["委婉拒绝"] },
  { tags: ["拒绝", "邀请", "下次"], en: "I wish I could, but I already have plans.", zh: "我也想去，但我已经有安排了。", categories: ["委婉拒绝"] },
  { tags: ["拒绝", "时间", "不合适"], en: "That doesn't quite work for me. Could we do Friday instead?", zh: "那对我来说不太合适。我们能改周五吗？", categories: ["委婉拒绝"] },
  { tags: ["观点", "优秀", "夸奖"], en: "The point is, you are really good.", zh: "重点是，你很优秀。", categories: ["解释说明"] },
  { tags: ["观点", "不同意", "分歧"], en: "I see your point, but I still see it differently.", zh: "我明白你的观点，但我还是有不同看法。", categories: ["表达观点"] },
  { tags: ["观点", "说实话", "工作"], en: "To be honest, you might want to think about changing jobs.", zh: "说实话，你可以考虑换个工作。", categories: ["表达观点", "提出建议"] },
  { tags: ["社交", "好久不见", "寒暄"], en: "Long time no see. What have you been up to?", zh: "好久不见。你最近在忙什么？", categories: ["社交寒暄"] },
  { tags: ["社交", "有意思", "继续"], en: "That sounds fun. Tell me more.", zh: "听起来挺有意思。多跟我讲讲。", categories: ["社交寒暄"] },
  { tags: ["解释", "换句话说", "时间"], en: "To put it another way, we need more time.", zh: "换句话说，我们需要更多时间。", categories: ["解释说明"] },
  { tags: ["解释", "重点", "练习"], en: "What I'm trying to say is that practice matters more than memorizing rules.", zh: "我想说的是，练习比死记规则更重要。", categories: ["解释说明"] },
];

function getPracticeMatches(chunk, query) {
  const normalized = query.trim().toLowerCase();
  const scored = practiceBank
    .map((item) => {
      const categoryScore = item.categories.includes(chunk.category) ? 2 : 0;
      const tagScore = item.tags.some((tag) => normalized && tag.toLowerCase().includes(normalized)) ? 3 : 0;
      const textScore = [item.en, item.zh, ...item.tags].join(" ").toLowerCase().includes(normalized) ? 2 : 0;
      return { item, score: categoryScore + tagScore + textScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ item }) => item);

  if (scored.length) return scored;
  return chunk.examples.map(([en, zh]) => ({ en, zh, tags: [chunk.category], categories: [chunk.category] }));
}

function renderPracticeMatches(chunk, query) {
  const matches = getPracticeMatches(chunk, query);
  return `你搜索的是：
${query || "当前词块推荐"}

推荐练习句：
${matches.map((item, index) => `${index + 1}. ${item.en}\n   ${item.zh}`).join("\n\n")}

怎么练：
先读英文，再把句子里的关键词换成自己的内容。`;
}

function renderModules() {
  document.querySelectorAll(".module-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === state.module);
  });
  document.querySelectorAll(".module-view").forEach((view) => {
    view.classList.toggle("active", view.id === `${state.module}-module`);
  });
}

function addCustomChunk(phrase, meaning, scene = "自定义词块") {
  const cleanPhrase = phrase.trim();
  const cleanMeaning = meaning.trim() || "自定义中文意思";
  if (!cleanPhrase) return null;
  const chunk = {
    id: `custom-${Date.now()}`,
    category: "我的词块",
    phrase: cleanPhrase,
    meaning: cleanMeaning,
    scene: scene.trim() || "从文章或手动添加到生词本。",
    tone: "语气：由你自己在复习时补充。",
    tip: "先整块读熟，再尝试替换其中一个词。",
    examples: [[cleanPhrase, cleanMeaning]],
    custom: true,
  };
  state.customChunks.unshift(chunk);
  saveState();
  return chunk;
}

function scanArticle() {
  const text = articleInput.value || "";
  const lower = text.toLowerCase();
  const found = allChunks()
    .filter((chunk) => lower.includes(chunk.phrase.replace("...", "").toLowerCase().trim()))
    .slice(0, 12);

  articleResults.innerHTML = found.length
    ? found
        .map(
          (chunk) => `
            <div class="article-result">
              <strong>${chunk.phrase}</strong>
              <span>${chunk.meaning}</span>
              <button data-open-chunk="${chunk.id}">打开学习</button>
            </div>
          `,
        )
        .join("")
    : `<div class="article-result"><strong>还没发现已收录词块</strong><span>你可以选中文章里的短语，然后点“加入生词本”。</span></div>`;
}

function quizPool() {
  const priorityIds = [...state.mastered, ...state.favorites];
  const priority = priorityIds.map((id) => allChunks().find((chunk) => chunk.id === id)).filter(Boolean);
  return [...state.customChunks, ...priority, ...chunks].slice(0, 80);
}

function pickQuiz() {
  const pool = quizPool();
  const item = pool[Math.floor(Math.random() * pool.length)] || chunks[0];
  state.currentQuiz = item;
  state.selectedChoice = "";
  quizAnswer.value = "";
  quizFeedback.textContent = "输入答案后点击检查。";
  quizLabel.textContent =
    state.practiceMode === "type" ? "打字敲击" : state.practiceMode === "blank" ? "填空练习" : "中英选择";

  if (state.practiceMode === "type") {
    quizPrompt.textContent = item.meaning;
    quizHint.textContent = "请打出对应英文词块。";
    quizOptions.innerHTML = "";
    quizAnswer.style.display = "";
  } else if (state.practiceMode === "blank") {
    const words = item.phrase.split(" ");
    const blankIndex = words.length > 2 ? 1 : 0;
    const answer = words[blankIndex].replace(/[.,!?]/g, "");
    words[blankIndex] = "____";
    state.currentQuiz.blankAnswer = answer;
    quizPrompt.textContent = words.join(" ");
    quizHint.textContent = item.meaning;
    quizOptions.innerHTML = "";
    quizAnswer.style.display = "";
  } else {
    quizPrompt.textContent = item.meaning;
    quizHint.textContent = "选择正确英文词块。";
    quizAnswer.style.display = "none";
    const options = [item, ...chunks.filter((chunk) => chunk.id !== item.id).slice(0, 40).sort(() => Math.random() - 0.5).slice(0, 3)]
      .sort(() => Math.random() - 0.5);
    quizOptions.innerHTML = options
      .map((option) => `<button class="quiz-option" data-choice="${option.phrase}">${option.phrase}</button>`)
      .join("");
  }
}

function normalizeAnswer(text) {
  return text.toLowerCase().replace(/[.,!?']/g, "").replace(/\s+/g, " ").trim();
}

function checkQuizAnswer() {
  const item = state.currentQuiz;
  if (!item) return;
  const correct = state.practiceMode === "blank" ? item.blankAnswer : item.phrase;
  const userAnswer = state.practiceMode === "choice" ? state.selectedChoice : quizAnswer.value;
  const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correct);
  quizFeedback.textContent = isCorrect
    ? `正确。\n${item.phrase}\n${item.meaning}`
    : `再看一遍：\n正确答案：${correct}\n完整词块：${item.phrase}\n${item.meaning}`;
  if (isCorrect) speak(item.phrase);
}

function renderPracticeMode() {
  document.querySelectorAll(".practice-mode").forEach((button) => {
    button.classList.toggle("active", button.dataset.practiceMode === state.practiceMode);
  });
}

function render() {
  renderCards();
  renderDetail();
  renderModal();
  renderCheckin();
  renderModules();
  renderPracticeMode();
  refreshRevealTargets();
}

const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.transform = `translate3d(${event.clientX - 272}px, ${event.clientY - 272}px, 0)`;
  });
}

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      )
    : null;

function refreshRevealTargets() {
  document.querySelectorAll(".reveal-on-scroll:not(.is-visible)").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      item.classList.add("is-visible");
    } else if (revealObserver) {
      revealObserver.observe(item);
    } else {
      item.classList.add("is-visible");
    }
  });
}

document.addEventListener("pointermove", (event) => {
  const card = event.target.closest(".chunk-card");
  if (!card || window.matchMedia("(max-width: 768px)").matches) return;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `translateY(-5px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
});

document.addEventListener("pointerout", (event) => {
  const card = event.target.closest(".chunk-card");
  if (card) card.style.transform = "";
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.category = button.dataset.category;
    state.showAllPhrases = false;
    const first = filteredChunks()[0];
    if (first) state.selectedId = first.id;
    render();
  });
});

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.view = button.dataset.view;
    state.showAllPhrases = false;
    const first = filteredChunks()[0];
    if (first) state.selectedId = first.id;
    render();
  });
});

document.querySelectorAll(".module-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.module = button.dataset.module;
    render();
    if (state.module === "article") scanArticle();
    if (state.module === "practice" && !state.currentQuiz) pickQuiz();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.showAllPhrases = false;
  const first = filteredChunks()[0];
  if (first) state.selectedId = first.id;
  render();
});

cardGrid.addEventListener("click", (event) => {
  const accordionTitle = event.target.closest(".accordion-title");
  if (accordionTitle) {
    const content = accordionTitle.nextElementSibling;
    const icon = accordionTitle.querySelector("strong");
    const isActive = content.classList.toggle("active");
    accordionTitle.setAttribute("aria-expanded", String(isActive));
    icon.textContent = isActive ? "-" : "+";
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const id = actionButton.dataset.id;
    const targetSet = actionButton.dataset.action === "favorite" ? state.favorites : state.mastered;
    if (targetSet.has(id)) {
      targetSet.delete(id);
    } else {
      targetSet.add(id);
      if (actionButton.dataset.action === "mastered") {
        const learnedIds = todayLearnedIds();
        if (!learnedIds.includes(id)) learnedIds.push(id);
      }
    }
    saveState();
    render();
    return;
  }

  const card = event.target.closest(".chunk-card");
  if (card) {
    state.selectedId = card.dataset.id;
    state.modalOpen = true;
    practiceInput.value = "";
    practiceOutput.textContent = "输入关键词或场景后，会从免费句库里推荐适合当前词块的练习句。";
    render();
  }
});

studyModal.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) speak(speakButton.dataset.speak);
});

document.querySelector("#close-modal").addEventListener("click", () => {
  state.modalOpen = false;
  render();
});

document.querySelector("#modal-backdrop").addEventListener("click", () => {
  state.modalOpen = false;
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modalOpen) {
    state.modalOpen = false;
    render();
  }
});

document.querySelector("#speak-main").addEventListener("click", () => {
  speak(getSelectedChunk().phrase.replace("...", ""));
});

if (buyPremiumBtn) {
  const isPaymentConfigured = CREEM_PAYMENT_LINK.startsWith("https://");
  buyPremiumBtn.classList.toggle("is-configured", isPaymentConfigured);
  paymentNote.textContent = isPaymentConfigured
    ? "付款由 Creem 处理。支付成功后会回到成功页。"
    : "下一步：在 Creem 创建产品，把 payment link 填到 app.js 的 CREEM_PAYMENT_LINK。";
  buyPremiumBtn.addEventListener("click", () => {
    if (!isPaymentConfigured) {
      alert(
        `收款链接还没配置。\n\n1. 去 Creem 创建产品：${PREMIUM_PRODUCT_NAME}\n2. 设置 success URL 为 /success\n3. 复制 payment link\n4. 替换 app.js 里的 CREEM_PAYMENT_LINK`,
      );
      return;
    }
    window.location.href = CREEM_PAYMENT_LINK;
  });
}

document.querySelector("#practice-button").addEventListener("click", () => {
  const chunk = getSelectedChunk();
  const raw = practiceInput.value.trim();
  practiceOutput.textContent = renderPracticeMatches(chunk, raw);
  const firstMatch = getPracticeMatches(chunk, raw)[0];
  if (firstMatch) speak(firstMatch.en);
});

document.querySelector("#add-custom-chunk").addEventListener("click", () => {
  const chunk = addCustomChunk(customPhrase.value, customMeaning.value, customScene.value);
  if (!chunk) return;
  customPhrase.value = "";
  customMeaning.value = "";
  customScene.value = "";
  state.selectedId = chunk.id;
  state.category = "全部";
  state.showAllPhrases = false;
  render();
});

document.querySelector("#scan-article").addEventListener("click", scanArticle);

document.querySelector("#save-selection").addEventListener("click", () => {
  const selected = articleInput.value.slice(articleInput.selectionStart, articleInput.selectionEnd).trim();
  const phrase = selected || prompt("输入要加入生词本的英文词块：");
  if (!phrase) return;
  const meaning = prompt("给这个词块写一个中文意思：") || "自定义中文意思";
  const chunk = addCustomChunk(phrase, meaning, "从文章发现");
  if (chunk) {
    articleResults.innerHTML = `<div class="article-result"><strong>${chunk.phrase}</strong><span>已加入生词本：${chunk.meaning}</span></div>` + articleResults.innerHTML;
    render();
  }
});

articleResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-chunk]");
  if (!button) return;
  state.selectedId = button.dataset.openChunk;
  state.modalOpen = true;
  render();
});

document.querySelectorAll(".practice-mode").forEach((button) => {
  button.addEventListener("click", () => {
    state.practiceMode = button.dataset.practiceMode;
    pickQuiz();
    render();
  });
});

document.querySelector("#next-question").addEventListener("click", () => {
  pickQuiz();
  renderPracticeMode();
});

document.querySelector("#check-answer").addEventListener("click", checkQuizAnswer);

quizOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".quiz-option");
  if (!option) return;
  state.selectedChoice = option.dataset.choice;
  document.querySelectorAll(".quiz-option").forEach((item) => item.classList.remove("selected"));
  option.classList.add("selected");
});

quizAnswer.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkQuizAnswer();
});

document.querySelectorAll(".goal-chip").forEach((button) => {
  button.addEventListener("click", () => {
    state.dailyGoal = Number(button.dataset.goal);
    saveState();
    render();
  });
});

checkinButton.addEventListener("click", () => {
  const learned = todayLearnedIds().length;
  if (learned < state.dailyGoal) return;
  state.checkins[dateKey()] = true;
  const streak = getCurrentStreak();
  state.bestStreak = Math.max(state.bestStreak, streak);
  saveState();
  render();
});

document.querySelectorAll(".sample-chip").forEach((button) => {
  button.addEventListener("click", () => {
    practiceInput.value = button.dataset.sample;
    document.querySelector("#practice-button").click();
  });
});

loadMoreBtn.addEventListener("click", () => {
  state.showAllPhrases = true;
  renderCards();
});

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("show", window.scrollY > 300);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("resize", () => {
  renderCards();
});

chooseVoice();
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = chooseVoice;
}

render();
