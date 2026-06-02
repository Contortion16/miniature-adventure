// Tutorial Data
const tutorials = [
    {
        id: 1,
        title: "Threading a Needle",
        skill: "beginner",
        emoji: "🪡",
        description: "Learn the basics of threading a hand sewing needle.",
        content: `
            <h2>Threading a Needle</h2>
            <p class="skill-level beginner">Beginner</p>
            <h3>What You'll Learn</h3>
            <p>The fundamental skill of threading a needle - essential for all hand sewing projects.</p>
            <h3>Materials Needed</h3>
            <ul>
                <li>Hand sewing needles</li>
                <li>Thread</li>
                <li>Good lighting</li>
            </ul>
            <h3>Step-by-Step Instructions</h3>
            <ol>
                <li>Cut about 18 inches of thread from the spool</li>
                <li>Trim the end at a slight angle for easier threading</li>
                <li>Hold the needle up to good light</li>
                <li>Guide the thread through the eye of the needle</li>
                <li>Pull the thread through until you have equal lengths on both sides</li>
                <li>Tie a knot at one end of the thread</li>
            </ol>
            <h3>Tips</h3>
            <ul>
                <li>Use a needle threader if you find it difficult</li>
                <li>Wax your thread to make it stronger</li>
                <li>Work near a bright light source</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Basic Hand Stitches",
        skill: "beginner",
        emoji: "✨",
        description: "Master the essential hand stitches used in sewing.",
        content: `
            <h2>Basic Hand Stitches</h2>
            <p class="skill-level beginner">Beginner</p>
            <h3>What You'll Learn</h3>
            <p>The four essential hand stitches that form the foundation of all hand sewing.</p>
            <h3>The Running Stitch</h3>
            <ol>
                <li>Push the needle through the fabric from front to back</li>
                <li>Make small, even dashes with your stitches</li>
                <li>Keep stitches on both sides of the fabric roughly equal</li>
                <li>Aim for about 8-12 stitches per inch</li>
            </ol>
            <h3>The Backstitch</h3>
            <ol>
                <li>Bring needle up through fabric</li>
                <li>Go back one stitch length and push needle down</li>
                <li>Bring needle up one stitch length ahead</li>
                <li>Repeat, creating solid seams</li>
            </ol>
            <h3>The Whip Stitch</h3>
            <p>Perfect for closing openings and attaching appliqués. Bring the needle up inside the fold of fabric and slide it forward before exiting.</p>
            <h3>The Ladder Stitch</h3>
            <p>Used for invisible closures. Slide the needle inside the fold and travel along before exiting.</p>
        `
    },
    {
        id: 3,
        title: "Sewing Machine Basics",
        skill: "beginner",
        emoji: "🎯",
        description: "Introduction to using a sewing machine safely.",
        content: `
            <h2>Sewing Machine Basics</h2>
            <p class="skill-level beginner">Beginner</p>
            <h3>What You'll Learn</h3>
            <p>Essential knowledge for operating a sewing machine safely and effectively.</p>
            <h3>Parts of a Sewing Machine</h3>
            <ul>
                <li>Presser Foot - holds fabric in place</li>
                <li>Needle - pierces and carries thread</li>
                <li>Bobbin - holds lower thread</li>
                <li>Feed Dogs - move fabric forward</li>
                <li>Tension Dial - controls thread tension</li>
            </ul>
            <h3>Before You Sew</h3>
            <ol>
                <li>Thread the upper thread following machine instructions</li>
                <li>Wind and insert a bobbin</li>
                <li>Check that presser foot is in the down position</li>
                <li>Lower the needle into fabric</li>
                <li>Hold threads while making first few stitches</li>
            </ol>
            <h3>Safety Tips</h3>
            <ul>
                <li>Keep fingers away from the needle</li>
                <li>Never put hands near the needle while machine is running</li>
                <li>Always raise presser foot when threading</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Simple Pillows",
        skill: "beginner",
        emoji: "🛏️",
        description: "Create your first sewing project - a simple decorative pillow.",
        content: `
            <h2>Simple Pillows</h2>
            <p class="skill-level beginner">Beginner</p>
            <h3>What You'll Learn</h3>
            <p>Complete a real project! Make a beautiful decorative pillow.</p>
            <h3>Materials Needed</h3>
            <ul>
                <li>Two pieces of fabric (12x12 inches)</li>
                <li>Thread matching your fabric</li>
                <li>Scissors</li>
                <li>Pins</li>
                <li>Pillow stuffing (8-10 oz)</li>
            </ul>
            <h3>Instructions</h3>
            <ol>
                <li>Place fabric pieces with right sides facing</li>
                <li>Pin all four sides together</li>
                <li>Sew three complete sides with ½-inch seam allowance</li>
                <li>Leave one side open (about 4 inches)</li>
                <li>Trim corners diagonally</li>
                <li>Turn pillow inside out through opening</li>
                <li>Stuff with filling to desired firmness</li>
                <li>Hand stitch opening closed using ladder stitch</li>
            </ol>
        `
    },
    {
        id: 5,
        title: "Pattern Reading",
        skill: "intermediate",
        emoji: "📋",
        description: "Learn how to read and understand sewing patterns.",
        content: `
            <h2>Pattern Reading</h2>
            <p class="skill-level intermediate">Intermediate</p>
            <h3>What You'll Learn</h3>
            <p>Understand all the symbols and instructions in commercial sewing patterns.</p>
            <h3>Key Pattern Elements</h3>
            <ul>
                <li>Grain Lines - show fabric direction</li>
                <li>Seam Allowances - usually ½ inch</li>
                <li>Markings - dots, dashes, notches</li>
                <li>Fold Lines - where to fold fabric</li>
            </ul>
            <h3>Common Symbols</h3>
            <ul>
                <li>Arrows - indicate grain line direction</li>
                <li>Dots - mark points to match</li>
                <li>Dashes - show stitching lines</li>
                <li>Notches - help align pieces</li>
            </ul>
            <h3>Before Cutting</h3>
            <ol>
                <li>Select correct size based on measurements</li>
                <li>Note fabric requirements</li>
                <li>Lay out pattern pieces on fabric</li>
                <li>Transfer all markings to fabric</li>
                <li>Double-check grain line placement</li>
            </ol>
        `
    },
    {
        id: 6,
        title: "Fabric Selection",
        skill: "intermediate",
        emoji: "🧵",
        description: "Choose the right fabric for your sewing projects.",
        content: `
            <h2>Fabric Selection</h2>
            <p class="skill-level intermediate">Intermediate</p>
            <h3>What You'll Learn</h3>
            <p>Understand different fabrics and how to choose the best one for your project.</p>
            <h3>Common Fabric Types</h3>
            <ul>
                <li>Cotton - breathable, easy to work with</li>
                <li>Linen - natural, crisp, durable</li>
                <li>Polyester - wrinkle-resistant, versatile</li>
                <li>Silk - luxurious, delicate</li>
                <li>Fleece - warm, soft, no fray</li>
            </ul>
            <h3>Fabric Weight</h3>
            <ul>
                <li>Lightweight - shirts, blouses, quilts</li>
                <li>Midweight - dresses, pants, bags</li>
                <li>Heavyweight - jackets, upholstery, bags</li>
            </ul>
            <h3>Choosing Fabric for Your Project</h3>
            <ol>
                <li>Check pattern recommendations</li>
                <li>Consider garment or project use</li>
                <li>Feel the fabric weight and drape</li>
                <li>Check care instructions</li>
                <li>Buy extra (10-15%) for mistakes</li>
            </ol>
        `
    },
    {
        id: 7,
        title: "Seam Finishing",
        skill: "intermediate",
        emoji: "✂️",
        description: "Master different ways to finish seams professionally.",
        content: `
            <h2>Seam Finishing</h2>
            <p class="skill-level intermediate">Intermediate</p>
            <h3>What You'll Learn</h3>
            <p>Techniques to finish seams and prevent fabric fraying.</p>
            <h3>French Seams</h3>
            <ol>
                <li>Sew with wrong sides together at ¾ inch seam allowance</li>
                <li>Trim seam close to stitching</li>
                <li>Press to one side</li>
                <li>Fold right sides together along seam</li>
                <li>Stitch at ½ inch seam allowance, encasing first seam</li>
            </ol>
            <h3>Zigzag Finish</h3>
            <ul>
                <li>Trim seams to ½ inch</li>
                <li>Sew zigzag stitch along raw edge</li>
                <li>Quick and effective</li>
            </ul>
            <h3>Binding Finish</h3>
            <ul>
                <li>Use bias tape or binding</li>
                <li>Wrap around seam edge</li>
                <li>Stitch in place</li>
                <li>Professional-looking finish</li>
            </ul>
        `
    },
    {
        id: 8,
        title: "Garment Construction",
        skill: "advanced",
        emoji: "👗",
        description: "Learn to construct full garments from patterns.",
        content: `
            <h2>Garment Construction</h2>
            <p class="skill-level advanced">Advanced</p>
            <h3>What You'll Learn</h3>
            <p>Complete techniques for sewing finished garments.</p>
            <h3>Basic Garment Assembly Order</h3>
            <ol>
                <li>Sew darts (if any)</li>
                <li>Prepare and sew bodice pieces</li>
                <li>Attach sleeves</li>
                <li>Sew side seams</li>
                <li>Prepare and attach collar (if applicable)</li>
                <li>Add waistband or facing</li>
                <li>Hem bottom edge</li>
                <li>Add buttons, zippers, or closures</li>
            </ol>
            <h3>Key Techniques</h3>
            <ul>
                <li>Interfacing - adds structure</li>
                <li>Fusible webbing - bonds fabrics</li>
                <li>Topstitching - decorative and functional</li>
                <li>Under-stitching - keeps facings in place</li>
            </ul>
            <h3>Fitting and Adjustments</h3>
            <p>Always do a muslin (test garment) for custom fits. Try on at each major step and mark adjustments before adding sleeves or hems.</p>
        `
    }
];

// Render tutorials
function renderTutorials(filter = 'all') {
    const grid = document.getElementById('tutorialsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? tutorials 
        : tutorials.filter(t => t.skill === filter);

    filtered.forEach(tutorial => {
        const card = document.createElement('div');
        card.className = 'tutorial-card';
        card.onclick = () => openTutorial(tutorial);
        
        card.innerHTML = `
            <div class="tutorial-card-header">${tutorial.emoji}</div>
            <div class="tutorial-card-body">
                <h3>${tutorial.title}</h3>
                <span class="skill-level ${tutorial.skill}">${tutorial.skill.charAt(0).toUpperCase() + tutorial.skill.slice(1)}</span>
                <p>${tutorial.description}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Filter tutorials
function filterTutorials(skill) {
    // Update active button
    document.querySelectorAll('.skill-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Render filtered tutorials
    renderTutorials(skill);
}

// Open tutorial modal
function openTutorial(tutorial) {
    const modal = document.getElementById('tutorialModal');
    const detail = document.getElementById('tutorialDetail');
    detail.innerHTML = tutorial.content;
    modal.style.display = 'block';
}

// Close tutorial modal
function closeTutorial() {
    document.getElementById('tutorialModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('tutorialModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderTutorials();
});
