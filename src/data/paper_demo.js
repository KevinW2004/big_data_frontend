export const papers = [
  {
    "title": "Evasion Attacks against Machine Learning at Test Time",
    "abstract": "In security-sensitive applications, the success of machine learning depends on a thorough vetting of their resistance to adversarial data. In one pertinent, well-motivated attack scenario, an adversary may attempt to evade a deployed system at test time by carefully manipulating attack samples. In this work, we present a simple but effective gradient-based approach that can be exploited to systematically assess the security of several, widely-used classification algorithms against evasion attacks. Following a recently proposed framework for security evaluation, we simulate attack scenarios that exhibit different risk levels for the classifier by increasing the attacker's knowledge of the system and her ability to manipulate attack samples. This gives the classifier designer a better picture of the classifier performance under evasion attacks, and allows him to perform a more informed model selection (or parameter setting). We evaluate our approach on the relevant security task of malware detection in PDF files, and show that such systems can be easily evaded. We also sketch some countermeasures suggested by our analysis.",
    "category": "cs.CR",
    "year": "2013",
    "": ""
  },
  {
    "title": "How Hard is Computing Parity with Noisy Communications",
    "abstract": "We show a tight lower bound of $\\Omega(N \\log\\log N)$ on the number of transmissions required to compute the parity of $N$ input bits with constant error in a noisy communication network of $N$ randomly placed sensors, each having one input bit and communicating with others using local transmissions with power near the connectivity threshold. This result settles the lower bound question left open by Ying, Srikant and Dullerud (WiOpt 06), who showed how the sum of all the $N$ bits can be computed using $O(N \\log\\log N)$ transmissions. The same lower bound has been shown to hold for a host of other functions including majority by Dutta and Radhakrishnan (FOCS 2008). #R##N#Most works on lower bounds for communication networks considered mostly the full broadcast model without using the fact that the communication in real networks is local, determined by the power of the transmitters. In fact, in full broadcast networks computing parity needs $\theta(N)$ transmissions. To obtain our lower bound we employ techniques developed by Goyal, Kindler and Saks (FOCS 05), who showed lower bounds in the full broadcast model by reducing the problem to a model of noisy decision trees. However, in order to capture the limited range of transmissions in real sensor networks, we adapt their definition of noisy decision trees and allow each node of the tree access to only a limited part of the input. Our lower bound is obtained by exploiting special properties of parity computations in such noisy decision trees.",
    "category": "cs.DC",
    "year": "2015",
    "": ""
  },
  {
    "title": "On the Absence of the Rip in Real World Applications of Compressed Sensing and the Rip in Levels",
    "abstract": "The purpose of this paper is twofold. The first is to point out that the Restricted Isometry Property (RIP) does not hold in many applications where compressed sensing is successfully used. This includes fields like Magnetic Resonance Imaging (MRI), Computerized Tomography, Electron Microscopy, Radio Interferometry and Fluorescence Microscopy. We demonstrate that for natural compressed sensing matrices involving a level based reconstruction basis (e.g. wavelets), the number of measurements required to recover all $s$-sparse signals for reasonable $s$ is excessive. In particular, uniform recovery of all $s$-sparse signals is quite unrealistic. This realisation shows that the RIP is insufficient for explaining the success of compressed sensing in various practical applications. The second purpose of the paper is to introduce a new framework based on a generalised RIP-like definition that fits the applications where compressed sensing is used. We show that the shortcomings that show that uniform recovery is unreasonable no longer apply if we instead ask for structured recovery that is uniform only within each of the levels. To examine this phenomenon, a new tool, termed the 'Restricted Isometry Property in Levels' is described and analysed. Furthermore, we show that with certain conditions on the Restricted Isometry Property in Levels, a form of uniform recovery within each level is possible. Finally, we conclude the paper by providing examples that demonstrate the optimality of the results obtained.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "A Promise Theory Perspective on Data Networks",
    "abstract": "Networking is undergoing a transformation throughout our industry. The shift from hardware driven products with ad hoc control to Software Defined Networks is now well underway. In this paper, we adopt the perspective of the Promise Theory to examine the current state of networking technologies so that we might see beyond specific technologies to principles for building flexible and scalable networks. Today's applications are increasingly distributed planet-wide in cloud-like hosting environments. Promise Theory's bottom-up modelling has been applied to server management for many years and lends itself to principles of self-healing, scalability and robustness.",
    "category": "cs.NI",
    "year": "2014",
    "": ""
  },
  {
    "title": "Analysis of Asymptotically Optimal Sampling Based Motion Planning Algorithms for Lipschitz Continuous Dynamical Systems",
    "abstract": "Over the last 20 years significant effort has been dedicated to the development of sampling-based motion planning algorithms such as the Rapidly-exploring Random Trees (RRT) and its asymptotically optimal version (e.g. RRT*). However, asymptotic optimality for RRT* only holds for linear and fully actuated systems or for a small number of non-linear systems (e.g. Dubin's car) for which a steering function is available. The purpose of this paper is to show that asymptotically optimal motion planning for dynamical systems with differential constraints can be achieved without the use of a steering function. We develop a novel analysis on sampling-based planning algorithms that sample the control space. This analysis demonstrated that asymptotically optimal path planning for any Lipschitz continuous dynamical system can be achieved by sampling the control space directly. We also determine theoretical bounds on the convergence rates for this class of algorithms. As the number of iterations increases, the trajectory generated by these algorithms, approaches the optimal control trajectory, with probability one. Simulation results are promising.",
    "category": "cs.RO",
    "year": "2014",
    "": ""
  },
  {
    "title": "The Edge Group Coloring Problem with Applications to Multicast Switching",
    "abstract": "This paper introduces a natural generalization of the classical edge coloring problem in graphs that provides a useful abstraction for two well-known problems in multicast switching. We show that the problem is NP-hard and evaluate the performance of several approximation algorithms, both analytically and experimentally. We find that for random $\\chi$-colorable graphs, the number of colors used by the best algorithms falls within a small constant factor of $\\chi$, where the constant factor is mainly a function of the ratio of the number of outputs to inputs. When this ratio is less than 10, the best algorithms produces solutions that use fewer than $2\\chi$ colors. In addition, one of the algorithms studied finds high quality approximate solutions for any graph with high probability, where the probability of a low quality solution is a function only of the random choices made by the algorithm.",
    "category": "cs.DS",
    "year": "2015",
    "": ""
  },
  {
    "title": "Webvrgis Based City Bigdata 3d Visualization and Analysis",
    "abstract": "This paper shows the WEBVRGIS platform overlying multiple types of data about Shenzhen over a 3d globe. The amount of information that can be visualized with this platform is overwhelming, and the GIS-based navigational scheme allows to have great flexibility to access the different available data sources. For example,visualising historical and forecasted passenger volume at stations could be very helpful when overlaid with other social data.",
    "category": "cs.HC",
    "year": "2015",
    "": ""
  },
  {
    "title": "Information Theoretic Authentication and Secrecy Codes in the Splitting Model",
    "abstract": "In the splitting model, information theoretic authentication codes allow non-deterministic encoding, that is, several messages can be used to communicate a particular plaintext. Certain applications require that the aspect of secrecy should hold simultaneously. Ogata-Kurosawa-Stinson-Saido (2004) have constructed optimal splitting authentication codes achieving perfect secrecy for the special case when the number of keys equals the number of messages. In this paper, we establish a construction method for optimal splitting authentication codes with perfect secrecy in the more general case when the number of keys may differ from the number of messages. To the best knowledge, this is the first result of this type.",
    "category": "cs.CR",
    "year": "2011",
    "": ""
  },
  {
    "title": "Whealth Transforming Telehealth Services",
    "abstract": "A worldwide increase in proportions of older people in the population poses the challenge of managing their increasing healthcare needs within limited resources. To achieve this many countries are interested in adopting telehealth technology. Several shortcomings of state-of-the-art telehealth technology constrain widespread adoption of telehealth services. We present an ensemble-sensing framework - wHealth (short form of wireless health) for effective delivery of telehealth services. It extracts personal health information using sensors embedded in everyday devices and allows effective and seamless communication between patients and clinicians. Due to the non-stigmatizing design, ease of maintenance, simplistic interaction and seamless intervention, our wHealth platform has the potential to enable widespread adoption of telehealth services for managing elderly healthcare. We discuss the key barriers and potential solutions to make the wHealth platform a reality.",
    "category": "cs.CY",
    "year": "2015",
    "": ""
  },
  {
    "title": "Nonparametric Decentralized Sequential Detection via Universal Source Coding",
    "abstract": "We consider nonparametric or universal sequential hypothesis testing problem when the distribution under the null hypothesis is fully known but the alternate hypothesis corresponds to some other unknown distribution. These algorithms are primarily motivated fr om spectrum sensing in Cognitive Radios and intruder detection in wireless sensor networks. We use easily implementable universal lossless source codes to propose simple algorithms for such a setup. The algorithms are first proposed for discrete alphabet. Their performance and asymptotic properties are studied theoretically. Later these are extended to continuous alphabets. Their performance with two well known universal source codes, Lempel-Ziv code and Krichevsky-Trofimov estimator with Arithmetic Enc oder are compared. These algorithms are also compared with the tests using various other nonparametric estimators. Finally a decentralized version utilizing spatial diversity is also proposed. Its performa nce is analysed and asymptotic properties are proved.",
    "category": "cs.IT",
    "year": "2013",
    "": ""
  },
  {
    "title": "Online Learning in Decentralized Multiuser Resource Sharing Problems",
    "abstract": "In this paper, we consider the general scenario of resource sharing in a decentralized system when the resource rewards/qualities are time-varying and unknown to the users, and using the same resource by multiple users leads to reduced quality due to resource sharing. Firstly, we consider a user-independent reward model with no communication between the users, where a user gets feedback about the congestion level in the resource it uses. Secondly, we consider user-specific rewards and allow costly communication between the users. The users have a cooperative goal of achieving the highest system utility. There are multiple obstacles in achieving this goal such as the decentralized nature of the system, unknown resource qualities, communication, computation and switching costs. We propose distributed learning algorithms with logarithmic regret with respect to the optimal allocation. Our logarithmic regret result holds under both i.i.d. and Markovian reward models, as well as under communication, computation and switching costs.",
    "category": "cs.LG",
    "year": "2012",
    "": ""
  },
  {
    "title": "Truthful Secretaries with Budgets",
    "abstract": "We study online auction settings in which agents arrive and depart dynamically in a random (secretary) order, and each agent's private type consists of the agent's arrival and departure times, value and budget. We consider multi-unit auctions with additive agents for the allocation of both divisible and indivisible items. For both settings, we devise truthful mechanisms that give a constant approximation with respect to the auctioneer's revenue, under a large market assumption. For divisible items, we devise in addition a truthful mechanism that gives a constant approximation with respect to the liquid welfare --- a natural efficiency measure for budgeted settings introduced by Dobzinski and Paes Leme [ICALP'14]. Our techniques provide high-level principles for transforming offline truthful mechanisms into online ones, with or without budget constraints. To the best of our knowledge, this is the first work that addresses the non-trivial challenge of combining online settings with budgeted agents.",
    "category": "cs.GT",
    "year": "2015",
    "": ""
  },
  {
    "title": "Improving the Bound on the Rip Constant in Generalized Orthogonal Matching Pursuit",
    "abstract": "The generalized Orthogonal Matching Pursuit (gOMP) is a recently proposed compressive sensing greedy recovery algorithm which generalizes the OMP algorithm by selecting N( ≥ 1) atoms in each iteration. In this letter, we demonstrate that the gOMP can successfully reconstruct a K-sparse signal from a compressed measurement y=Φx by a maximum of K iterations if the sensing matrix Φ satisfies the Restricted Isometry Property (RIP) of order NK, with the RIP constant δNK satisfying δNK <; √N/√K+2√N. The proposed bound is an improvement over the existing bound on δNK. We also show that by increasing the RIP order just by one (i.e., NK+1 from NK), it is possible to refine the bound further to δNK+1 <; √N/√K+√N, which is consistent (for N=1) with the near optimal bound on δK+1 in OMP.",
    "category": "cs.IT",
    "year": "2013",
    "": ""
  },
  {
    "title": "A System for Reflection in C",
    "abstract": "Object-oriented programming languages such as Java and Objective C have become popular for implementing agent-based and other object-based simulations since objects in those languages can {\\em reflect} (i.e. make runtime queries of an object's structure). This allows, for example, a fairly trivial {\\em serialisation} routine (conversion of an object into a binary representation that can be stored or passed over a network) to be written. However C++ does not offer this ability, as type information is thrown away at compile time. Yet C++ is often a preferred development environment, whether for performance reasons or for its expressive features such as operator overloading. #R##N#In this paper, we present the {\\em Classdesc} system which brings many of the benefits of object reflection to C++.",
    "category": "cs.PL",
    "year": "2004",
    "": ""
  },
  {
    "title": "A Bi Level View of Inpainting Based Image Compression",
    "abstract": "Inpainting based image compression approaches, especially linear and non-linear diffusion models, are an active research topic for lossy image compression. The major challenge in these compression models is to find a small set of descriptive supporting points, which allow for an accurate reconstruction of the original image. It turns out in practice that this is a challenging problem even for the simplest Laplacian interpolation model. In this paper, we revisit the Laplacian interpolation compression model and introduce two fast algorithms, namely successive preconditioning primal dual algorithm and the recently proposed iPiano algorithm, to solve this problem efficiently. Furthermore, we extend the Laplacian interpolation based compression model to a more general form, which is based on principles from bi-level optimization. We investigate two different variants of the Laplacian model, namely biharmonic interpolation and smoothed Total Variation regularization. Our numerical results show that significant improvements can be obtained from the biharmonic interpolation model, and it can recover an image with very high quality from only 5% pixels.",
    "category": "cs.CV",
    "year": "2014",
    "": ""
  },
  {
    "title": "Distributed Graph Automata",
    "abstract": "Combining ideas from distributed algorithms and alternating automata, we introduce a new class of finite graph automata that recognize precisely the languages of finite graphs definable in monadic second-order logic. By restricting transitions to be nondeterministic or deterministic, we also obtain two strictly weaker variants of our automata for which the emptiness problem is decidable.",
    "category": "cs.FL",
    "year": "2015",
    "": ""
  },
  {
    "title": "Randomness Efficient Rumor Spreading",
    "abstract": "We study the classical rumor spreading problem, which is used to spread information in an unknown network with $n$ nodes. We present the first protocol for any expander graph $G$ with $n$ nodes and minimum degree $\\Theta(n)$ such that, the protocol informs every node in $O(\\log n)$ rounds with high probability, and uses $O(\\log n\\log\\log n)$ random bits in total. The runtime of our protocol is tight, and the randomness requirement of $O(\\log n\\log\\log n)$ random bits almost matches the lower bound of $\\Omega(\\log n)$ random bits. We further study rumor spreading protocols for more general graphs, and for several graph topologies our protocols are as fast as the classical protocol and use $\\tilde{O}(\\log n)$ random bits in total, in contrast to $O(n\\log^2n)$ random bits used in the well-known rumor spreading push protocol. These results together give us almost full understanding of the randomness requirement for this basic epidemic process. #R##N#Our protocols rely on a novel reduction between rumor spreading processes and branching programs, and this reduction provides a general framework to derandomize these complex and distributed epidemic processes. Interestingly, one cannot simply apply PRGs for branching programs as rumor spreading process is not characterized by small-space computation. Our protocols require the composition of several pseudorandom objects, e.g. pseudorandom generators, and pairwise independent generators. Besides designing rumor spreading protocols, the techniques developed here may have applications in studying the randomness complexity of distributed algorithms.",
    "category": "cs.DS",
    "year": "2013",
    "": ""
  },
  {
    "title": "Back to the Past Source Identification in Diffusion Networks From Partially Observed Cascades",
    "abstract": "When a piece of malicious information becomes rampant in an information diffusion network, can we identify the source node that originally introduced the piece into the network and infer the time when it initiated this? Being able to do so is critical for curtailing the spread of malicious information, and reducing the potential losses incurred. This is a very challenging problem since typically only incomplete traces are observed and we need to unroll the incomplete traces into the past in order to pinpoint the source. In this paper, we tackle this problem by developing a two-stage framework, which first learns a continuous-time diffusion network model based on historical diffusion traces and then identifies the source of an incomplete diffusion trace by maximizing the likelihood of the trace under the learned model. Experiments on both large synthetic and real-world data show that our framework can effectively go back to the past, and pinpoint the source node and its initiation time significantly more accurately than previous state-of-the-arts.",
    "category": "cs.SI",
    "year": "2015",
    "": ""
  },
  {
    "title": "Bayesian Two Sample Tests",
    "abstract": "In this paper, we present two classes of Bayesian approaches to the two-sample problem. Our first class of methods extends the Bayesian t-test to include all parametric models in the exponential family and their conjugate priors. Our second class of methods uses Dirichlet process mixtures (DPM) of such conjugate-exponential distributions as flexible nonparametric priors over the unknown distributions.",
    "category": "cs.LG",
    "year": "2009",
    "": ""
  },
  {
    "title": "Electrical Structure Based Pmu Placement in Electric Power Systems",
    "abstract": "Recent work on complex networks compared the topological and electrical structures of the power grid, taking into account the underlying physical laws that govern the electrical connectivity between various components in the network. A distance metric, namely, resistance distance was introduced to provide a more comprehensive description of interconnections in power systems compared with the topological structure, which is based only on geographic connections between network components. Motivated by these studies, in this paper we revisit the phasor measurement unit (PMU) placement problem by deriving the connectivity matrix of the network using resistance distances between buses in the grid, and use it in the integer program formulations for several standard IEEE bus systems. The main result of this paper is rather discouraging: more number of PMUs are required, compared with those obtained using the topological structure, to meet the desired objective of complete network observability without zero injection measurements. However, in light of recent advances in the electrical structure of the grid, our study provides a more realistic perspective of PMU placement in power systems. By further exploring the connectivity matrix derived using the electrical structure, we devise a procedure to solve the placement problem without resorting to linear programming.",
    "category": "cs.SY",
    "year": "2013",
    "": ""
  },
  {
    "title": "On State Dependent Broadcast Channels with Cooperation",
    "abstract": "In this paper, we investigate problems of communication over physically degraded, state-dependent broadcast channels (BCs) with cooperating decoders. Two different setups are considered and their capacity regions are characterized. First, we study a setting in which one decoder can use a finite capacity link to send the other decoder information regarding the messages or the channel states. In this scenario we analyze two cases: one where noncausal state information is available to the encoder and the strong decoder and the other where state information is available only to the encoder in a causal manner. Second, we examine a setting in which the cooperation between the decoders is limited to taking place before the outputs of the channel are given. In this case, one decoder, which is informed of the state sequence noncausally, can cooperate only to send the other decoder rate-limited information about the state sequence. The proofs of the capacity regions introduce a new method of coding for channels with cooperation between different users, where we exploit the link between the decoders for multiple-binning. Finally, we discuss the optimality of using rate splitting techniques when coding for cooperative BCs. In particular, we show that rate splitting is not necessarily optimal when coding for cooperative BCs by solving an example in which our method of coding outperforms rate splitting.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Detecting Simultaneous Integer Relations for Several Real Vectors",
    "abstract": "An algorithm which either finds an nonzero integer vector m for given t real n-dimensional vectors x1,��� , xt such that x T m = 0 or proves that no such integer vector with norm less than a given bound exists is presented in this paper. The cost of the algorithm is at mostO(n 4 + n 3 log�(X)) exact arithmetic operations in dimension n and the least Euclidean norm�(X) of such integer vectors. It matches the best complexity upper bound known for this problem. Experimental data show that the algorithm is better than an already existi ng algorithm in the literature. In application, the algorit hm is used to get a complete method for finding the minimal polyno mial of an unknown complex algebraic number from its approximation, which runs even faster than the corresponding Maple built-in function.",
    "category": "cs.SC",
    "year": "2010",
    "": ""
  },
  {
    "title": "Shannon Meets Carnot Mutual Information via Thermodynamics",
    "abstract": "In this contribution, the Gaussian channel is represented as an equivalent thermal system allowing to express its input-output mutual information in terms of thermodynamic quantities. This thermodynamic description of the mutual information is based upon a generalization of the $2^{nd}$ thermodynamic law and provides an alternative proof to the Guo-Shamai-Verd\\'{u} theorem, giving an intriguing connection between this remarkable theorem and the most fundamental laws of nature - the laws of thermodynamics.",
    "category": "cs.IT",
    "year": "2008",
    "": ""
  },
  {
    "title": "On List Decodability of Random Rank Metric Codes",
    "abstract": "In the present paper, we consider list decoding for both random rank metric codes and random linear rank metric codes. Firstly, we show that, for arbitrary $0 0$ ($\\epsilon$ and $R$ are independent), if $0 0$ and any $0<\\rho<1$, with high probability a random $F_q$-linear rank metric codes with rate $R=(1-\\rho)(1-b\\rho)-\\epsilon$ can be list decoded up to a fraction $\\rho$ of rank errors with constant list size $L$ satisfying $L\\leq O(\\exp(1/\\epsilon))$.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Dealing with Run Time Variability in Service Robotics Towards a Dsl for Non Functional Properties",
    "abstract": "Service robots act in open-ended, natural environments. Therefore, due to combinatorial explosion of potential situations, it is not possible to foresee all eventualities in advance during robot design. In addition, due to limited resources on a mobile robot, it is not feasible to plan any action on demand. Hence, it is necessary to provide a mechanism to express variability at design-time that can be efficiently resolved on the robot at run-time based on the then available information. In this paper, we introduce a DSL to express run- time variability focused on the execution quality of the robot (in terms of non-functional properties like safety and task efficiency) under changing situations and limited resources. We underpin the applicability of our approach by an example integrated into an overall robotics architecture.",
    "category": "cs.RO",
    "year": "2013",
    "": ""
  },
  {
    "title": "A Characterisation of Context Sensitive Languages by Consensus Games",
    "abstract": "We propose a game for recognising formal languages, in which two players with imperfect information need to coordinate on a common decision, given private input information. The players have a joint objec- tive to avoid an inadmissible decision, in spite of the uncertainty induced by the input. We show that this model of consensus acceptor games characterises context-sensitive languages, and conversely, that winning strategies in such games can be described by context-sensitive languages. This im- plies that it is undecidable whether a consensus game admits a winning strategy, and, even if so, it is PSPACE-hard to execute one. On the pos- itive side, we show that whenever a winning strategy exists, there exists one that can be implemented by a linear bounded automaton.",
    "category": "cs.FL",
    "year": "2015",
    "": ""
  },
  {
    "title": "Data Structures for Approximate Range Counting",
    "abstract": "We present new data structures for approximately counting the number of points in orthogonal range. #R##N#There is a deterministic linear space data structure that supports updates in O(1) time and approximates the number of elements in a 1-D range up to an additive term $k^{1/c}$ in $O(\\log \\log U\\cdot\\log \\log n)$ time, where $k$ is the number of elements in the answer, $U$ is the size of the universe and $c$ is an arbitrary fixed constant. We can estimate the number of points in a two-dimensional orthogonal range up to an additive term $ k^{\\rho}$ in $O(\\log \\log U+ (1/\\rho)\\log\\log n)$ time for any $\\rho>0$. We can estimate the number of points in a three-dimensional orthogonal range up to an additive term $k^{\\rho}$ in $O(\\log \\log U + (\\log\\log n)^3+ (3^v)\\log\\log n)$ time for $v=\\log \\frac{1}{\\rho}/\\log {3/2}+2$.",
    "category": "cs.DS",
    "year": "2009",
    "": ""
  },
  {
    "title": "Holographic Transformation for Quantum Factor Graphs",
    "abstract": "Recently, a general tool called a holographic transformation, which transforms an expression of the partition function to another form, has been used for polynomial-time algorithms and for improvement and understanding of the belief propagation. In this work, the holographic transformation is generalized to quantum factor graphs.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Rooted Trees with Probabilities Revisited",
    "abstract": "Rooted trees with probabilities are convenient to represent a class of random processes with memory. They allow to describe and analyze variable length codes for data compression and distribution matching. In this work, the Leaf-Average Node-Sum Interchange Theorem (LANSIT) and the well-known applications to path length and leaf entropy are re-stated. The LANSIT is then applied to informational divergence. Next, the dierential LANSIT is derived, which allows to write normalized functionals of leaf distributions as an average of functionals of branching distributions. Joint distributions of random variables and the corresponding conditional distributions are special cases of leaf distributions and branching distributions. Using the dierential LANSIT, Pinsker’s inequality is formulated for rooted trees with probabilities, with an application to the approximation of product distributions. In particular, it is shown that if the normalized informational divergence of a distribution and a product distribution approaches zero, then the entropy rate approaches the entropy rate of the product distribution.",
    "category": "cs.IT",
    "year": "2013",
    "": ""
  },
  {
    "title": "Time Critical Social Mobilization",
    "abstract": "The World Wide Web is commonly seen as a platform that can harness the collective abilities of large numbers of people to accomplish tasks with unprecedented speed, accuracy, and scale. To explore the Web’s ability for social mobilization, the Defense Advanced Research Projects Agency (DARPA) held the DARPA Network Challenge, in which competing teams were asked to locate 10 red weather balloons placed at locations around the continental United States. Using a recursive incentive mechanism that both spread information about the task and incentivized individuals to act, our team was able to find all 10 balloons in less than 9 hours, thus winning the Challenge. We analyzed the theoretical and practical properties of this mechanism and compared it with other approaches.",
    "category": "cs.CY",
    "year": "2011",
    "": ""
  },
  {
    "title": "Homomorphic Encryption Theory and Application",
    "abstract": "The goal of this chapter is to present a survey of homomorphic encryption techniques and their applications. After a detailed discussion on the introduction and motivation of the chapter, we present some basic concepts of cryptography. The fundamental theories of homomorphic encryption are then discussed with suitable examples. The chapter then provides a survey of some of the classical homomorphic encryption schemes existing in the current literature. Various applications and salient properties of homomorphic encryption schemes are then discussed in detail. The chapter then introduces the most important and recent research direction in the filed - fully homomorphic encryption. A significant number of propositions on fully homomorphic encryption is then discussed. Finally, the chapter concludes by outlining some emerging research trends in this exicting field of cryptography.",
    "category": "cs.CR",
    "year": "2013",
    "": ""
  },
  {
    "title": "Learning Transformations for Clustering and Classification",
    "abstract": "A low-rank transformation learning framework for subspace clustering and classification is here proposed. Many high-dimensional data, such as face images and motion sequences, approximately lie in a union of low-dimensional subspaces. The corresponding subspace clustering problem has been extensively studied in the literature to partition such high-dimensional data into clusters corresponding to their underlying low-dimensional subspaces. However, low-dimensional intrinsic structures are often violated for real-world observations, as they can be corrupted by errors or deviate from ideal models. We propose to address this by learning a linear transformation on subspaces using matrix rank, via its convex surrogate nuclear norm, as the optimization criteria. The learned linear transformation restores a low-rank structure for data from the same subspace, and, at the same time, forces a a maximally separated structure for data from different subspaces. In this way, we reduce variations within subspaces, and increase separation between subspaces for a more robust subspace clustering. This proposed learned robust subspace clustering framework significantly enhances the performance of existing subspace clustering methods. Basic theoretical results here presented help to further support the underlying framework. To exploit the low-rank structures of the transformed subspaces, we further introduce a fast subspace clustering technique, which efficiently combines robust PCA with sparse modeling. When class labels are present at the training stage, we show this low-rank transformation framework also significantly enhances classification performance. Extensive experiments using public datasets are presented, showing that the proposed approach significantly outperforms state-of-the-art methods for subspace clustering and classification.",
    "category": "cs.CV",
    "year": "2013",
    "": ""
  },
  {
    "title": "Methods for Integrating Knowledge with the Three Weight Optimization Algorithm for Hybrid Cognitive Processing",
    "abstract": "In this paper we consider optimization as an approach for quickly and flexibly developing hybrid cognitive capabilities that are efficient, scalable, and can exploit knowledge to improve solution speed and quality. In this context, we focus on the Three-Weight Algorithm, which aims to solve general optimization problems. We propose novel methods by which to integrate knowledge with this algorithm to improve expressiveness, efficiency, and scaling, and demonstrate these techniques on two example problems (Sudoku and circle packing).",
    "category": "cs.AI",
    "year": "2013",
    "": ""
  },
  {
    "title": "Csma Local Area Networking Under Dynamic Altruism",
    "abstract": "In this paper, we consider medium access control of local area networks (LANs) under limitedinformation conditions as befits a distributed system. Rather than assuming “by rule” conformance to a protocol designed to regulate packet-flow rates (e.g., CSMA windowing), we begin with a noncooperative game framework and build a dynamic altruism term into the net utility. The effects of altruism are analyzed at Nash equilibrium for both the ALOHA and CSMA frameworks in the quasistationary (fictitious play) regime. We consider either power or throughput based costs of networking, and the cases of identical or heterogeneous (independent) users/players. In a numerical study we consider diverse players, and we see that the effects of altruism for similar players can be beneficial in the presence of significant congestion, but excessive altruism may lead to underuse of the channel when demand is low.",
    "category": "cs.NI",
    "year": "2012",
    "": ""
  },
  {
    "title": "Face Frontalization for Alignment and Recognition",
    "abstract": "Recently, it was shown that excellent results can be achieved in both face landmark localization and pose-invariant face recognition. These breakthroughs are attributed to the efforts of the community to manually annotate facial images in many different poses and to collect 3D faces data. In this paper, we propose a novel method for joint face landmark localization and frontal face reconstruction (pose correction) using a small set of frontal images only. By observing that the frontal facial image is the one with the minimum rank from all different poses we formulate an appropriate model which is able to jointly recover the facial landmarks as well as the frontalized version of the face. To this end, a suitable optimization problem, involving the minimization of the nuclear norm and the matrix $\\ell_1$ norm, is solved. The proposed method is assessed in frontal face reconstruction (pose correction), face landmark localization, and pose-invariant face recognition and verification by conducting experiments on $6$ facial images databases. The experimental results demonstrate the effectiveness of the proposed method.",
    "category": "cs.CV",
    "year": "2015",
    "": ""
  },
  {
    "title": "From Bounded Affine Types to Automatic Timing Analysis",
    "abstract": "Bounded linear types have proved to be useful for automated resource analysis and control in functional programming languages. In this paper we introduce an affine bounded linear typing discipline on a general notion of resource which can be modeled in a semiring. For this type system we provide both a general type-inference procedure, parameterized by the decision procedure of the semiring equational theory, and a (coherent) categorical semantics. This is a very useful type-theoretic and denotational framework for many applications to resource-sensitive compilation, and it represents a generalization of several existing type systems. As a non-trivial instance, motivated by our ongoing work on hardware compilation, we present a complex new application to calculating and controlling timing of execution in a (recursion-free) higher-order functional programming language with local store.",
    "category": "cs.PL",
    "year": "2013",
    "": ""
  },
  {
    "title": "An Efficient Way to Perform the Assembly of Finite Element Matrices in Matlab and Octave",
    "abstract": "We describe different optimization techniques to perform the assembly of finite element matrices in Matlab and Octave, from the standard approach to recent vectorized ones, without any low level language used. We finally obtain a simple and efficient vectorized algorithm able to compete in performance with dedicated software such as FreeFEM++. The principle of this assembly algorithm is general, we present it for different matrices in the P1 finite elements case and in linear elasticity. We present numerical results which illustrate the computational costs of the different approaches",
    "category": "cs.NA",
    "year": "2013",
    "": ""
  },
  {
    "title": "How Auto Encoders Could Provide Credit Assignment in Deep Networks via Target Propagation",
    "abstract": "We propose to exploit {\\em reconstruction} as a layer-local training signal for deep learning. Reconstructions can be propagated in a form of target propagation playing a role similar to back-propagation but helping to reduce the reliance on derivatives in order to perform credit assignment across many levels of possibly strong non-linearities (which is difficult for back-propagation). A regularized auto-encoder tends produce a reconstruction that is a more likely version of its input, i.e., a small move in the direction of higher likelihood. By generalizing gradients, target propagation may also allow to train deep networks with discrete hidden units. If the auto-encoder takes both a representation of input and target (or of any side information) in input, then its reconstruction of input representation provides a target towards a representation that is more likely, conditioned on all the side information. A deep auto-encoder decoding path generalizes gradient propagation in a learned way that can could thus handle not just infinitesimal changes but larger, discrete changes, hopefully allowing credit assignment through a long chain of non-linear operations. In addition to each layer being a good auto-encoder, the encoder also learns to please the upper layers by transforming the data into a space where it is easier to model by them, flattening manifolds and disentangling factors. The motivations and theoretical justifications for this approach are laid down in this paper, along with conjectures that will have to be verified either mathematically or experimentally, including a hypothesis stating that such auto-encoder mediated target propagation could play in brains the role of credit assignment through many non-linear, noisy and discrete transformations.",
    "category": "cs.LG",
    "year": "2014",
    "": ""
  },
  {
    "title": "Constrained Parametric Proposals and Pooling Methods for Semantic Segmentation in Rgb D Images",
    "abstract": "We focus on the problem of semantic segmentation based on RGB-D data, with emphasis on analyzing cluttered indoor scenes containing many instances from many visual categories. Our approach is based on a parametric figure-ground intensity and depth-constrained proposal process that generates spatial layout hypotheses at multiple locations and scales in the image followed by a sequential inference algorithm that integrates the proposals into a complete scene estimate. Our contributions can be summarized as proposing the following: (1) a generalization of parametric max flow figure-ground proposal methodology to take advantage of intensity and depth information, in order to systematically and efficiently generate the breakpoints of an underlying spatial model in polynomial time, (2) new region description methods based on second-order pooling over multiple features constructed using both intensity and depth channels, (3) an inference procedure that can resolve conflicts in overlapping spatial partitions, and handles scenes with a large number of objects category instances, of very different scales, (4) extensive evaluation of the impact of depth, as well as the effectiveness of a large number of descriptors, both pre-designed and automatically obtained using deep learning, in a difficult RGB-D semantic segmentation problem with 92 classes. We report state of the art results in the challenging NYU Depth v2 dataset, extended for RMRC 2013 Indoor Segmentation Challenge, where currently the proposed model ranks first, with an average score of 24.61% and a number of 39 classes won. Moreover, we show that by combining second-order and deep learning features, over 15% relative accuracy improvements can be additionally achieved. In a scene classification benchmark, our methodology further improves the state of the art by 24%.",
    "category": "cs.CV",
    "year": "2013",
    "": ""
  },
  {
    "title": "Cooperative Game Theoretic Solution Concepts for Top K Problems",
    "abstract": "The problem of finding the $k$ most critical nodes, referred to as the $top\\text{-}k$ problem, is a very important one in several contexts such as information diffusion and preference aggregation in social networks, clustering of data points, etc. It has been observed in the literature that the value allotted to a node by most of the popular cooperative game theoretic solution concepts, acts as a good measure of appropriateness of that node (or a data point) to be included in the $top\\text{-}k$ set, by itself. However, in general, nodes having the highest $k$ values are not the desirable $top\\text{-}k$ nodes, because the appropriateness of a node to be a part of the $top\\text{-}k$ set depends on other nodes in the set. As this is not explicitly captured by cooperative game theoretic solution concepts, it is necessary to post-process the obtained values in order to output the suitable $top\\text{-}k$ nodes. In this paper, we propose several such post-processing methods and give reasoning behind each of them, and also propose a standalone algorithm that combines cooperative game theoretic solution concepts with the popular greedy hill-climbing algorithm.",
    "category": "cs.SI",
    "year": "2014",
    "": ""
  },
  {
    "title": "Regulation and the Integrity of Spreadsheets in the Information Supply Chain",
    "abstract": "Spreadsheets provide many of the key links between information systems, closing the gap between business needs and the capability of central systems. Recent regulations have brought these vulnerable parts of information supply chains into focus. The risk they present to the organisation depends on the role that they fulfil, with generic differences between their use as modeling tools and as operational applications. Four sections of the Sarbanes-Oxley Act (SOX) are particularly relevant to the use of spreadsheets. Compliance with each of these sections is dependent on maintaining the integrity of those spreadsheets acting as operational applications. This can be achieved manually but at high cost. There are a range of commercially available off-the-shelf solutions that can reduce this cost. These may be divided into those that assist in the debugging of logic and more recently the arrival of solutions that monitor the change and user activity taking place in business-critical spreadsheets. ClusterSeven provides one of these monitoring solutions, highlighting areas of operational risk whilst also establishing a database of information to deliver new business intelligence.",
    "category": "cs.CY",
    "year": "2008",
    "": ""
  },
  {
    "title": "Reconfigurable Wireless Networks",
    "abstract": "Driven by the advent of sophisticated and ubiquitous applications, and the ever-growing need for information, wireless networks are without a doubt steadily evolving into profoundly more complex and dynamic systems. The user demands are progressively rampant, while application requirements continue to expand in both range and diversity. Future wireless networks, therefore, must be equipped with the ability to handle numerous, albeit challenging, requirements. Network reconfiguration, considered as a prominent network paradigm, is envisioned to play a key role in leveraging future network performance and considerably advancing current user experiences. This paper presents a comprehensive overview of reconfigurable wireless networks and an in-depth analysis of reconfiguration at all layers of the protocol stack. Such networks characteristically possess the ability to reconfigure and adapt their hardware and software components and architectures, thus enabling flexible delivery of broad services, as well as sustaining robust operation under highly dynamic conditions. The paper offers a unifying framework for research in reconfigurable wireless networks. This should provide the reader with a holistic view of concepts, methods, and strategies in reconfigurable wireless networks. Focus is given to reconfigurable systems in relatively new and emerging research areas such as cognitive radio networks, cross-layer reconfiguration, and software-defined networks. In addition, modern networks have to be intelligent and capable of self-organization. Thus, this paper discusses the concept of network intelligence as a means to enable reconfiguration in highly complex and dynamic networks. Key processes in network intelligence, such as reasoning, learning, and context awareness, are presented to illustrate how these methods can take reconfiguration to a new level. Finally, the paper is supported with several examples and case studies showing the tremendous impact of reconfiguration on wireless networks.",
    "category": "cs.NI",
    "year": "2015",
    "": ""
  },
  {
    "title": "Contact Representations of Sparse Planar Graphs",
    "abstract": "We study representations of graphs by contacts of circular arcs, CCA-representations for short, where the vertices are interior-disjoint circular arcs in the plane and each edge is realized by an endpoint of one arc touching the interior of another. A graph is (2,k)-sparse if every s-vertex subgraph has at most 2s - k edges, and (2, k)-tight if in addition it has exactly 2n - k edges, where n is the number of vertices. Every graph with a CCA- representation is planar and (2, 0)-sparse, and it follows from known results on contacts of line segments that for k >= 3 every (2, k)-sparse graph has a CCA-representation. Hence the question of CCA-representability is open for (2, k)-sparse graphs with 0 <= k <= 2. We partially answer this question by computing CCA-representations for several subclasses of planar (2,0)-sparse graphs. In particular, we show that every plane (2, 2)-sparse graph has a CCA-representation, and that any plane (2, 1)-tight graph or (2, 0)-tight graph dual to a (2, 3)-tight graph or (2, 4)-tight graph has a CCA-representation. Next, we study CCA-representations in which each arc has an empty convex hull. We characterize the plane graphs that have such a representation, based on the existence of a special orientation of the graph edges. Using this characterization, we show that every plane graph of maximum degree 4 has such a representation, but that finding such a representation for a plane (2, 0)-tight graph with maximum degree 5 is an NP-complete problem. Finally, we describe a simple algorithm for representing plane (2, 0)-sparse graphs with wedges, where each vertex is represented with a sequence of two circular arcs (straight-line segments).",
    "category": "cs.CG",
    "year": "2015",
    "": ""
  },
  {
    "title": "Modularity Aspects of Disjunctive Stable Models",
    "abstract": "Practically all programming languages allow the programmer to split a program into several modules which brings along several advantages in software development. In this paper, we are interested in the area of answer-set programming where fully declarative and nonmonotonic languages are applied. In this context, obtaining a modular structure for programs is by no means straightforward since the output of an entire program cannot in general be composed from the output of its components. To better understand the effects of disjunctive information on modularity we restrict the scope of analysis to the case of disjunctive logic programs (DLPs) subject to stable-model semantics. We define the notion of a DLP-function, where a well-defined input/output interface is provided, and establish a novel module theorem which indicates the compositionality of stable-model semantics for DLP-functions. The module theorem extends the well-known splitting-set theorem and enables the decomposition of DLP-functions given their strongly connected components based on positive dependencies induced by rules. In this setting, it is also possible to split shared disjunctive rules among components using a generalized shifting technique. The concept of modular equivalence is introduced for the mutual comparison of DLP-functions using a generalization of a translation-based verification method.",
    "category": "cs.LO",
    "year": "2009",
    "": ""
  },
  {
    "title": "Replica Symmetric Bound for Restricted Isometry Constant",
    "abstract": "We develop a method for evaluating restricted isometry constants (RICs). This evaluation is reduced to the identification of the zero-points of entropy, which is defined for submatrices that are composed of columns selected from a given measurement matrix. Using the replica method developed in statistical mechanics, we assess RICs for Gaussian random matrices under the replica symmetric (RS) assumption. In order to numerically validate the adequacy of our analysis, we employ the exchange Monte Carlo (EMC) method, which has been empirically demonstrated to achieve much higher numerical accuracy than naive Monte Carlo methods. The EMC method suggests that our theoretical estimation of an RIC corresponds to an upper bound that is tighter than in preceding studies. Physical consideration indicates that our assessment of the RIC could be improved by taking into account the replica symmetry breaking.",
    "category": "cs.IT",
    "year": "2015",
    "": ""
  },
  {
    "title": "Pushdown Abstractions of Javascript",
    "abstract": "We design a family of program analyses for JavaScript that make no approximation in matching calls with returns, exceptions with handlers, and breaks with labels. We do so by starting from an established reduction semantics for JavaScript and systematically deriving its intensional abstract interpretation. Our first step is to transform the semantics into an equivalent low-level abstract machine: the JavaScript Abstract Machine (JAM). We then give an infinite-state yet decidable pushdown machine whose stack precisely models the structure of the concrete program stack. The precise model of stack structure in turn confers precise control-flow analysis even in the presence of control effects, such as exceptions and finally blocks. We give pushdown generalizations of traditional forms of analysis such as k-CFA, and prove the pushdown framework for abstract interpretation is sound and computable.",
    "category": "cs.PL",
    "year": "2011",
    "": ""
  },
  {
    "title": "A Notion of Robustness for Cyber Physical Systems",
    "abstract": "Robustness as a system property describes the degree to which a system is able to function correctly in the presence of disturbances, i.e., unforeseen or erroneous inputs. In this paper, we introduce a notion of robustness termed  input-output dynamical stability  for cyber-physical systems (CPS) which merges existing notions of robustness for continuous systems and discrete systems. The notion captures two intuitive aims of robustness: bounded disturbances have bounded effects and the consequences of a sporadic disturbance disappear over time. We present a design methodology for robust CPS which is based on an abstraction and refinement process. We suggest several novel notions of simulation relations to ensure the soundness of the approach. In addition, we show how such simulation relations can be constructed compositionally. The different concepts and results are illustrated throughout the paper with examples.",
    "category": "cs.SY",
    "year": "2016",
    "": ""
  },
  {
    "title": "Entropy Rate for Hidden Markov Chains with Rare Transitions",
    "abstract": "We consider Hidden Markov Chains obtained by passing a Markov Chain with rare transitions through a noisy memoryless channel. We obtain asymptotic estimates for the entropy of the resulting Hidden Markov Chain as the transition rate is reduced to zero. Let (Xn) be a Markov chain with finite state space S and transition matrix P(p) and let (Yn) be the Hidden Markov chain observed by passing (Xn) through a homogeneous noisy memoryless channel (i.e. Y takes values in a set T, and there exists a matrix Q such that P(Yn = jjXn = i;X n−1 −1 ;X 1+1;Y n−1 −1 ;Y 1 n+1) = Qij). We make the additional assumption on the channel that the rows of Q are distinct. In this case we call the channel statistically distinguishing. We assume that P(p) is of the form I + pA where A is a matrix with negative entries on the diagonal, non-negative entries in the off-diagonal terms and zero row sums. We further assume that for small positive p, the Markov chain with transition matrix P(p) is irreducible. Notice that for Markov chains of this form, the invariant distribution (�i)i2 S does not depend on p. In this case, we say that for small positive values of p, the Markov chain is in a rare transition regime. We will adopt the convention that H is used to denote the entropy of a fi- nite partition, whereas h is used to denote the entropy of a process (the en- tropy rate in information theory terminology). Given an irreducible Markov chain with transition matrix P, we let h(P) be the entropy of the Markov chain (i.e. h(P) = − P i;jiPij logPij wherei is the (unique) invariant distribution of the Markov chain and as usual we adopt the convention that 0log0 = 0). We also let Hchan(i) be the entropy of the output of the channel when the input symbol is i (i.e. Hchan(i) = − P j2 T Qij logQij). Let h(Y ) denote the entropy of Y (i.e.",
    "category": "cs.IT",
    "year": "2010",
    "": ""
  },
  {
    "title": "Memristors Can Implement Fuzzy Logic",
    "abstract": "In our work we propose implementing fuzzy logic using memristors. Min and max operations are done by antipodally configured memristor circuits that may be assembled into computational circuits. We discuss computational power of such circuits with respect to m-efficiency and experimentally observed behavior of memristive devices. Circuits implemented with real devices are likely to manifest learning behavior. The circuits presented in the work may be applicable for instance in fuzzy classifiers.",
    "category": "cs.ET",
    "year": "2011",
    "": ""
  },
  {
    "title": "Asymptotic Capacity of Wireless Ad Hoc Networks with Realistic Links Under a Honey Comb Topology",
    "abstract": "We consider the effects of Rayleigh fading and lognormal shadowing in the physical interference model for all the successful transmissions of traffic across the network. New bounds are derived for the capacity of a given random ad hoc wireless network that reflect packet drop or capture probability of the transmission links. These bounds are based on a simplified network topology termed as honey-comb topology under a given routing and scheduling scheme.",
    "category": "cs.IT",
    "year": "2007",
    "": ""
  },
  {
    "title": "On the Performance of Selection Cooperation with Imperfect Channel Estimation",
    "abstract": "In this paper, we investigate the performance of selection cooperation in the presence of imperfect channel estimation. In particular, we consider a cooperative scenario with multiple relays and amplifyand-forward protocol over frequency flat fading channels. I n the selection scheme, only the “best” relay which maximizes the effective signal-to-noise ratio (SNR) at the receiver end is selected. We present lower and upper bounds on the effective SNR and derive closed-form expressions for the average symbol error rate (ASER), outage probability and average capacity per bandwidth of the received signal in the presence of channel estimation errors. A simulation study is presented to corroborate the analytical results and to demonstrate the performance of relay selection with imperfect channel estimation.",
    "category": "cs.IT",
    "year": "2011",
    "": ""
  },
  {
    "title": "Informetric Analyses of Knowledge Organization Systems Koss",
    "abstract": "A knowledge organization system (KOS) is made up of concepts and semantic relations between the concepts which represent a knowledge domain terminologically. We distinguish between five approaches to KOSs: nomenclatures, classification systems, thesauri, ontologies and, as a borderline case of KOSs, folksonomies. The research question of this paper is: How can we informetrically analyze the effectiveness of KOSs? Quantitative informetric measures and indicators allow for the description, for comparative analyses as well as for evaluation of KOSs and their quality. We describe the state of the art of KOS evaluation. Most of the evaluation studies found in the literature are about ontologies. We introduce measures of the structure of KOSs (e.g., groundedness, tangledness, fan-out factor, or granularity) and indicators of KOS quality (completeness, consistency, overlap, and use).",
    "category": "cs.DL",
    "year": "2015",
    "": ""
  },
  {
    "title": "Latent Topic Models for Hypertext",
    "abstract": "Latent topic models have been successfully applied as an unsupervised topic discovery technique in large document collections. With the proliferation of hypertext document collection such as the Internet, there has also been great interest in extending these approaches to hypertext [6, 9]. These approaches typically model links in an analogous fashion to how they model words - the document-link co-occurrence matrix is modeled in the same way that the document-word co-occurrence matrix is modeled in standard topic models. In this paper we present a probabilistic generative model for hypertext document collections that explicitly models the generation of links. Specifically, links from a word w to a document d depend directly on how frequent the topic of w is in d, in addition to the in-degree of d. We show how to perform EM learning on this model efficiently. By not modeling links as analogous to words, we end up using far fewer free parameters and obtain better link prediction results.",
    "category": "cs.IR",
    "year": "2012",
    "": ""
  },
  {
    "title": "Complete Security Framework for Wireless Sensor Networks",
    "abstract": "Security concern for a Sensor Networks and level of security desired may differ according to application specific needs where the sensor networks are deployed. Till now, most of the security solutions proposed for sensor networks are layer wise i.e a particular solution is applicable to single layer itself. So, to integrate them all is a new research challenge. In this paper we took up the challenge and have proposed an integrated comprehensive security framework that will provide security services for all services of sensor network. We have added one extra component i.e. Intelligent Security Agent (ISA) to assess level of security and cross layer interactions. This framework has many components like Intrusion Detection System, Trust Framework, Key Management scheme and Link layer communication protocol. We have also tested it on three different application scenarios in Castalia and Omnet++ simulator.",
    "category": "cs.CR",
    "year": "2009",
    "": ""
  },
  {
    "title": "Neural Dissimilarity Indices That Predict Oddball Detection in Behaviour",
    "abstract": "Neuroscientists have recently shown that images that are difficult to find in visual search elicit similar patterns of firing across a population of recorded neurons. The $L^{1}$ distance between firing rate vectors associated with two images was strongly correlated with the inverse of decision time in behaviour. But why should decision times be correlated with $L^{1}$ distance? What is the decision-theoretic basis? In our decision theoretic formulation, we modeled visual search as an active sequential hypothesis testing problem with switching costs. Our analysis suggests an appropriate neuronal dissimilarity index which correlates equally strongly with the inverse of decision time as the $L^{1}$ distance. We also consider a number of other possibilities such as the relative entropy (Kullback-Leibler divergence) and the Chernoff entropy of the firing rate distributions. A more stringent test of equality of means, which would have provided a strong backing for our modeling fails for our proposed as well as the other already discussed dissimilarity indices. However, test statistics from the equality of means test, when used to rank the indices in terms of their ability to explain the observed results, places our proposed dissimilarity index at the top followed by relative entropy, Chernoff entropy and the $L^{1}$ indices. Computations of the different indices requires an estimate of the relative entropy between two Poisson point processes. An estimator is developed and is shown to have near unbiased performance for almost all operating regions.",
    "category": "cs.IT",
    "year": "2015",
    "": ""
  },
  {
    "title": "Network Maps of Technology Fields a Comparative Analysis of Relatedness Measures",
    "abstract": "Network maps of technology fields extracted from patent databases are useful to aid in technology forecasting and road mapping. Constructing such a network requires a measure of the relatedness between pairs of technology fields. Despite the existence of various relatedness measures in the literature, it is unclear how to consistently assess and compare them, and which ones to select for constructing technology network maps. This ambiguity has limited the use of technology network maps for technology forecasting and roadmap analyses. To address this challenge, here we propose a strategy to evaluate alternative relatedness measures and identify the superior ones by comparing the structure properties of resulting technology networks. Using United States patent data, we execute the strategy through a comparative analysis of twelve relatedness measures, which quantify inter-field knowledge input similarity, field-crossing diversification likelihood or frequency of innovation agents, and co-occurrences of technology classes in the same patents. Our comparative analyses suggest two superior relatedness measures, normalized co-reference and inventor diversification likelihood, for constructing technology network maps.",
    "category": "cs.SI",
    "year": "2015",
    "": ""
  },
  {
    "title": "Continuous Double Auction Mechanism and Bidding Strategies in Cloud Computing Markets",
    "abstract": "Cloud computing has been an emerging model which aims at allowing customers to utilize computing resources hosted by Cloud Service Providers (CSPs). More and more consumers rely on CSPs to supply computing and storage service on the one hand, and CSPs try to attract consumers on favorable terms on the other. In such competitive cloud computing markets, pricing policies are critical to market efficiency. While CSPs often publish their prices and charge users according to the amount of resources they consume, auction mechanism is rarely applied. In fact a feasible auction mechanism is the most effective method for allocation of resources, especially double auction is more efficient and flexible for it enables buyers and sellers to enter bids and offers simultaneously. In this paper we bring up an electronic auction platform for cloud, and a cloud Continuous Double Auction (CDA) mechanism is formulated to match orders and facilitate trading based on the platform. Some evaluating criteria are defined to analyze the efficiency of markets and strategies. Furthermore, the selection of bidding strategies for the auction plays a very important role for each player to maximize its own profit, so we developed a novel bidding strategy for cloud CDA, BH-strategy, which is a two-stage game bidding strategy. At last we designed three simulation scenarios to compare the performance of our strategy with other dominating bidding strategies and proved that BH-strategy has better performance on surpluses, successful transactions and market efficiency. In addition, we discussed that our cloud CDA mechanism is feasible for cloud computing resource allocation.",
    "category": "cs.DC",
    "year": "2013",
    "": ""
  },
  {
    "title": "The Abc Problem for Gabor Systems",
    "abstract": "A Gabor system generated by a window function $\\phi$ and a rectangular lattice $a \\Z\\times \\Z/b$ is given by $${\\mathcal G}(\\phi, a \\Z\\times \\Z/b):=\\{e^{-2\\pi i n t/b} \\phi(t- m a):\\ (m, n)\\in \\Z\\times \\Z\\}.$$ One of fundamental problems in Gabor analysis is to identify window functions $\\phi$ and time-frequency shift lattices $a \\Z\\times \\Z/b$ such that the corresponding Gabor system ${\\mathcal G}(\\phi, a \\Z\\times \\Z/b)$ is a Gabor frame for $L^2(\\R)$, the space of all square-integrable functions on the real line $\\R$. In this paper, we provide a full classification of triples $(a,b,c)$ for which the Gabor system ${\\mathcal G}(\\chi_I, a \\Z\\times \\Z/b)$ generated by the ideal window function $\\chi_I$ on an interval $I$ of length $c$ is a Gabor frame for $L^2(\\R)$. For the classification of such triples $(a, b, c)$ (i.e., the $abc$-problem for Gabor systems), we introduce maximal invariant sets of some piecewise linear transformations and establish the equivalence between Gabor frame property and triviality of maximal invariant sets. We then study dynamic system associated with the piecewise linear transformations and explore various properties of their maximal invariant sets. By performing holes-removal surgery for maximal invariant sets to shrink and augmentation operation for a line with marks to expand, we finally parameterize those triples $(a, b, c)$ for which maximal invariant sets are trivial. The novel techniques involving non-ergodicity of dynamical systems associated with some novel non-contractive and non-measure-preserving transformations lead to our arduous answer to the $abc$-problem for Gabor systems.",
    "category": "cs.IT",
    "year": "2016",
    "": ""
  },
  {
    "title": "Inference Less Density Estimation Using Copula Bayesian Networks",
    "abstract": "We consider learning continuous probabilistic graphical models in the face of missing data. For non-Gaussian models, learning the parameters and structure of such models depends on our ability to perform efficient inference, and can be prohibitive even for relatively modest domains. Recently, we introduced the Copula Bayesian Network (CBN) density model - a flexible framework that captures complex high-dimensional dependency structures while offering direct control over the univariate marginals, leading to improved generalization. In this work we show that the CBN model also offers significant computational advantages when training data is partially observed. Concretely, we leverage on the specialized form of the model to derive a computationally amenable learning objective that is a lower bound on the log-likelihood function. Importantly, our energy-like bound circumvents the need for costly inference of an auxiliary distribution, thus facilitating practical learning of highdimensional densities. We demonstrate the effectiveness of our approach for learning the structure and parameters of a CBN model for two reallife continuous domains.",
    "category": "cs.LG",
    "year": "2012",
    "": ""
  },
  {
    "title": "Optimal Detection of Intersections Between Convex Polyhedra",
    "abstract": "For a polyhedron $P$ in $\\mathbb{R}^d$, denote by $|P|$ its combinatorial complexity, i.e., the number of faces of all dimensions of the polyhedra. In this paper, we revisit the classic problem of preprocessing polyhedra independently so that given two preprocessed polyhedra $P$ and $Q$ in $\\mathbb{R}^d$, each translated and rotated, their intersection can be tested rapidly. #R##N#For $d=3$ we show how to perform such a test in $O(\\log |P| + \\log |Q|)$ time after linear preprocessing time and space. This running time is the best possible and improves upon the last best known query time of $O(\\log|P| \\log|Q|)$ by Dobkin and Kirkpatrick (1990). #R##N#We then generalize our method to any constant dimension $d$, achieving the same optimal $O(\\log |P| + \\log |Q|)$ query time using a representation of size $O(|P|^{\\lfloor d/2\\rfloor + \\varepsilon})$ for any $\\varepsilon>0$ arbitrarily small. This answers an even older question posed by Dobkin and Kirkpatrick 30 years ago. #R##N#In addition, we provide an alternative $O(\\log |P| + \\log |Q|)$ algorithm to test the intersection of two convex polygons $P$ and $Q$ in the plane.",
    "category": "cs.CG",
    "year": "2013",
    "": ""
  },
  {
    "title": "Limits of Rush Hour Logic Complexity",
    "abstract": "Rush Hour Logic was introduced in [Flake&Baum99] as a model of computation inspired by the ``Rush Hour'' toy puzzle, in which cars can move horizontally or vertically within a parking lot. The authors show how the model supports polynomial space computation, using certain car configurations as building blocks to construct boolean circuits for a cpu and memory. They consider the use of cars of length 3 crucial to their construction, and conjecture that cars of size 2 only, which we'll call `Size 2 Rush Hour', do not support polynomial space computation. We settle this conjecture by showing that the required building blocks are constructible in Size 2 Rush Hour. Furthermore, we consider Unit Rush Hour, which was hitherto believed to be trivial, show its relation to maze puzzles, and provide empirical support for its hardness.",
    "category": "cs.CC",
    "year": "2005",
    "": ""
  },
  {
    "title": "New Separation Between S F and Bs F",
    "abstract": "In this note we give a new separation between sensitivity and block sensitivity of Boolean functions: $bs(f)=(2/3)s(f)^2-(1/3)s(f)$.",
    "category": "cs.CC",
    "year": "2011",
    "": ""
  },
  {
    "title": "A Survey on Handover Management in Mobility Architectures",
    "abstract": "\"This work presents a comprehensive and structured taxonomy of available techniques for managing the handover process in mobility architectures. Representative works from the existing literature have been divided into appropriate categories",
    "category": "based on their ability to support horizontal handovers",
    "year": "vertical handovers and multihoming. We describe approaches designed to work on the current Internet (i.e. IPv4-based networks)",
    "": ""
  },
  {
    "title": "Many Task Computing and Blue Waters",
    "abstract": "This report discusses many-task computing (MTC) generically and in the context of the proposed Blue Waters systems, which is planned to be the largest NSF-funded supercomputer when it begins production use in 2012. The aim of this report is to inform the BW project about MTC, including understanding aspects of MTC applications that can be used to characterize the domain and understanding the implications of these aspects to middleware and policies. Many MTC applications do not neatly fit the stereotypes of high-performance computing (HPC) or high-throughput computing (HTC) applications. Like HTC applications, by definition MTC applications are structured as graphs of discrete tasks, with explicit input and output dependencies forming the graph edges. However, MTC applications have significant features that distinguish them from typical HTC applications. In particular, different engineering constraints for hardware and software must be met in order to support these applications. HTC applications have traditionally run on platforms such as grids and clusters, through either workflow systems or parallel programming systems. MTC applications, in contrast, will often demand a short time to solution, may be communication intensive or data intensive, and may comprise very short tasks. Therefore, hardware and software for MTC must be engineered to support the additional communication and I/O and must minimize task dispatch overheads. The hardware of large-scale HPC systems, with its high degree of parallelism and support for intensive communication, is well suited for MTC applications. However, HPC systems often lack a dynamic resource-provisioning feature, are not ideal for task communication via the file system, and have an I/O system that is not optimized for MTC-style applications. Hence, additional software support is likely to be required to gain full benefit from the HPC hardware.",
    "category": "cs.DC",
    "year": "2012",
    "": ""
  },
  {
    "title": "Identifying Reliable Annotations for Large Scale Image Segmentation",
    "abstract": "\"Challenging computer vision tasks",
    "category": "in particular semantic image segmentation",
    "year": "require large training sets of annotated images. While obtaining the actual images is often unproblematic",
    "": ""
  },
  {
    "title": "Improved Analysis for Subspace Pursuit Algorithm in Terms of Restricted Isometry Constant",
    "abstract": "In the context of compressed sensing (CS), both Subspace Pursuit (SP) and Compressive Sampling Matching Pursuit (CoSaMP) are very important iterative greedy recovery algorithms which could reduce the recovery complexity greatly comparing with the well-known $\\ell_1$-minimization. Restricted isometry property (RIP) and restricted isometry constant (RIC) of measurement matrices which ensure the convergency of iterative algorithms play key roles for the guarantee of successful reconstructions. In this paper, we show that for the $s$-sparse recovery, the RICs are enlarged to $\\delta_{3s}<0.4859$ for SP and $\\delta_{4s}<0.5$ for CoSaMP, which improve the known results significantly. The proposed results also apply to almost sparse signal and corrupted measurements.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Squares of 3 Sun Free Split Graphs",
    "abstract": "AbstractThesquareofagraphG,denotedbyG 2 ,isobtainedfromGbyputtinganedge between twodistinct verticeswhenevertheirdistanceis two. ThenG is called a square root of G 2 . Deciding whether a given graph has asquarerootisknowntobeNP-complete,eveniftherootisrequiredtobeasplit graph,thatis,agraphinwhichthevertexsetcanbepartitionedintoastablesetandaclique.Wegiveawiderangeofpolynomialtimesolvablecasesfortheproblemofrecognizing ifagivengraph isthesquareofsomespecial kindofsplitgraph. To the best of our knowledge, our result properly contains allpreviously known such cases. Ourpolynomial time algorithms are buildonastructuralinvestigationofgraphsthatadmitasplitsquarerootthatis 3-sun-free, and may pave the way toward a dichotomy theorem forrecognizingsquaresof(3-sun-free)splitgraphs.Keywords: Squareofgraphs,squareofsplitgraphs.2010 MSC:05C75,05C85. 1 Introduction The k-th power of a graph G, written G k , is obtained from G by adding newedges between any two diﬀerent vertices at distance at most k in G. In casek= 2, G",
    "category": "cs.CC",
    "year": "2014",
    "": ""
  },
  {
    "title": "Tree Dynamics for Peer to Peer Streaming",
    "abstract": "This paper presents an asynchronous distributed algorithm to manage multiple trees for peer-to-peer streaming in a flow level model. It is assumed that videos are cut into substreams, with or without source coding, to be distributed to all nodes. The algorithm guarantees that each node receives sufficiently many substreams within delay logarithmic in the number of peers. The algorithm works by constantly updating the topology so that each substream is distributed through trees to as many nodes as possible without interference. Competition among trees for limited upload capacity is managed so that both coverage and balance are achieved. The algorithm is robust in that it efficiently eliminates cycles and maintains tree structures in a distributed way. The algorithm favors nodes with higher degree, so it not only works for live streaming and video on demand, but also in the case a few nodes with large degree act as servers and other nodes act as clients. #R##N#A proof of convergence of the algorithm is given assuming instantaneous update of depth information, and for the case of a single tree it is shown that the convergence time is stochastically tightly bounded by a small constant times the log of the number of nodes. These theoretical results are complemented by simulations showing that the algorithm works well even when most assumptions for the theoretical tractability do not hold.",
    "category": "cs.DS",
    "year": "2013",
    "": ""
  },
  {
    "title": "Stochastic Ordering of Interferences in Large Scale Wireless Networks",
    "abstract": "Stochastic orders are binary relations defined on probability distributions which capture intuitive notions like being larger or being more variable. This paper introduces stochastic ordering of interference distributions in large-scale networks modeled as point process. Interference is the main performance-limiting factor in most wireless networks, thus it is important to understand its statistics. Since closed-form results for the distribution of interference for such networks are only available in limited cases, interference of networks are compared using stochastic orders, even when closed form expressions for interferences are not tractable. We show that the interference from a large-scale network depends on the fading distributions with respect to the stochastic Laplace transform order. The condition for path-loss models is also established to have stochastic ordering between interferences. The stochastic ordering of interferences between different networks are also shown. Monte-Carlo simulations are used to supplement our analytical results.",
    "category": "cs.IT",
    "year": "2012",
    "": ""
  },
  {
    "title": "Earthquake Disaster Based Efficient Resource Utilization Technique in Iaas Cloud",
    "abstract": "Cloud Computing is an emerging area. The main aim of the initial search-and-rescue period after strong earthquakes is to reduce the whole number of mortalities. One main trouble rising in this period is to and the greatest assignment of available resources to functioning zones. For this issue a dynamic optimization model is presented. The model uses thorough descriptions of the operational zones and of the available resources to determine the resource performance and efficiency for different workloads related to the response. A suitable solution method for the model is offered as well. In this paper, Earthquake Disaster Based Resource Scheduling (EDBRS) Framework has been proposed. The allocation of resources to cloud workloads based on urgency (emergency during Earthquake Disaster). Based on this criterion, the resource scheduling algorithm has been proposed. The performance of the proposed algorithm has been assessed with the existing common scheduling algorithms through the CloudSim. The experimental results show that the proposed algorithm outperforms the existing algorithms by reducing execution cost and time of cloud consumer workloads submitted to the cloud.",
    "category": "cs.DC",
    "year": "2013",
    "": ""
  },
  {
    "title": "On Descriptional Complexity of the Planarity Problem for Gauss Words",
    "abstract": "In this paper we investigate the descriptional complexity of knot theoretic problems and show upper bounds for planarity problem of signed and unsigned knot diagrams represented by Gauss words. Since a topological equivalence of knots can involve knot diagrams with arbitrarily many crossings then Gauss words will be considered as strings over an infinite (unbounded) alphabet. For establishing the upper bounds on recognition of knot properties, we study these problems in a context of automata models over an infinite alphabet.",
    "category": "cs.FL",
    "year": "2009",
    "": ""
  },
  {
    "title": "Multi Access Mimo Systems with Finite Rate Channel State Feedback",
    "abstract": "This paper characterizes the effect of finite rate channel state feedback on the sum rate of a multi-access multiple-input multiple-output (MIMO) system. We propose to control the users jointly, specifically, we first choose the users jointly and then select the corresponding beamforming vectors jointly. To quantify the sum rate, this paper introduces the composite Grassmann manifold and the composite Grassmann matrix. By characterizing the distortion rate function on the composite Grassmann manifold and calculating the logdet function of a random composite Grassmann matrix, a good sum rate approximation is derived. According to the distortion rate function on the composite Grassmann manifold, the loss due to finite beamforming decreases exponentially as the feedback bits on beamforming increases.",
    "category": "cs.IT",
    "year": "2007",
    "": ""
  },
  {
    "title": "An Information Theoretic Perspective of the Poisson Approximation via the Chen Stein Method",
    "abstract": "The first part of this work considers the entropy of the sum of ( possibly dependent and non-identically distributed) Bernoulli random variables. Upper bounds on the error that follows from an approximation of this entropy by the entropy of a Poisson random variable with the same mean are derived via the Chen-Stein method. The second part of this work derives new lower bounds on the total variation distance and relative entropy between the distribution of the sum of independent Bernoulli random variables and the Poisson distribution. The starting point of the derivation of the new bounds in the second part of this work is an introduction of a new lower bound on the total variation distance, whose derivation generalizes and refines the anal ysis by Barbour and Hall (1984), based on the Chen-Stein method for the Poisson approximation. A new lower bound on the relative entropy between these two distributions is introd uced, and this lower bound is compared to a previously reported upper bound on the relative entropy by Kontoyiannis et al. (2005). The derivation of the new lower bound on the relative entropy follows from the new lower bound on the total variation distance, combined with a distribution-dependent refine ment of Pinsker’s inequality by Ordentlich and Weinberger (2005). Upper and lower bounds on the Bhattacharyya parameter, Chernoff information and Hellinger distance between the distribution of the sum of independent Bernoulli random variables and the Poisson distribution with the same mean are derived as well via some relations between these quantities with the total variation distance and the relative entropy. The analysis in this work combines elements of information theory with the Chen-Stein method for the Poisson approximation. The resulting bounds are easy to compute, and their applicability is exemplified.",
    "category": "cs.IT",
    "year": "2012",
    "": ""
  },
  {
    "title": "A Set and Collection Lemma",
    "abstract": "\"A set S is independent if no two vertices from S are adjacent. In this paper we prove that if F is a collection of maximum independent sets of a graph",
    "category": "then there is a matching from S-{intersection of all members of F} into {union of all members of F}-S",
    "year": "for every independent set S. Based on this finding we give alternative proofs for a number of well-known lemmata",
    "": ""
  },
  {
    "title": "Learning Economic Parameters From Revealed Preferences",
    "abstract": "A recent line of work, starting with Beigman and Vohra (2006) and Zadimoghaddam and Roth (2012), has addressed the problem of {\\em learning} a utility function from revealed preference data. The goal here is to make use of past data describing the purchases of a utility maximizing agent when faced with certain prices and budget constraints in order to produce a hypothesis function that can accurately forecast the {\\em future} behavior of the agent. #R##N#In this work we advance this line of work by providing sample complexity guarantees and efficient algorithms for a number of important classes. By drawing a connection to recent advances in multi-class learning, we provide a computationally efficient algorithm with tight sample complexity guarantees ($\\Theta(d/\\epsilon)$ for the case of $d$ goods) for learning linear utility functions under a linear price model. This solves an open question in Zadimoghaddam and Roth (2012). Our technique yields numerous generalizations including the ability to learn other well-studied classes of utility functions, to deal with a misspecified model, and with non-linear prices.",
    "category": "cs.GT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Towards Adapting Imagenet to Reality Scalable Domain Adaptation with Implicit Low Rank Transformations",
    "abstract": "Images seen during test time are often not from the same distribution as images used for learning. This problem, known as domain shift, occurs when training classifiers from object-centric internet image databases and trying to apply them directly to scene understanding tasks. The consequence is often severe performance degradation and is one of the major barriers for the application of classifiers in real-world systems. In this paper, we show how to learn transform-based domain adaptation classifiers in a scalable manner. The key idea is to exploit an implicit rank constraint, originated from a max-margin domain adaptation formulation, to make optimization tractable. Experiments show that the transformation between domains can be very efficiently learned from data and easily applied to new categories. This begins to bridge the gap between large-scale internet image collections and object images captured in everyday life environments.",
    "category": "cs.CV",
    "year": "2013",
    "": ""
  },
  {
    "title": "Using Multiple Criteria Methods to Evaluate Community Partitions",
    "abstract": "Community detection is one of the most studied problems on complex networks. Although hundreds of methods have been proposed so far, there is still no universally accepted formal definition of what is a good community. As a consequence, the problem of the evaluation and the comparison of the quality of the solutions produced by these algorithms is still an open question, despite constant progress on the topic. In this article, we investigate how using a multi-criteria evaluation can solve some of the existing problems of community evaluation, in particular the question of multiple equally-relevant solutions of different granularity. After exploring several approaches, we introduce a new quality function, called MDensity, and propose a method that can be related both to a widely used community detection metric, the Modularity, and to the Precision/Recall approach, ubiquitous in information retrieval.",
    "category": "cs.SI",
    "year": "2015",
    "": ""
  },
  {
    "title": "Incremental Adaptation Strategies for Neural Network Language Models",
    "abstract": "It is today acknowledged that neural network language models outperform backoff language models in applications like speech recognition or statistical machine translation. However, training these models on large amounts of data can take several days. We present efficient techniques to adapt a neural network language model to new data. Instead of training a completely new model or relying on mixture approaches, we propose two new methods: continued training on resampled data or insertion of adaptation layers. We present experimental results in an CAT environment where the post-edits of professional translators are used to improve an SMT system. Both methods are very fast and achieve significant improvements without overfitting the small adaptation data.",
    "category": "cs.NE",
    "year": "2014",
    "": ""
  },
  {
    "title": "Optimal Point to Point Codes in Interference Channels an Incremental I Mmse Approach",
    "abstract": "\"A recent result of the authors shows a so-called I-MMSE-like relationship that",
    "category": "for the two-user Gaussian interference channel",
    "year": "an I-MMSE relationship holds in the limit",
    "": ""
  },
  {
    "title": "A Combined Approach for Constraints over Finite Domains and Arrays",
    "abstract": "Arrays are ubiquitous in the context of software verication. However, eective reasoning over arrays is still rare in CP, as local reasoning is dramatically ill-conditioned for constraints over arrays. In this paper, we propose an approach com- bining both global symbolic reasoning and local consistency ltering in order to solve constraint systems involving arrays (with accesses, updates and size constraints) and nite-domain constraints over their elements and indexes. Our approach, named fdcc, is based on a combination of a congruence closure algorithm for the standard theory of arrays and a CP solver over nite domains. The tricky part of the work lies in the bi- directional communication mechanism between both solvers. We identify the signicant information to share, and design ways to master the communication overhead. Exper- iments on random instances show that fdcc solves more formulas than any portfolio combination of the two solvers taken in isolation, while overhead is kept reasonable.",
    "category": "cs.LO",
    "year": "2013",
    "": ""
  },
  {
    "title": "Optimization Design and Analysis of Systematic Lt Codes over Awgn Channel",
    "abstract": "In this paper, we study systematic Luby Transform (SLT) codes over additive white Gaussian noise (AWGN) channel. We introduce the encoding scheme of SLT codes and give the bipartite graph for iterative belief propagation (BP) decoding algorithm. Similar to low-density parity-check codes, Gaussian approximation (GA) is applied to yield asymptotic performance of SLT codes. Recent work about SLT codes has been focused on providing better encoding and decoding algorithms and design of degree distributions. In our work, we propose a novel linear programming method to optimize the degree distribution. Simulation results show that the proposed distributions can provide better bit-error-ratio (BER) performance. Moreover, we analyze the lower bound of SLT codes and offer closed form expressions.",
    "category": "cs.IT",
    "year": "2015",
    "": ""
  },
  {
    "title": "Truth and Envy in Capacitated Allocation Games",
    "abstract": "We study auctions with additive valuations where agents have a limit on the number of items they may receive. We refer to this setting as capacitated allocation games. We seek truthful and envy free mechanisms that maximize the social welfare. I.e., where agents have no incentive to lie and no agent seeks to exchange outcomes with another. In 1983, Leonard showed that VCG with Clarke Pivot payments (which is known to be truthful, individually rational, and have no positive transfers), is also an envy free mechanism for the special case of n items and n unit capacity agents. We elaborate upon this problem and show that VCG with Clarke Pivot payments is envy free if agent capacities are all equal. When agent capacities are not identical, we show that there is no truthful and envy free mechanism that maximizes social welfare if one disallows positive transfers. For the case of two agents (and arbitrary capacities) we show a VCG mechanism that is truthful, envy free, and individually rational, but has positive transfers. We conclude with a host of open problems that arise from our work.",
    "category": "cs.GT",
    "year": "2010",
    "": ""
  },
  {
    "title": "Smt Based Bounded Model Checking of Fixed Point Digital Controllers",
    "abstract": "Digital controllers have several advantages with respect to their flexibility and design's simplicity. However, they are subject to problems that are not faced by analog controllers. In particular, these problems are related to the finite word-length implementation that might lead to overflows, limit cycles, and time constraints in fixed-point processors. This paper proposes a new method to detect design's errors in digital controllers using a state-of-the art bounded model checker based on satisfiability modulo theories. The experiments with digital controllers for a ball and beam plant demonstrate that the proposed method can be very effective in finding errors in digital controllers than other existing approaches based on traditional simulations tools.",
    "category": "cs.SY",
    "year": "2014",
    "": ""
  },
  {
    "title": "Google Matrix of Business Process Management",
    "abstract": "Development of efficient business process models and determination of their characteristic properties are subject of intense interdisciplinary research. Here, we consider a business process model as a directed graph. Its nodes correspond to the units identified by the modeler and the link direction indicates the causal dependencies between units. It is of primary interest to obtain the stationary flow on such a directed graph, which corresponds to the steady-state of a firm during the business process. Following the ideas developed recently for the World Wide Web, we construct the Google matrix for our business process model and analyze its spectral properties. The importance of nodes is characterized by Page-Rank and recently proposed CheiRank and 2DRank, respectively. The results show that this two-dimensional ranking gives a significant information about the influence and communication properties of business model units. We argue that the Google matrix method, described here, provides a new efficient tool helping companies to make their decisions on how to evolve in the exceedingly dynamic global market.",
    "category": "cs.CY",
    "year": "2011",
    "": ""
  },
  {
    "title": "A Combinatorial Algebraic Approach for the Identifiability of Low Rank Matrix Completion",
    "abstract": "In this paper, we review the problem of matrix completion and expose its intimate relations with algebraic geometry, combinatorics and graph theory. We present the first necessary and sufficient combinatorial conditions for matrices of arbitrary rank to be identifiable from a set of matrix entries, yielding theoretical constraints and new algorithms for the problem of matrix completion. We conclude by algorithmically evaluating the tightness of the given conditions and algorithms for practically relevant matrix sizes, showing that the algebraic-combinatoric approach can lead to improvements over state-of-the-art matrix completion methods.",
    "category": "cs.LG",
    "year": "2012",
    "": ""
  },
  {
    "title": "Iterated Ld Problem in Non Associative Key Establishment",
    "abstract": "We construct new non-associative key establishment protocols for all left self-distributive (LD), multi-LD-, and mutual LD-systems. The hard- ness of these protocols relies on variations of the (simultaneous) iterated LD- problem and its generalizations. We discuss instantiations of these protocols using generalized shifted conjugacy in braid groups and their quotients, LD- conjugacy and f-symmetric conjugacy in groups. We suggest parameter choices for instantiations in braid groups, symmetric groups and several matrix groups.",
    "category": "cs.CR",
    "year": "2013",
    "": ""
  },
  {
    "title": "Towards Ontological Support for Principle Solutions in Mechanical Engineering",
    "abstract": "The engineering design process follows a series of standardized stages of development, which have many aspects in common with software engineering. Among these stages, the principle solution can be regarded as an analogue of the design specification, fixing as it does the way the final product works. It is usually constructed as an abstract sketch (hand-drawn or constructed with a CAD system) where the functional parts of the product are identified, and geometric and topological constraints are formulated. Here, we outline a semantic approach where the principle solution is annotated with ontological assertions, thus making the intended requirements explicit and available for further machine processing; this includes the automated detection of design errors in the final CAD model, making additional use of a background ontology of engineering knowledge. We embed this approach into a document-oriented design workflow, in which the background ontology and semantic annotations in the documents are exploited to trace parts and requirements through the design process and across different applications.",
    "category": "cs.SE",
    "year": "2013",
    "": ""
  },
  {
    "title": "Formation of Robust Multi Agent Networks Through Self Organizing Random Regular Graphs",
    "abstract": "Multi-agent networks are often modeled as interaction graphs, where the nodes represent the agents and the edges denote some direct interactions. The robustness of a multi-agent network to perturbations such as failures, noise, or malicious attacks largely depends on the corresponding graph. In many applications, networks are desired to have well-connected interaction graphs with relatively small number of links. One family of such graphs is the random regular graphs. In this paper, we present a decentralized scheme for transforming any connected interaction graph with a possibly non-integer average degree of   $k$       into a connected random   $m$      -regular graph for some   $m\\in [k, k+2]$      . Accordingly, the agents improve the robustness of the network while maintaining a similar number of links as the initial configuration by locally adding or removing some edges.",
    "category": "cs.MA",
    "year": "2015",
    "": ""
  },
  {
    "title": "Fully Dynamic Bin Packing Revisited",
    "abstract": "We consider the fully dynamic bin packing problem, where items arrive and depart in an online fashion and repacking of previously packed items is allowed. The goal is, of course, to minimize both the number of bins used as well as the amount of repacking. A recently introduced way of measuring the repacking costs at each timestep is the migration factor, defined as the total size of repacked items divided by the size of an arriving or departing item. Concerning the trade-off between number of bins and migration factor, if we wish to achieve an asymptotic competitive ration of $1 + \\epsilon$ for the number of bins, a relatively simple argument proves a lower bound of $\\Omega(\\frac{1}{\\epsilon})$ for the migration factor. We establish a nearly matching upper bound of $O(\\frac{1}{\\epsilon}^4 \\log \\frac{1}{\\epsilon})$ using a new dynamic rounding technique and new ideas to handle small items in a dynamic setting such that no amortization is needed. The running time of our algorithm is polynomial in the number of items $n$ and in $\\frac{1}{\\epsilon}$. The previous best trade-off was for an asymptotic competitive ratio of $\\frac{5}{4}$ for the bins (rather than $1+\\epsilon$) and needed an amortized number of $O(\\log n)$ repackings (while in our scheme the number of repackings is independent of $n$ and non-amortized).",
    "category": "cs.DS",
    "year": "2014",
    "": ""
  },
  {
    "title": "Throughput Capacity of Two Hop Relay Manets Under Finite Buffers",
    "abstract": "Since the seminal work of Grossglauser and Tse [1], the two-hop relay algorithm and its variants have been attractive for mobile ad hoc networks (MANETs) due to their simplicity and efficiency. However, most literature assumed an infinite buffer size for each node, which is obviously not applicable to a realistic MANET. In this paper, we focus on the exact throughput capacity study of two-hop relay MANETs under the practical finite relay buffer scenario. The arrival process and departure process of the relay queue are fully characterized, and an ergodic Markov chain-based framework is also provided. With this framework, we obtain the limiting distribution of the relay queue and derive the throughput capacity under any relay buffer size. Extensive simulation results are provided to validate our theoretical framework and explore the relationship among the throughput capacity, the relay buffer size and the number of nodes.",
    "category": "cs.PF",
    "year": "2014",
    "": ""
  },
  {
    "title": "Bounds on the Capacity of Ask Molecular Communication Channels with Isi",
    "abstract": "There are now several works on the use of the additive inverse Gaussian noise (AIGN) model for the random transit time in molecular communication~(MC) channels. The randomness invariably causes inter-symbol interference (ISI) in MC, an issue largely ignored or simplified. In this paper we derive an upper bound and two lower bounds for MC based on amplitude shift keying (ASK) in presence of ISI. The Blahut-Arimoto algorithm~(BAA) is modified to find the input distribution of transmitted symbols to maximize the lower bounds. Our results show that over wide parameter values the bounds are close.",
    "category": "cs.IT",
    "year": "2015",
    "": ""
  },
  {
    "title": "Ranking the Importance Level of Intermediaries to a Criminal Using a Reliance Measure",
    "abstract": "Recent research on finding important intermediate nodes in a network suspected to contain criminal activity is highly dependent on network centrality values. Betweenness centrality, for example, is widely used to rank the nodes that act as brokers in the shortest paths connecting all source and all the end nodes in a network. However both the shortest path node betweenness and the linearly scaled betweenness can only show rankings for all the nodes in a network. In this paper we explore the mathematical concept of pair-dependency on intermediate nodes, adapting the concept to criminal relationships and introducing a new source-intermediate reliance measure. To illustrate our measure, we apply it to rank the nodes in the Enron email dataset and the Noordin Top Terrorist networks. We compare the reliance ranking with Google PageRank, Markov centrality as well as betweenness centrality and show that a criminal investigation using the reliance measure, will lead to a different prioritisation in terms of possible people to investigate. While the ranking for the Noordin Top terrorist network nodes yields more extreme differences than for the Enron email transaction network, in the latter the reliance values for the set of finance managers immediately identified another employee convicted of money laundering.",
    "category": "cs.SI",
    "year": "2015",
    "": ""
  },
  {
    "title": "Approximating the Diameter of a Graph",
    "abstract": "\"In this paper we consider the fundamental problem of approximating the diameter D of directed or undirected graphs. In a seminal paper",
    "category": "Aingworth",
    "year": "Chekuri",
    "": ""
  },
  {
    "title": "Weight Assignment Logic",
    "abstract": "We introduce a weight assignment logic for reasoning about quantitative languages of infinite words. This logic is an extension of the classical MSO logic and permits to describe quantitative properties of systems with multiple weight parameters, e.g., the ratio between rewards and costs. We show that this logic is expressively equivalent to unambiguous weighted Buchi automata. We also consider an extension of weight assignment logic which is expressively equivalent to nondeterministic weighted Buchi automata.",
    "category": "cs.FL",
    "year": "2015",
    "": ""
  },
  {
    "title": "Fast Label Embeddings for Extremely Large Output Spaces",
    "abstract": "Many modern multiclass and multilabel problems are characterized by increasingly large output spaces. For these problems, label embeddings have been shown to be a useful primitive that can improve computational and statistical efficiency. In this work we utilize a correspondence between rank constrained estimation and low dimensional label embeddings that uncovers a fast label embedding algorithm which works in both the multiclass and multilabel settings. The result is a randomized algorithm for partial least squares, whose running time is exponentially faster than naive algorithms. We demonstrate our techniques on two large-scale public datasets, from the Large Scale Hierarchical Text Challenge and the Open Directory Project, where we obtain state of the art results.",
    "category": "cs.LG",
    "year": "2015",
    "": ""
  },
  {
    "title": "Flaglets Exact Wavelets on the Ball",
    "abstract": "We summarise the construction of exact axisymmetric scale-discretised wavelets on the sphere and on the ball. The wavelet transform on the ball relies on a novel 3D harmonic transform called the Fourier-Laguerre transform which combines the spherical harmonic transform with damped Laguerre polynomials on the radial half-line. The resulting wavelets, called flaglets, extract scale-dependent, spatially localised features in three-dimensions while treating the tangential and radial structures separately. Both the Fourier-Laguerre and the flaglet transforms are theoretically exact thanks to a novel sampling theorem on the ball. Our implementation of these methods is publicly available and achieves floating-point accuracy when applied to band-limited signals.",
    "category": "cs.IT",
    "year": "2013",
    "": ""
  },
  {
    "title": "A Sparse Bayesian Framework for Conditioning Uncertain Geologic Models to Nonlinear Flow Measurements",
    "abstract": "We present a Bayesian framework for reconstructing hydraulic properties of rock formations from nonlinear dynamic flow data by imposing sparsity on the distribution of the parameters in a sparse transform basis through Laplace prior distribution. Sparse representation of the subsurface flow properties in a compression transform basis (where a compact representation is often possible) lends itself to a natural regularization approach, i.e. sparsity regularization, which has recently been exploited in solving ill-posed subsurface flow inverse problems. The Bayesian estimation approach presented here allows for a probabilistic treatment of the sparse reconstruction problem and has its roots in machine learning and the recently introduced relevance vector machine algorithm for linear inverse problems. We formulate the Bayesian sparse reconstruction algorithm and apply it to nonlinear subsurface inverse problems where solution sparsity in a discrete cosine transform is assumed. The probabilistic description of solution sparsity, as opposed to deterministic regularization, allows for quantification of the estimation uncertainty and avoids the need for specifying a regularization parameter. Several numerical experiments from multiphase subsurface flow application are presented to illustrate the performance of the proposed method and compare it with the regular Bayesian estimation approach that does not impose solution sparsity. While the examples are derived from subsurface flow modeling, the proposed framework can be applied to nonlinear inverse problems in other imaging applications including geophysical and medical imaging and electromagnetic inverse problem.",
    "category": "cs.NA",
    "year": "2010",
    "": ""
  },
  {
    "title": "Paxoslease Diskless Paxos for Leases",
    "abstract": "This paper describes PaxosLease, a distributed algorithm for lease negotiation. PaxosLease is based on Paxos, but does not require disk writes or clock synchrony. PaxosLease is used for master lease negotation in the open-source Keyspace and ScalienDB replicated key-value stores.",
    "category": "cs.DC",
    "year": "2012",
    "": ""
  },
  {
    "title": "Learning Kernel Based Halfspaces with the Zero One Loss",
    "abstract": "We describe and analyze a new algorithm for agnostically learning kernel-based halfspaces with respect to the \\emph{zero-one} loss function. Unlike most previous formulations which rely on surrogate convex loss functions (e.g. hinge-loss in SVM and log-loss in logistic regression), we provide finite time/sample guarantees with respect to the more natural zero-one loss function. The proposed algorithm can learn kernel-based halfspaces in worst-case time $\\poly(\\exp(L\\log(L/\\epsilon)))$, for $\\emph{any}$ distribution, where $L$ is a Lipschitz constant (which can be thought of as the reciprocal of the margin), and the learned classifier is worse than the optimal halfspace by at most $\\epsilon$. We also prove a hardness result, showing that under a certain cryptographic assumption, no algorithm can learn kernel-based halfspaces in time polynomial in $L$.",
    "category": "cs.LG",
    "year": "2010",
    "": ""
  },
  {
    "title": "On the Optimality of Simple Schedules for Networks with Multiple Half Duplex Relays",
    "abstract": "This paper studies networks that consist of    $N$    half-duplex relays assisting the communication between a source and a destination. In ISIT’12 Brahma  et al.  conjectured that in Gaussian half-duplex diamond networks (i.e., without a direct link between the source and the destination, and with    $N$    non-interfering relays), an approximately optimal relay scheduling policy (i.e., achieving the cut-set upper bound to within a constant gap uniformly over all channel gains) has at most    $N+1$    active states (i.e., at most    $N+1$    out of the    $2^{N}$    possible relay listen-transmit configurations have a strictly positive probability). Such relay scheduling policies were referred to as simple. In ITW’13, we conjectured that simple approximately optimal relay scheduling policies exist for any Gaussian half-duplex multi-relay network irrespectively of the topology. This paper formally proves this more general version of the conjecture and shows it holds beyond Gaussian noise networks. In particular, for any class of memoryless half-duplex    $N$   -relay networks with independent noises and for which independent inputs are approximately optimal in the cut-set upper bound, an approximately optimal simple relay scheduling policy exists. The key step of the proof is to write the minimum of the submodular cut-set function by means of its Lovasz extension and use the greedy algorithm for submodular polyhedra to highlight structural properties of the optimal solution. This, together with the saddle-point property of min–max problems and the existence of optimal basic feasible solutions for linear programs, proves the conjecture. As an example, for    $N$   -relay Gaussian networks with independent noises, where each node is equipped with multiple antennas and where each antenna can be configured to listen or transmit irrespectively of the others, the existence of an approximately optimal simple relay scheduling policy with at most    $N+1$    active states, irrespectively of the total number of antennas in the system, is proved.",
    "category": "cs.IT",
    "year": "2016",
    "": ""
  },
  {
    "title": "Interaction and Resistance the Recognition of Intentions in New Human Computer Interaction",
    "abstract": "Just as AI has moved away from classical AI, human-computer interaction (HCI) must move away from what I call 'good old fashioned HCI' to 'new HCI' - it must become a part of cognitive systems research where HCI is one case of the interaction of intelligent agents (we now know that interaction is essential for intelligent agents anyway). For such interaction, we cannot just 'analyze the data', but we must assume intentions in the other, and I suggest these are largely recognized through resistance to carrying out one's own intentions. This does not require fully cognitive agents but can start at a very basic level. New HCI integrates into cognitive systems research and designs intentional systems that provide resistance to the human agent.",
    "category": "cs.HC",
    "year": "2010",
    "": ""
  },
  {
    "title": "Optimizations for Decision Making and Planning in Description Logic Dynamic Knowledge Bases",
    "abstract": "Artifact-centric models for business processes recently raised a lot of attention, as they manage to combine structural (i.e. data related) with dynamical (i.e. process related) aspects in a seamless way. Many frameworks developed under this approach, although, are not built explicitly for planning, one of the most prominent operations related to business processes. In this paper, we try to overcome this by proposing a framework named Dynamic Knowledge Bases, aimed at describing rich business domains through Description Logic-based ontologies, and where a set of actions allows the system to evolve by modifying such ontologies. This framework, by offering action rewriting and knowledge partialization, represents a viable and formal environment to develop decision making and planning techniques for DL-based artifact-centric business domains.",
    "category": "cs.AI",
    "year": "2015",
    "": ""
  },
  {
    "title": "Inference and Evaluation of the Multinomial Mixture Model for Text Clustering",
    "abstract": "In this article, we investigate the use of a probabilistic model for unsupervised clustering in text collections. Unsupervised clustering has become a basic module for many intelligent text processing applications, such as information retrieval, text classification or information extraction. Recent proposals have been made of probabilistic clustering models, which build ''soft'' theme-document associations. These models allow to compute, for each document, a probability vector whose values can be interpreted as the strength of the association between documents and clusters. As such, these vectors can also serve to project texts into a lower-dimensional ''semantic'' space. These models however pose non-trivial estimation problems, which are aggravated by the very high dimensionality of the parameter space. The model considered in this paper consists of a mixture of multinomial distributions over the word counts, each component corresponding to a different theme. We propose a systematic evaluation framework to contrast various estimation procedures for this model. Starting with the expectation-maximization (EM) algorithm as the basic tool for inference, we discuss the importance of initialization and the influence of other features, such as the smoothing strategy or the size of the vocabulary, thereby illustrating the difficulties incurred by the high dimensionality of the parameter space. We empirically show that, in the case of text processing, these difficulties can be alleviated by introducing the vocabulary incrementally, due to the specific profile of the word count distributions. Using the fact that the model parameters can be analytically integrated out, we finally show that Gibbs sampling on the theme configurations is tractable and compares favorably to the basic EM approach.",
    "category": "cs.IR",
    "year": "2007",
    "": ""
  },
  {
    "title": "Synchronizing Weighted Automata",
    "abstract": "We introduce two generalizations of synchronizability to automata with transitions weighted in an arbitrary semiring K=(K,+,*,0,1). (or equivalently, to finite sets of matrices in K^nxn.) Let us call a matrix A location-synchronizing if there exists a column in A consisting of nonzero entries such that all the other columns of A are filled by zeros. If additionally all the entries of this designated column are the same, we call A synchronizing. Note that these notions coincide for stochastic matrices and also in the Boolean semiring. A set M of matrices in K^nxn is called (location-)synchronizing if M generates a matrix subsemigroup containing a (location-)synchronizing matrix. The K-(location-)synchronizability problem is the following: given a finite set M of nxn matrices with entries in K, is it (location-)synchronizing? #R##N#Both problems are PSPACE-hard for any nontrivial semiring. We give sufficient conditions for the semiring K when the problems are PSPACE-complete and show several undecidability results as well, e.g. synchronizability is undecidable if 1 has infinite order in (K,+,0) or when the free semigroup on two generators can be embedded into (K,*,1).",
    "category": "cs.FL",
    "year": "2014",
    "": ""
  },
  {
    "title": "Investigation of Commuting Hamiltonian in Quantum Markov Network",
    "abstract": "Graphical Models have various applications in science and engineering which include physics, bioinformatics, telecommunication and etc. Usage of graphical models needs complex computations in order to evaluation of marginal functions, so there are some powerful methods including mean field approximation, belief propagation algorithm and etc. Quantum graphical models have been recently developed in context of quantum information and computation, and quantum statistical physics, which is possible by generalization of classical probability theory to quantum theory. The main goal of this paper is preparing a primary generalization of Markov network, as a type of graphical models, to quantum case and applying in quantum statistical physics. We have investigated the Markov network and the role of commuting Hamiltonian terms in conditional independence with simple examples of quantum statistical physics.",
    "category": "cs.AI",
    "year": "2014",
    "": ""
  },
  {
    "title": "The Oblivious Transfer Capacity of the Wiretapped Binary Erasure Channel",
    "abstract": "We consider oblivious transfer between Alice and Bob in the presence of an eavesdropper Eve when there is a broadcast channel from Alice to Bob and Eve. In addition to the secrecy constraints of Alice and Bob, Eve should not learn the private data of Alice and Bob. When the broadcast channel consists of two independent binary erasure channels, we derive the oblivious transfer capacity for both 2-privacy (where the eavesdropper may collude with either party) and 1-privacy (where there are no collusions).",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Combinatorial Approximation Algorithms for Maxcut Using Random Walks",
    "abstract": "We give the first combinatorial approximation algorithm for Maxcut that beats the trivial 0.5 factor by a constant. The main partitioning procedure is very intuitive, natural, and easily described. It essentially performs a number of random walks and aggregates the information to provide the partition. We can control the running time to get an approximation factor-running time tradeoff. We show that for any constant b > 1.5, there is an O(n^{b}) algorithm that outputs a (0.5+delta)-approximation for Maxcut, where delta = delta(b) is some positive constant. #R##N#One of the components of our algorithm is a weak local graph partitioning procedure that may be of independent interest. Given a starting vertex $i$ and a conductance parameter phi, unless a random walk of length ell = O(log n) starting from i mixes rapidly (in terms of phi and ell), we can find a cut of conductance at most phi close to the vertex. The work done per vertex found in the cut is sublinear in n.",
    "category": "cs.DS",
    "year": "2010",
    "": ""
  },
  {
    "title": "The Ergodic Capacity of Phase Fading Interference Networks",
    "abstract": "We identify the role of equal strength interference links as bottlenecks on the ergodic sum capacity of a K user phase-fading interference network, i.e., an interference network where the fading process is restricted primarily to independent and uniform phase variations while the channel magnitudes are held fixed across time. It is shown that even though there are K(K-1) cross-links, only about K/2 disjoint and equal strength interference links suffice to determine the capacity of the network regardless of the strengths of the rest of the cross channels. This scenario is called a minimal bottleneck state. It is shown that ergodic interference alignment is capacity optimal for a network in a minimal bottleneck state. The results are applied to large networks. It is shown that large networks are close to bottleneck states with a high probability, so that ergodic interference alignment is close to optimal for large networks. Limitations of the notion of bottleneck states are also highlighted for channels where both the phase and the magnitudes vary with time. It is shown through an example that for these channels, joint coding across different bottleneck states makes it possible to circumvent the capacity bottlenecks.",
    "category": "cs.IT",
    "year": "2011",
    "": ""
  },
  {
    "title": "Informed Rrt Optimal Sampling Based Path Planning Focused via Direct Sampling of an Admissible Ellipsoidal Heuristic",
    "abstract": "Rapidly-exploring random trees (RRTs) are pop- ular in motion planning because they find solutions efficiently to single-query problems. Optimal RRTs (RRT*s) extend RRTs to the problem of finding the optimal solution, but in doing so asymptotically find the optimal path from the initial state to every state in the planning domain. This behaviour is not only inefficient but also inconsistent with their single-query nature. For problems seeking to minimize path length, the subset of states that can improve a solution can be described by a prolate hyperspheroid. We show that unless this subset is sam- pled directly, the probability of improving a solution becomes arbitrarily small in large worlds or high state dimensions. In this paper, we present an exact method to focus the search by directly sampling this subset. The advantages of the presented sampling technique are demonstrated with a new algorithm, Informed RRT*. This method retains the same probabilistic guarantees on complete- ness and optimality as RRT* while improving the convergence rate and final solution quality. We present the algorithm as a simple modification to RRT* that could be further extended by more advanced path-planning algorithms. We show exper- imentally that it outperforms RRT* in rate of convergence, final solution cost, and ability to find difficult passages while demonstrating less dependence on the state dimension and range of the planning problem.",
    "category": "cs.RO",
    "year": "2014",
    "": ""
  },
  {
    "title": "Greendcn a General Framework for Achieving Energy Efficiency in Data Center Networks",
    "abstract": "The popularization of cloud computing has raised concerns over the energy consumption that takes place in data centers. In addition to the energy consumed by servers, the energy consumed by large numbers of network devices emerges as a significant problem. Existing work on energy-efficient data center networking primarily focuses on traffic engineering, which is usually adapted from traditional networks. We propose a new framework to embrace the new opportunities brought by combining some special features of data centers with traffic engineering. Based on this framework, we characterize the problem of achieving energy efficiency with a time-aware model, and we prove its NP-hardness with a solution that has two steps. First, we solve the problem of assigning virtual machines (VM) to servers to reduce the amount of traffic and to generate favorable conditions for traffic engineering. The solution reached for this problem is based on three essential principles that we propose. Second, we reduce the number of active switches and balance traffic flows, depending on the relation between power consumption and routing, to achieve energy conservation. Experimental results confirm that, by using this framework, we can achieve up to 50 percent energy savings. We also provide a comprehensive discussion on the scalability and practicability of the framework.",
    "category": "cs.NI",
    "year": "2014",
    "": ""
  },
  {
    "title": "Games with Recurring Certainty",
    "abstract": "Infinite games where several players seek to coordinate under imperfect information are known to be intractable, unless the information flow is severely restricted. Examples of undecidable cases typically feature a situation where players become uncertain about the current state of the game, and this uncertainty lasts forever. Here we consider games where the players attain certainty about the current state over and over again along any play. For finite-state games, we note that this kind of recurring certainty implies a stronger condition of periodic certainty, that is, the events of state certainty ultimately occur at uniform, regular intervals. We show that it is decidable whether a given game presents recurring certainty, and that, if so, the problem of synthesising coordination strategies under w-regular winning conditions is solvable.",
    "category": "cs.LO",
    "year": "2014",
    "": ""
  },
  {
    "title": "New Coherence and Rip Analysis for Weak Orthogonal Matching Pursuit",
    "abstract": "In this paper we define a new coherence index, named the global 2-coherence, of a given dictionary and study its relationship with the traditional mutual coherence and the restricted isometry constant. By exploring this relationship, we obtain more general results on sparse signal reconstruction using greedy algorithms in the compressive sensing (CS) framework. In particular, we obtain an improved bound over the best known results on the restricted isometry constant for successful recovery of sparse signals using orthogonal matching pursuit (OMP).",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Rappor Randomized Aggregatable Privacy Preserving Ordinal Response",
    "abstract": "Randomized Aggregatable Privacy-Preserving Ordinal Response, or RAPPOR, is a technology for crowdsourcing statistics from end-user client software, anonymously, with strong privacy guarantees. In short, RAPPORs allow the forest of client data to be studied, without permitting the possibility of looking at individual trees. By applying randomized response in a novel manner, RAPPOR provides the mechanisms for such collection as well as for efficient, high-utility analysis of the collected data. In particular, RAPPOR permits statistics to be collected on the population of client-side strings with strong privacy guarantees for each client, and without linkability of their reports. This paper describes and motivates RAPPOR, details its differential-privacy and utility guarantees, discusses its practical deployment and properties in the face of different attack models, and, finally, gives results of its application to both synthetic and real-world data.",
    "category": "cs.CR",
    "year": "2014",
    "": ""
  },
  {
    "title": "Increasing Flash Memory Lifetime by Dynamic Voltage Allocation for Constant Mutual Information",
    "abstract": "The read channel in Flash memory systems degrades over time because the Fowler-Nordheim tunneling used to apply charge to the floating gate eventually compromises the integrity of the cell because of tunnel oxide degradation. While degradation is commonly measured in the number of program/erase cycles experienced by a cell, the degradation is proportional to the number of electrons forced into the floating gate and later released by the erasing process. By managing the amount of charge written to the floating gate to maintain a constant read-channel mutual information, Flash lifetime can be extended. This paper proposes an overall system approach based on information theory to extend the lifetime of a flash memory device. Using the instantaneous storage capacity of a noisy flash memory channel, our approach allocates the read voltage of flash cell dynamically as it wears out gradually over time. A practical estimation of the instantaneous capacity is also proposed based on soft information via multiple reads of the memory cells.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "Proof Pad a New Development Environment for Acl2",
    "abstract": "Most software development projects rely on Integrated Development Environments (IDEs) based on the desktop paradigm, with an interactive, mouse-driven user interface. The standard installation of ACL2, on the other hand, is designed to work closely with Emacs. ACL2 experts, on the whole, like this mode of operation, but students and other new programmers who have learned to program with desktop IDEs often react negatively to the process of adapting to an unfamiliar form of interaction. #R##N#This paper discusses Proof Pad, a new IDE for ACL2. Proof Pad is not the only attempt to provide ACL2 IDEs catering to students and beginning programmers. The ACL2 Sedan and DrACuLa systems arose from similar motivations. Proof Pad builds on the work of those systems, while also taking into account the unique workflow of the ACL2 theorem proving system. #R##N#The design of Proof Pad incorporated user feedback from the outset, and that process continued through all stages of development. Feedback took the form of direct observation of users interacting with the IDE as well as questionnaires completed by users of Proof Pad and other ACL2 IDEs. The result is a streamlined interface and fast, responsive system that supports using ACL2 as a programming language and a theorem proving system. Proof Pad also provides a property-based testing environment with random data generation and automated interpretation of properties as ACL2 theorem definitions.",
    "category": "cs.SE",
    "year": "2013",
    "": ""
  },
  {
    "title": "Channels As Objects in Concurrent Object Oriented Programming",
    "abstract": "There is often a sort of a protocol associated to each class, stating when and how certain methods should be called. Given that this protocol is, if at all, described in the documentation accompanying the class, current mainstream object-oriented languages cannot provide for the verification of client code adherence against the sought class behaviour. We have defined a class-based concurrent object-oriented language that formalises such protocols in the form of usage types. Usage types are attached to class definitions, allowing for the specification of (1) the available methods, (2) the tests clients must perform on the result of methods, and (3) the object status - linear or shared - all of which depend on the object's state. Our work extends the recent approach on modular session types by eliminating channel operations, and defining the method call as the single communication primitive in both sequential and concurrent settings. In contrast to previous works, we define a single category for objects, instead of distinct categories for linear and for shared objects, and let linear objects evolve into shared ones. We introduce a standard sync qualifier to prevent thread interference in certain operations on shared objects. We formalise the language syntax, the operational semantics, and a type system that enforces by static typing that methods are called only when available, and by a single client if so specified in the usage type. We illustrate the language via a complete example.",
    "category": "cs.PL",
    "year": "2011",
    "": ""
  },
  {
    "title": "Approximate Optimal Cooperative Decentralized Control for Consensus in a Topological Network of Agents with Uncertain Nonlinear Dynamics",
    "abstract": "Efforts in this paper seek to combine graph theory with adaptive dynamic programming (ADP) as a reinforcement learning (RL) framework to determine forward-in-time, real-time, approximate optimal controllers for distributed multi-agent systems with uncertain nonlinear dynamics. A decentralized continuous time-varying control strategy is proposed, using only local communication feedback from two-hop neighbors on a communication topology that has a spanning tree. An actor-critic-identifier architecture is proposed that employs a nonlinear state derivative estimator to estimate the unknown dynamics online and uses the estimate thus obtained for value function approximation.",
    "category": "cs.SY",
    "year": "2013",
    "": ""
  },
  {
    "title": "The Role of Peer Influence in Churn in Wireless Networks",
    "abstract": "Subscriber churn remains a top challenge for wireless carriers. These carriers need to understand the determinants of churn to confidently apply effective retention strategies to ensure their profitability and growth. In this paper, we look at the effect of peer influence on churn and we try to disentangle it from other effects that drive simultaneous churn across friends but that do not relate to peer influence. We analyze a random sample of roughly 10 thousand subscribers from large dataset from a major wireless carrier over a period of 10 months. We apply survival models and generalized propensity score to identify the role of peer influence. We show that the propensity to churn increases when friends do and that it increases more when many strong friends churn. Therefore, our results suggest that churn managers should consider strategies aimed at preventing group churn. We also show that survival models fail to disentangle homophily from peer influence over-estimating the effect of peer influence.",
    "category": "cs.SI",
    "year": "2014",
    "": ""
  },
  {
    "title": "Off the Grid Spectral Compressed Sensing with Prior Information",
    "abstract": "Recent research in off-the-grid compressed sensing (CS) has demonstrated that, under certain conditions, one can successfully recover a spectrally sparse signal from a few time-domain samples even though the dictionary is continuous. In this paper, we extend off-the-grid CS to applications where some prior information about spectrally sparse signal is known. We specifically consider cases where a few contributing frequencies or poles, but not their amplitudes or phases, are known a priori. Our results show that equipping off-the-grid CS with the known-poles algorithm can increase the probability of recovering all the frequency components.",
    "category": "cs.IT",
    "year": "2013",
    "": ""
  },
  {
    "title": "A Regularized Graph Layout Framework for Dynamic Network Visualization",
    "abstract": "Many real-world networks, including social and information networks, are dynamic structures that evolve over time. Such dynamic networks are typically visualized using a sequence of static graph layouts. In addition to providing a visual representation of the network structure at each time step, the sequence should preserve the mental map between layouts of consecutive time steps to allow a human to interpret the temporal evolution of the network. In this paper, we propose a framework for dynamic network visualization in the on-line setting where only present and past graph snapshots are available to create the present layout. The proposed framework creates regularized graph layouts by augmenting the cost function of a static graph layout algorithm with a grouping penalty, which discourages nodes from deviating too far from other nodes belonging to the same group, and a temporal penalty, which discourages large node movements between consecutive time steps. The penalties increase the stability of the layout sequence, thus preserving the mental map. We introduce two dynamic layout algorithms within the proposed framework, namely dynamic multidimensional scaling and dynamic graph Laplacian layout. We apply these algorithms on several data sets to illustrate the importance of both grouping and temporal regularization for producing interpretable visualizations of dynamic networks.",
    "category": "cs.SI",
    "year": "2013",
    "": ""
  },
  {
    "title": "Area Coverage Under Low Sensor Density",
    "abstract": "This paper presents a solution to the problem of monitoring a region of interest (RoI) using a set of nodes that is not sufficient to achieve the required degree of monitoring coverage. In particular, sensing coverage of wireless sensor networks (WSNs) is a crucial issue in projects due to failure of sensors. The lack of sensor equipment resources hinders the traditional method of using mobile robots to move around the RoI to collect readings. Instead, our solution employs supervised neural networks to produce the values of the uncovered locations by extracting the non-linear relation among randomly deployed sensor nodes throughout the area. Moreover, we apply a hybrid backpropagation method to accelerate the learning convergence speed to a local minimum solution. We use a real-world data set from meteorological deployment for experimental validation and analysis.",
    "category": "cs.NI",
    "year": "2014",
    "": ""
  },
  {
    "title": "Fast Resource Scheduling in Hetnets with D2d Support",
    "abstract": "Resource allocation in LTE networks is known to be an NP-hard problem. In this paper, we address an even more complex scenario: an LTE-based, 2-tier heterogeneous network where D2D mode is supported under the network control. All communications (macrocell, microcell and D2D-based) share the same frequency bands, hence they may interfere. We then determine (i) the network node that should serve each user and (ii) the radio resources to be scheduled for such communication. To this end, we develop an accurate model of the system and apply approximate dynamic programming to solve it. Our algorithms allow us to deal with realistic, large-scale scenarios. In such scenarios, we compare our approach to today's networks where eICIC techniques and proportional fairness scheduling are implemented. Results highlight that our solution increases the system throughput while greatly reducing energy consumption. We also show that D2D mode can effectively support content delivery without significantly harming macrocells or microcells traffic, leading to an increased system capacity. Interestingly, we find that D2D mode can be a low-cost alternative to microcells.",
    "category": "cs.NI",
    "year": "2014",
    "": ""
  },
  {
    "title": "Interference Prediction in Mobile Ad Hoc Networks with a General Mobility Model",
    "abstract": "In a mobile ad hoc network (MANET), effective prediction of time-varying interferences can enable adaptive transmission designs and therefore improve the communication performance. This paper investigates interference prediction in MANETs with a finite number of nodes by proposing and using a general-order linear model for node mobility. The proposed mobility model can well approximate node dynamics of practical MANETs. In contrast to previous studies on interference statistics, we are able through this model to give a best estimate of the time-varying interference at any time rather than long-term average effects. Specifically, we propose a compound Gaussian point process functional as a general framework to obtain analytical results on the mean value and moment-generating function of the interference prediction. With a series form of this functional, we give the necessary and sufficient condition for when the prediction is essentially equivalent to that from a binomial point process (BPP) network in the limit as time goes to infinity. These conditions permit one to rigorously determine when the commonly used BPP approximations are valid. Finally, our simulation results corroborate the effectiveness and accuracy of the analytical results on interference prediction and also show the advantages of our method in dealing with complex mobilities.",
    "category": "cs.IT",
    "year": "2015",
    "": ""
  },
  {
    "title": "How to Transfer Zero Shot Object Recognition via Hierarchical Transfer of Semantic Attributes",
    "abstract": "Attribute based knowledge transfer has proven very successful in visual object analysis and learning previously unseen classes. However, the common approach learns and transfers attributes without taking into consideration the embedded structure between the categories in the source set. Such information provides important cues on the intraattribute variations. We propose to capture these variations in a hierarchical model that expands the knowledge source with additional abstraction levels of attributes. We also provide a novel transfer approach that can choose the appropriate attributes to be shared with an unseen class. We evaluate our approach on three public datasets: a Pascal, Animals with Attributes and CUB-200-2011 Birds. The experiments demonstrate the effectiveness of our model with significant improvement over state-of-the-art.",
    "category": "cs.CV",
    "year": "2015",
    "": ""
  },
  {
    "title": "Iterative Concave Rank Approximation for Recovering Low Rank Matrices",
    "abstract": "In this paper, we propose a new algorithm for recovery of low-rank matrices from compressed linear measurements. The underlying idea of this algorithm is to closely approximate the rank function with a smooth function of singular values, and then minimize the resulting approximation subject to the linear constraints. The accuracy of the approximation is controlled via a scaling parameter δ, where a smaller δ corresponds to a more accurate fitting. The consequent optimization problem for any finite δ is nonconvex. Therefore, to decrease the risk of ending up in local minima, a series of optimizations is performed, starting with optimizing a rough approximation (a large δ) and followed by successively optimizing finer approximations of the rank with smaller δ's. To solve the optimization problem for any δ > 0, it is converted to a new program in which the cost is a function of two auxiliary positive semidefinite variables. The paper shows that this new program is concave and applies a majorize-minimize technique to solve it which, in turn, leads to a few convex optimization iterations. This optimization scheme is also equivalent to a reweighted Nuclear Norm Minimization (NNM). For any δ > 0, we derive a necessary and sufficient condition for the exact recovery which are weaker than those corresponding to NNM. On the numerical side, the proposed algorithm is compared to NNM and a reweighted NNM in solving affine rank minimization and matrix completion problems showing its considerable and consistent superiority in terms of success rate.",
    "category": "cs.IT",
    "year": "2014",
    "": ""
  },
  {
    "title": "A General Quantitative Cryptanalysis of Permutation Only Multimedia Ciphers against Plaintext Attacks",
    "abstract": "\"In recent years secret permutations have been widely used for protecting different types of multimedia data",
    "category": "including speech files",
    "year": "digital images and videos. Based on a general model of permutation-only multimedia ciphers",
    "": ""
  },
  {
    "title": "An Efficient Assignment of Drainage Direction over Flat Surfaces in Raster Digital Elevation Models",
    "abstract": "In processing raster digital elevation models (DEMs) it is often necessary to assign drainage directions over flats-that is, over regions with no local elevation gradient. This paper presents an approach to drainage direction assignment which is not restricted by a flat's shape, number of outlets, or surrounding topography. Flow is modeled by superimposing a gradient away from higher terrain with a gradient towards lower terrain resulting in a drainage field exhibiting flow convergence, an improvement over methods which produce regions of parallel flow. This approach builds on previous work by Garbrecht and Martz (1997), but presents several important improvements. The improved algorithm guarantees that flats are only resolved if they have outlets. The algorithm does not require iterative application; a single pass is sufficient to resolve all flats. The algorithm presents a clear strategy for identifying flats and their boundaries. The algorithm is not susceptible to loss of floating-point precision. Furthermore, the algorithm is efficient, operating in O(N) time whereas the older algorithm operates in O ( N 3 / 2 ) time. In testing, the improved algorithm ran 6.5 times faster than the old for a 100i?100 cell flat and 69 times faster for a 700i?700 cell flat. In tests on actual DEMs, the improved algorithm finished its processing 38-110 times sooner while running on a single processor than a parallel implementation of the old algorithm did while running on 16 processors. The improved algorithm is an optimal, accurate, easy-to-implement drop-in replacement for the original. Pseudocode is provided in the paper and working source code is provided in the Supplemental Materials. HighlightsWe present an improved algorithm to model ow directions in at regions of DEMs.The algorithm works regardless of the topography surrounding the at region.The algorithm produces convergent ows away from higher and towards lower terrain.The algorithm has a number of sanity checks which guarantee correct output.The algorithm works in O(N) time and supplants an older O(N3\\2) time algorithm.",
    "category": "cs.DS",
    "year": "2014",
    "": ""
  },
  {
    "title": "Whittlesearch Interactive Image Search with Relative Attribute Feedback",
    "abstract": "\"We propose a novel mode of feedback for image search",
    "category": "where a user describes which properties of exemplar images should be adjusted in order to more closely match his/her mental model of the image sought. For example",
    "year": "perusing image results for a query \"\"black shoes\"\"",
    "": "2015"
  },
  {
    "title": "Optimized Imaging Using Non Rigid Registration",
    "abstract": "Abstract   The extraordinary improvements of modern imaging devices offer access to data with unprecedented information content. However, widely used image processing methodologies fall far short of exploiting the full breadth of information offered by numerous types of scanning probe, optical, and electron microscopies. In many applications, it is necessary to keep measurement intensities below a desired threshold. We propose a methodology for extracting an increased level of information by processing a series of data sets suffering, in particular, from high degree of spatial uncertainty caused by complex multiscale motion during the acquisition process. An important role is played by a non-rigid pixel-wise registration method that can cope with low signal-to-noise ratios. This is accompanied by formulating objective quality measures which replace human intervention and visual inspection in the processing chain. Scanning transmission electron microscopy of siliceous zeolite material exhibits the above-mentioned obstructions and therefore serves as orientation and a test of our procedures.",
    "category": "cs.CV",
    "year": "2014",
    "": ""
  },
  {
    "title": "Conflict Driven Asp Solving with External Sources",
    "abstract": "Answer Set Programming (ASP) is a well-known problem solving approach based on nonmonotonic logic programs and efficient solvers. To enable access to external information, hex-programs extend programs with external atoms, which allow for a bidirectional communication between the logic program and external sources of computation (e.g., description logic reasoners and Web resources). Current solvers evaluate hex-programs by a translation to ASP itself, in which values of external atoms are guessed and verified after the ordinary answer set computation. This elegant approach does not scale with the number of external accesses in general, in particular in presence of nondeterminism (which is instrumental for ASP). In this paper, we present a novel, native algorithm for evaluating hex-programs which uses learning techniques. In particular, we extend conflict-driven ASP solving techniques, which prevent the solver from running into the same conflict again, from ordinary to hex-programs. We show how to gain additional knowledge from external source evaluations and how to use it in a conflict-driven algorithm. We first target the uninformed case, i.e., when we have no extra information on external sources, and then extend our approach to the case where additional meta-information is available. Experiments show that learning from external sources can significantly decrease both the runtime and the number of considered candidate compatible sets.",
    "category": "cs.AI",
    "year": "2012",
    "": ""
  },
  {
    "title": "Validity of Altmetrics Data for Measuring Societal Impact a Study Using Data From Altmetric and F1000prime",
    "abstract": "\"Can altmetric data be validly used for the measurement of societal impact? The current study seeks to answer this question with a comprehensive dataset (about 100",
    "category": "000 records) from very disparate sources (F1000",
    "year": "Altmetric",
    "": ""
  },
  {
    "title": "Matched Filtering From Limited Frequency Samples",
    "abstract": "In this paper, we study a simple correlation-based strategy for estimating the unknown delay and amplitude of a signal based on a small number of noisy, randomly chosen frequency-domain samples. We model the output of this “compressive matched filter” as a random process whose mean equals the scaled, shifted autocorrelation function of the template signal. Using tools from the theory of empirical processes, we prove that the expected maximum deviation of this process from its mean decreases sharply as the number of measurements increases, and we also derive a probabilistic tail bound on the maximum deviation. Putting all of this together, we bound the minimum number of measurements required to guarantee that the empirical maximum of this random process occurs sufficiently close to the true peak of its mean function. We conclude that for broad classes of signals, this compressive matched filter will successfully estimate the unknown delay (with high probability and within a prescribed tolerance) using a number of random frequency-domain samples that scales inversely with the signal-to-noise ratio and only logarithmically in the observation bandwidth and the possible range of delays.",
    "category": "cs.IT",
    "year": "2013",
    "": ""
  },
  {
    "title": "Linear Index Coding via Graph Homomorphism",
    "abstract": "\"It is known that the minimum broadcast rate of a linear index code over $\\mathbb{F}_q$ is equal to the $minrank_q$ of the underlying digraph. In [3] it is proved that for $\\mathbb{F}_2$ and any positive integer $k$",
    "category": "$minrank_q(G)\\leq k$ iff there exists a homomorphism from the complement of the graph $G$ to the complement of a particular undirected graph family called \"\"graph family $\\{G_k\\}$\"\". As observed in [2]",
    "year": "by combining these two results one can relate the linear index coding problem of undirected graphs to the graph homomorphism problem. In [4]",
    "": ""
  },
  {
    "title": "Leader Contention Based User Matching for 802 11 Multiuser Mimo Networks",
    "abstract": "In multiuser MIMO (MU-MIMO) LANs, the achievable throughput of a client depends on who is transmitting concurrently with it. Existing MU-MIMO MAC protocols, however, enable clients to use the traditional 802.11 contention to contend for concurrent transmission opportunities on the uplink. Such a contention-based protocol not only wastes lots of channel time on multiple rounds of contention but also fails to maximally deliver the gain of MU-MIMO because users randomly join concurrent transmissions without considering their channel characteristics. To address such inefficiency, this paper introduces MIMOMate, a leader-contention-based MU-MIMO MAC protocol that matches clients as concurrent transmitters according to their channel characteristics to maximally deliver the MU-MIMO gain while ensuring all users fairly share concurrent transmission opportunities. Furthermore, MIMOMate elects the leader of the matched users to contend for transmission opportunities using traditional 802.11 CSMA/CA. It hence requires only a single contention overhead for concurrent streams and can be compatible with legacy 802.11 devices. A prototype implementation in USRP N200 shows that MIMOMate achieves an average throughput gain of 1.42× and $1.52× over the traditional contention-based protocol for two- and three-antenna AP scenarios, respectively, and also provides fairness for clients.",
    "category": "cs.NI",
    "year": "2014",
    "": ""
  },
  {
    "title": "New Classes of Quadratic Bent Functions in Polynomial Forms",
    "abstract": "In this paper, we propose a new construction of quadratic bent functions in polynomial forms. Right Euclid algorithm in skew-polynomial rings over finite fields of characteristic 2 is applied in the proof.",
    "category": "cs.CR",
    "year": "2013",
    "": ""
  },
  {
    "title": "About the Generalized Lm Inverse and the Weighted Moore Penrose Inverse",
    "abstract": "The recursive method for computing the generalized LM-inverse of a constant rectangular matrix augmented by a column vector is proposed in Udwadia and Phohomsiri (2007) [16,17]. The corresponding algorithm for the sequential determination of the generalized LM-inverse is established in the present paper. We prove that the introduced algorithm for computing the generalized LM-inverse and the algorithm for the computation of the weighted Moore-Penrose inverse developed by Wang and Chen (1986) in [23] are equivalent algorithms. Both of the algorithms are implemented in the present paper using the package MATHEMATICA. Several rational test matrices and randomly generated constant matrices are tested and the CPU time is compared and discussed.",
    "category": "cs.SC",
    "year": "2010",
    "": ""
  },
  {
    "title": "The Deterministic Time Linearity of Service Provided by Fading Channels",
    "abstract": "In the paper, we study the service process S(t) of an independent and identically distributed (i.i.d.) Nakagami-m fading channel, which is defined as the amount of service provided, i.e., the integral of the instantaneous channel capacity over time t. By using the Moment Generation Function (MGF) approach and the infinitely divisible law, it is proved that, other than certain generally recognized curve form or a stochastic process, the channel service process S(t) is a deterministic linear function of time t, namely, S(t)=cm* · t where cm* is a constant determined by the fading parameter m. Furthermore, we extend it to general i.i.d. fading channels and present an explicit form of the constant service rate cp*. The obtained work provides such a new insight on the system design of joint source/channel coding that there exists a coding scheme such that a receiver can decode with zero error probability and zero high layer queuing delay, if the transmitter maintains a constant data rate no more than cp*. Finally, we verify our analysis through Monte Carlo simulations.",
    "category": "cs.IT",
    "year": "2012",
    "": ""
  },
  {
    "title": "Promoting Truthful Behavior in Participatory Sensing Mechanisms",
    "abstract": "In this letter, the interplay between a class of nonlinear estimators and strategic sensors is studied in several participatory-sensing scenarios. It is shown that for the class of estimators, if the strategic sensors have access to noiseless measurements of the to-be-estimated-variable, truth-telling is an equilibrium of the game that models the interplay between the sensors and the estimator. Furthermore, performance of the proposed estimators is examined in the case that the strategic sensors form coalitions and in the presence of noise.",
    "category": "cs.GT",
    "year": "2015",
    "": ""
  },
  {
    "title": "Relatives in the Same University Faculty Nepotism Or Merit",
    "abstract": "\"In many countries culture",
    "category": "practice or regulations inhibit the co-presence of relatives within the university faculty. We test the legitimacy of such attitudes and provisions",
    "year": "investigating the phenomenon of nepotism in Italy",
    "": ""
  },
  {
    "title": "Inertial Parameter Identification Including Friction and Motor Dynamics",
    "abstract": "Identification of inertial parameters is fundamental for the implementation of torque-based control in humanoids. At the same time, good models of friction and actuator dynamics are critical for the low-level control of joint torques. We propose a novel method to identify inertial, friction and motor parameters in a single procedure. The identification exploits the measurements of the PWM of the DC motors and a 6-axis force/torque sensor mounted inside the kinematic chain. The partial least-square (PLS) method is used to perform the regression. We identified the inertial, friction and motor parameters of the right arm of the iCub humanoid robot. We verified that the identified model can accurately predict the force/torque sensor measurements and the motor voltages. Moreover, we compared the identified parameters against the CAD parameters, in the prediction of the force/torque sensor measurements. Finally, we showed that the estimated model can effectively detect external contacts, comparing it against a tactile-based contact detection. The presented approach offers some advantages with respect to other state-of-the-art methods, because of its completeness (i.e. it identifies inertial, friction and motor parameters) and simplicity (only one data collection, with no particular requirements).",
    "category": "cs.RO",
    "year": "2013",
    "": ""
  },
  {
    "title": "Verifiable Source Code Documentation in Controlled Natural Language",
    "abstract": "Writing documentation about software internals is rarely considered a rewarding activity. It is highly time-consuming and the resulting documentation is fragile when the software is continuously evolving in a multi-developer setting. Unfortunately, traditional programming environments poorly support the writing and maintenance of documentation. Consequences are severe as the lack of documentation on software structure negatively impacts the overall quality of the software product. We show that using a controlled natural language with a reasoner and a query engine is a viable technique for verifying the consistency and accuracy of documentation and source code. Using ACE, a state-of-the-art controlled natural language, we present positive results on the comprehensibility and the general feasibility of creating and verifying documentation. As a case study, we used automatic documentation verification to identify and fix severe flaws in the architecture of a non-trivial piece of software. Moreover, a user experiment shows that our language is faster and easier to learn and understand than other formal languages for software documentation.",
    "category": "cs.SE",
    "year": "2013",
    "": ""
  },
  {
    "title": "How to Improve the Outcome of Performance Evaluations in Terms of Percentiles for Citation Frequencies of My Papers",
    "abstract": "Using empirical data I demonstrate that the result of performance evaluations by percentiles can be drastically influenced by the proper choice of the journal in which a manuscript is published.",
    "category": "cs.DL",
    "year": "2014",
    "": ""
  },
  {
    "title": "A Polyhedral Approximation Framework for Convex and Robust Distributed Optimization",
    "abstract": "In this paper, we consider a general problem setup for a wide class of convex and robust distributed optimization problems in peer-to-peer networks. In this setup, convex constraint sets are distributed to the network processors who have to compute the optimizer of a linear cost function subject to the constraints. We propose a novel fully distributed and asynchronous algorithm, named cutting-plane consensus, to solve the problem, based on a polyhedral outer approximation of the constraint sets. Processors running the algorithm compute and exchange linear approximations of their locally feasible sets. Independently of the number of processors in the network, each processor stores only a small number of linear constraints, making the algorithm scalable to large networks. The cutting-plane consensus algorithm is presented and analyzed for the general framework. Specifically, we prove the correctness of the algorithm, and show its robustness against communication or processor failures. Then, the cutting-plane consensus algorithm is specified to three different classes of distributed optimization problems, namely 1) inequality constrained problems, 2) robust optimization problems, and 3) almost separable optimization problems. For each one of these problem classes we solve a concrete problem and present computational results. That is, we show how to solve: position estimation in wireless sensor networks, a distributed robust linear program, and a distributed microgrid control problem.",
    "category": "cs.SY",
    "year": "2014",
    "": ""
  },
  {
    "title": "Cooperative Estimation for Synchronization of Heterogeneous Multi Agent Systems Using Relative Information",
    "abstract": "Abstract   In this paper, we present a distributed estimation setup where local agents estimate their states from relative measurements received from their neighbours. In the case of heterogeneous multi-agent systems, where only relative measurements are available, this is of high relevance. The objective is to improve the scalability of the existing distributed estimation algorithms by restricting the agents to estimating only their local states and those of immediate neighbours. The presented estimation algorithm also guarantees robust performance against model and measurement disturbances. It is shown that it can be integrated into output synchronization algorithms.",
    "category": "cs.SY",
    "year": "2014",
    "": ""
  },
  {
    "title": "A Cooperative Q Learning Approach for Real Time Power Allocation in Femtocell Networks",
    "abstract": "In this paper, we address the problem of distributed interference management of cognitive femtocells that share the same frequency range with macrocells (primary user) using distributed multi-agent Q-learning. We formulate and solve three problems representing three different Q-learning algorithms: namely, centralized, distributed and partially distributed power control using Q-learning (CPC-Q, DPC-Q and PDPC-Q). CPCQ, although not of practical interest, characterizes the global optimum. Each of DPC-Q and PDPC-Q works in two different learning paradigms: Independent (IL) and Cooperative (CL). The former is considered the simplest form for applying Qlearning in multi-agent scenarios, where all the femtocells learn independently. The latter is the proposed scheme in which femtocells share partial information during the learning process in order to strike a balance between practical relevance and performance. In terms of performance, the simulation results showed that the CL paradigm outperforms the IL paradigm and achieves an aggregate femtocells capacity that is very close to the optimal one. For the practical relevance issue, we evaluate the robustness and scalability of DPC-Q, in real time, by deploying new femtocells in the system during the learning process, where we showed that DPC-Q in the CL paradigm is scalable to large number of femtocells and more robust to the network dynamics compared to the IL paradigm",
    "category": "cs.MA",
    "year": "2013",
    "": ""
  },
  {
    "title": "Fusing Text and Image for Event Detection in Twitter",
    "abstract": "In this contribution, we develop an accurate and effective event detection method to detect events from a Twitter stream, which uses visual and textual information to improve the performance of the mining process. The method monitors a Twitter stream to pick up tweets having texts and images and stores them into a database. This is followed by applying a mining algorithm to detect an event. The procedure starts with detecting events based on text only by using the feature of the bag-of-words which is calculated using the term frequency-inverse document frequency (TF-IDF) method. Then it detects the event based on image only by using visual features including histogram of oriented gradients (HOG) descriptors, grey-level cooccurrence matrix (GLCM), and color histogram. K nearest neighbours (Knn) classification is used in the detection. The final decision of the event detection is made based on the reliabilities of text only detection and image only detection. The experiment result showed that the proposed method achieved high accuracy of 0.94, comparing with 0.89 with texts only, and 0.86 with images only .",
    "category": "cs.IR",
    "year": "2015",
    "": ""
  },
  {
    "title": "Artificial Intelligence Markup Language a Brief Tutorial",
    "abstract": "The purpose of this paper is to serve as a reference guide for the development of chatterbots implemented with the AIML language. In order to achieve this, the main concepts in Pattern Recognition area are described because the AIML uses such theoretical framework in their syntactic and semantic structures. After that, AIML language is described and each AIML command/tag is followed by an application example. Also, the usage of AIML embedded tags for the handling of sequence dialogue limitations between humans and machines is shown. Finally, computer systems that assist in the design of chatterbots with the AIML language are classified and described.",
    "category": "cs.AI",
    "year": "2013",
    "": ""
  },
  {
    "title": "Anomaly Detection in Online Social Networks",
    "abstract": "Anomalies in online social networks can signify irregular, and often illegal behaviour. Anomalies in online social networks can signify irregular, and often illegal behaviour. Detection of such anomalies has been used to identify malicious individuals, including spammers, sexual predators, and online fraudsters. In this paper we survey existing computational techniques for detecting anomalies in online social networks. We characterise anomalies as being either static or dynamic, and as being labelled or unlabelled, and survey methods for detecting these different types of anomalies. We suggest that the detection of anomalies in online social networks is composed of two sub-processes; the selection and calculation of network features, and the classification of observations from this feature space. In addition, this paper provides an overview of the types of problems that anomaly detection can address and identifies key areas of future research.",
    "category": "cs.SI",
    "year": "2016",
    "": ""
  },
  {
    "title": "Efficient Synthesis of Network Updates",
    "abstract": "Software-defined networking (SDN) is revolutionizing the networking industry, but current SDN programming platforms do not provide automated mechanisms for updating global configurations on the fly. Implementing updates by hand is challenging for SDN programmers because networks are distributed systems with hundreds or thousands of interacting nodes. Even if initial and final configurations are correct, naively updating individual nodes can lead to incorrect transient behaviors, including loops, black holes, and access control violations. This paper presents an approach for automatically synthesizing updates that are guaranteed to preserve specified properties. We formalize network updates as a distributed programming problem and develop a synthesis algorithm based on counterexample-guided search and incremental model checking. We describe a prototype implementation, and present results from experiments on real-world topologies and properties demonstrating that our tool scales to updates involving over one-thousand nodes.",
    "category": "cs.PL",
    "year": "2015",
    "": ""
  }
];