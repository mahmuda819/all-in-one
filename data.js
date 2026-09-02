const PLATFORM_CONFIG = {
  serviceArea: "College Gate",
  deliveryFeeBDT: 50
};

// complete - just check price
const restaurantsData = [
  {
    id: "rest-001",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "restu/bismillah.png",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [   
      { id: "item-101", name: "চিকেন ফ্রাই", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 150, available: true },
      { id: "item-102", name: "ক্রিস্পি চিকেন", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 130, available: true },
      { id: "item-103", name: "চিকেন উইংস (৪ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 200, available: true },
      { id: "item-104", name: "ফ্রাইড রাইস", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 100, available: true },
      { id: "item-105", name: "চিকেন রাইস", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 150, available: true },
      { id: "item-106", name: "স্পেশাল চিকেন রাইস", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-107", name: "স্পেশাল ফ্রাইড রাইস (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 400, available: true },
      { id: "item-108", name: "বিফ রাইস (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 550, available: true },
      { id: "item-109", name: "প্রন রাইস (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 600, available: true },
      { id: "item-110", name: "চিকেন & প্রন রাইস (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 600, available: true },
      { id: "item-111", name: "চিকেন সাসলিগ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 150, available: true },
      { id: "item-112", name: "বিফ সাসলিগ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-113", name: "বিফ কারি", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 280, available: true },
      { id: "item-114", name: "চিকেন কারি", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 160, available: true },
      { id: "item-115", name: "চিকেন ভেজিটেবল", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 160, available: true },
      { id: "item-116", name: "ভেজিটেবল", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 120, available: true },
      { id: "item-117", name: "বিফ চিলি ভেজিটেবল", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 220, available: true },
      { id: "item-118", name: "চিকেন পিজ্জা ৬\"", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 260, available: true },
      { id: "item-119", name: "চিকেন পিজ্জা ৯\"", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 450, available: true },
      { id: "item-120", name: "বিফ পিজ্জা", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 780, available: true },
      { id: "item-121", name: "প্রন পিজ্জা", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 780, available: true },
      { id: "item-122", name: "চাওমিন (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 800, available: true },
      { id: "item-123", name: "থাই নুডুলস (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 800, available: true },
      { id: "item-124", name: "নুডুলস", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 500, available: true },
      { id: "item-125", name: "চিকেন নুডুলস", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 500, available: true },
      { id: "item-126", name: "স্পেশাল নুডুলস (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 800, available: true },
      { id: "item-127", name: "থাই স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 350, available: true },
      { id: "item-128", name: "চিকেন স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 130, available: true },
      { id: "item-129", name: "চিকেন ভেজিটেবল স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 160, available: true },
      { id: "item-130", name: "চিকেন কর্ণ স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 160, available: true },
      { id: "item-131", name: "ফ্রেশ ভেজিটেবল স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 150, available: true },
      { id: "item-132", name: "স্প্রিং রোল (৮ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 350, available: true },
      { id: "item-133", name: "চিকেন অনথন (৬ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 250, available: true },
      { id: "item-134", name: "ক্রিস্পি বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-135", name: "চিকেন চিজ বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 220, available: true },
      { id: "item-136", name: "বিফ সাব চিজ বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 200, available: true },
      { id: "item-137", name: "চিকেন বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 250, available: true },
      { id: "item-138", name: "বিফ বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-139", name: "বিফ চিজ বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 200, available: true },
      { id: "item-140", name: "চিকেন লেগ বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 190, available: true },
      { id: "item-141", name: "চিকেন স্পেশাল বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-142", name: "নাগা বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-143", name: "সাব স্যান্ডউইচ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 190, available: true },
      { id: "item-144", name: "সাব চিজ স্যান্ডউইচ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 220, available: true },
      { id: "item-145", name: "বিফ সাব চিজ স্যান্ডউইচ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 250, available: true },
      { id: "item-146", name: "ক্লাব স্যান্ডউইচ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 200, available: true },
      { id: "item-147", name: "চিকেন স্যান্ডউইচ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 120, available: true },
      { id: "item-148", name: "চিকেন ললিপপ (৪ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 800, available: true },
      { id: "item-149", name: "চিকেন ড্রাম স্টিক (২ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 300, available: true },
      { id: "item-150", name: "পাস্তা (রেড সস) (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 280, available: true },
      { id: "item-151", name: "পাস্তা উইথ চিজ (১:২)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 800, available: true },
      { id: "item-152", name: "চিংড়ি ফ্রাই (১০ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 550, available: true },
      { id: "item-153", name: "আমেরিকান চপসি", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 380, available: true },
      { id: "item-154", name: "চিকেন চিলি ফ্রাই", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 450, available: true },
      { id: "item-155", name: "প্রন চিলি অনিয়ন", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 500, available: true },
      { id: "item-156", name: "বিফ চিলি ফ্রাই", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 550, available: true },
      { id: "item-157", name: "চিকেন সাব বার্গার", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 190, available: true },
      { id: "item-158", name: "চিকেন মিট বল (৪ স্টিক)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 200, available: true },
      { id: "item-159", name: "ফ্রেঞ্চ ফ্রাই", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 120, available: true },
      { id: "item-160", name: "মিল্ক শেক", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 160, available: true },
      { id: "item-161", name: "মুঠি কাবাব", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-162", name: "চিকেন চপ (৪ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 250, available: true },
      { id: "item-163", name: "বিফ চপ (৪ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 300, available: true },
      { id: "item-164", name: "চিকেন নাগেট (৬ পিস)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-165", name: "চিকেন ক্যাসোনাট সালাদ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 600, available: true },
      { id: "item-166", name: "গ্রিন সালাদ", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 190, available: true },
      { id: "item-167", name: "ফ্রেশ জুস (সিজনাল)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 190, available: true },
      { id: "item-168", name: "কোল্ড কফি", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 180, available: true },
      { id: "item-169", name: "লাচ্ছি", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 120, available: true },
      { id: "item-170", name: "কফি", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 100, available: true },
      { id: "item-171", name: "পানি (৫০০ এম.এল)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 20, available: true },
      { id: "item-172", name: "কোল্ড ড্রিংস (ওয়ান টাইম গ্লাস ২০০ এম.এল)", image: "assets/food/chicken_burger.jpg", category: "Regular Menu", description: "", price: 20, available: true },

      { id: "item-173", name: "প্যাকেজ ০১: ফ্রাইড রাইস + ভেজিটেবল কারি + চিকেন ফ্রাই + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০১ (১:১)", price: 220, available: true },
      { id: "item-174", name: "প্যাকেজ ০২: ফ্রাইড রাইস + চিকেন কারি + ভেজিটেবল + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০২ (১:১)", price: 270, available: true },
      { id: "item-175", name: "প্যাকেজ ০৩: চিকেন রাইস + চিকেন ফ্রাই (৪ পিস) + ভেজিটেবল + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৩ (১:১)", price: 290, available: true },
      { id: "item-176", name: "প্যাকেজ ০৪: ফ্রাইড রাইস + বিফ চিলি ফ্রাই + চিকেন ফ্রাই (৪ পিস) + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৪ (১:১)", price: 380, available: true },
      { id: "item-177", name: "প্যাকেজ ০৫: চিকেন রাইস + মিনি চিকেন + ভেজিটেবল + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৫ (১:১)", price: 250, available: true },
      { id: "item-178", name: "প্যাকেজ ০৬: চিকেন রাইস + চিকেন ফ্রাই + ভেজিটেবল + থাই স্যুপ/চিকেন স্যুপ + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৬ (১:১)", price: 380, available: true },
      { id: "item-179", name: "প্যাকেজ ০৭: থাই স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৭ (১:৪) — মেনু কার্ডে মূল্য ৫৮০ টাকা", price: 580, available: true },
      { id: "item-180", name: "প্যাকেজ ০৭: চিকেন স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৭ (১:৪) — মেনু কার্ডে মূল্য ৪৮০ টাকা", price: 480, available: true },
      { id: "item-181", name: "প্যাকেজ ০৭: ফ্রেশ ভেজিটেবল স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৭ (১:৪) — মেনু কার্ডে মূল্য ৪৮০ টাকা", price: 480, available: true },
      { id: "item-182", name: "প্যাকেজ ০৭: চিকেন ভেজিটেবল স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৭ (১:৪) — মেনু কার্ডে মূল্য ৫৮০ টাকা", price: 580, available: true },
      { id: "item-183", name: "প্যাকেজ ০৭: চিকেন কর্ণ স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৭ (১:৪) — মেনু কার্ডে মূল্য ৫৮০ টাকা", price: 580, available: true },
      { id: "item-184", name: "প্যাকেজ ০৮: ফ্রাইড রাইস + চিকেন ফ্রাই + চিকেন ভেজিটেবল + থাই স্যুপ + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৮ (১:২)", price: 720, available: true },
      { id: "item-185", name: "প্যাকেজ ০৯: ফ্রাইড রাইস + চিকেন ফ্রাই + চিকেন ভেজিটেবল + কোক + থাই স্যুপ", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ০৯ (১:৪)", price: 1600, available: true },
      { id: "item-186", name: "প্যাকেজ ১০: চিজ বার্গার + ফ্রেঞ্চ ফ্রাই + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১০ (১:১)", price: 300, available: true },
      { id: "item-187", name: "প্যাকেজ ১১: চিকেন বার্গার + ফ্রেঞ্চ ফ্রাই + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১১ (১:১)", price: 180, available: true },
      { id: "item-188", name: "প্যাকেজ ১২: বিফ/চিকেন বার্গার + ফ্রেঞ্চ ফ্রাই + চিকেন ফ্রাই + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১২ (১:১)", price: 280, available: true },
      { id: "item-189", name: "প্যাকেজ ১৩: চিকেন চাওমিন + চিকেন ফ্রাই (৪ পিস) + ফ্রেঞ্চ ফ্রাই + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১৩ (১:১)", price: 290, available: true },
      { id: "item-190", name: "প্যাকেজ ১৪: স্যুপ + চিকেন ফ্রাই (৪ পিস) + ফ্রেঞ্চ ফ্রাই + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১৪ (১:১)", price: 250, available: true },
      { id: "item-191", name: "প্যাকেজ ১৫: ফ্রাইড রাইস + চিকেন ফ্রাই (৪ পিস) + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১৫ (১:১)", price: 220, available: true },
      { id: "item-192", name: "প্যাকেজ ১৬: থাই স্যুপ + ওয়ানটন (০২ পিস) + চিকেন ফ্রাই (০২ পিস) + কোক", image: "assets/food/chicken_burger.jpg", category: "Package Menu", description: "প্যাকেজ ১৬ (১:১)", price: 280, available: true }
    ]
  },

  {
    id: "rest-002",
    name: "King's Delicious Food",
    image: "restu/kings.png",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 4.1,
    menu: [
     
    ]



  },
    

  {
    id: "rest-003",
    name: "Rustic Lounge-Tongi",
    image: "restu/rustic.png",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  }, 
  
  //  Complete
  {
    id: "rest-004",
    name: "🍨Yumi🍟",
    image: "restu/yumi.jpg",
    category: "Desserts, Fries & Fast Food",
    location: "College Gate",
    description: "Desserts, fries, burgers, rice bowls, drinks and fast food.",
    rating: 3.9,
    menu: [
      // Meat Box
      { id: "yumi-001", name: "Classic Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 180, available: true },
      { id: "yumi-002", name: "BBQ Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 220, available: true },
      { id: "yumi-003", name: "Naga Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 240, available: true },
      { id: "yumi-004", name: "Crispy Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 240, available: true },
      { id: "yumi-005", name: "Cheese Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 260, available: true },
      { id: "yumi-006", name: "Yumi Special Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 280, available: true },

      // Wings
      { id: "yumi-007", name: "BBQ Wings", image: "assets/food/chicken_burger.jpg", category: "Wings", description: "", price: 170, available: true },
      { id: "yumi-008", name: "Crispy Wings", image: "assets/food/chicken_burger.jpg", category: "Wings", description: "", price: 180, available: true },
      { id: "yumi-009", name: "Naga Wings", image: "assets/food/chicken_burger.jpg", category: "Wings", description: "", price: 180, available: true },
      { id: "yumi-010", name: "Yumi Special Wings", image: "assets/food/chicken_burger.jpg", category: "Wings", description: "", price: 200, available: true },

      // Rice Bowl
      { id: "yumi-011", name: "Tom Yum Fried Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 200, available: true },
      { id: "yumi-012", name: "BBQ Chicken Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 200, available: true },
      { id: "yumi-013", name: "Beef BBQ Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 240, available: true },
      { id: "yumi-014", name: "Chicken Teriyaki", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 220, available: true },
      { id: "yumi-015", name: "Crispy Chicken Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 200, available: true },
      { id: "yumi-016", name: "Curry Chicken Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 180, available: true },
      { id: "yumi-017", name: "Spicy Chicken Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 190, available: true },
      { id: "yumi-018", name: "Egg Fried Rice", image: "assets/food/chicken_burger.jpg", category: "Rice Bowl", description: "", price: 120, available: true },

      // Loaded Fries
      { id: "yumi-019", name: "Loaded Fries", image: "assets/food/chicken_burger.jpg", category: "Loaded Fries", description: "", price: 250, available: true },
      { id: "yumi-020", name: "Cheesy Loaded Fries", image: "assets/food/chicken_burger.jpg", category: "Loaded Fries", description: "", price: 300, available: true },
      { id: "yumi-021", name: "Mac Loaded Fries", image: "assets/food/chicken_burger.jpg", category: "Loaded Fries", description: "", price: 350, available: true },
      { id: "yumi-022", name: "Juicy Loaded Fries", image: "assets/food/chicken_burger.jpg", category: "Loaded Fries", description: "", price: 320, available: true },

      // Chow Mein & Thai Noodles
      { id: "yumi-023", name: "Egg Chow Mein", image: "assets/food/chicken_burger.jpg", category: "Chow Mein & Thai Noodles", description: "", price: 160, available: true },
      { id: "yumi-024", name: "Chicken Chow Mein", image: "assets/food/chicken_burger.jpg", category: "Chow Mein & Thai Noodles", description: "", price: 180, available: true },
      { id: "yumi-025", name: "Yumi Special Chow Mein", image: "assets/food/chicken_burger.jpg", category: "Chow Mein & Thai Noodles", description: "", price: 200, available: true },
      { id: "yumi-026", name: "Pad Thai", image: "assets/food/chicken_burger.jpg", category: "Chow Mein & Thai Noodles", description: "", price: 250, available: true },

      // Appetizers
      { id: "yumi-027", name: "Popcorn Chicken", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 190, available: true },
      { id: "yumi-028", name: "Crispy Chicken (4 pcs)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 280, available: true },
      { id: "yumi-029", name: "Chicken Tenders (5 pcs)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 250, available: true },
      { id: "yumi-030", name: "Korean Spicy Fry (4 pcs)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 250, available: true },
      { id: "yumi-031", name: "Chicken Cheese Balls (4 pcs)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 250, available: true },
      { id: "yumi-032", name: "Beef BBQ Meatballs (4 pcs)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 250, available: true },
      { id: "yumi-033", name: "Nanban Chicken (4 pcs)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 350, available: true },
      { id: "yumi-034", name: "Honey Butter Fried Chicken", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 300, available: true },
      { id: "yumi-035", name: "Hot Honey Tenders", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 280, available: true },
      { id: "yumi-036", name: "French Fries (Regular)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 120, available: true },
      { id: "yumi-037", name: "French Fries (Large)", image: "assets/food/chicken_burger.jpg", category: "Appetizers", description: "", price: 150, available: true },

      // Burgers - Laccha
      { id: "yumi-038", name: "Classic Laccha Burger", image: "assets/food/chicken_burger.jpg", category: "Burgers - Laccha", description: "Beef burger costs an additional ৳30.", price: 200, available: true },
      { id: "yumi-039", name: "Crispy Laccha Burger", image: "assets/food/chicken_burger.jpg", category: "Burgers - Laccha", description: "Beef burger costs an additional ৳30.", price: 220, available: true },
      { id: "yumi-040", name: "Naga Laccha Burger", image: "assets/food/chicken_burger.jpg", category: "Burgers - Laccha", description: "Beef burger costs an additional ৳30.", price: 240, available: true },
      { id: "yumi-041", name: "BBQ Laccha Burger", image: "assets/food/chicken_burger.jpg", category: "Burgers - Laccha", description: "Beef burger costs an additional ৳30.", price: 250, available: true },
      { id: "yumi-042", name: "Double Yumi Special Laccha Burger", image: "assets/food/chicken_burger.jpg", category: "Burgers - Laccha", description: "Beef burger costs an additional ৳30.", price: 300, available: true },

      // Burgers - Regular
      { id: "yumi-043", name: "Classic Burger", image: "assets/food/chicken_burger.jpg", category: "Regular Burgers", description: "Beef burger costs an additional ৳30.", price: 160, available: true },
      { id: "yumi-044", name: "Crispy Burger", image: "assets/food/chicken_burger.jpg", category: "Regular Burgers", description: "Beef burger costs an additional ৳30.", price: 200, available: true },
      { id: "yumi-045", name: "Naga Burger", image: "assets/food/chicken_burger.jpg", category: "Regular Burgers", description: "Beef burger costs an additional ৳30.", price: 220, available: true },
      { id: "yumi-046", name: "BBQ Burger", image: "assets/food/chicken_burger.jpg", category: "Regular Burgers", description: "Beef burger costs an additional ৳30.", price: 220, available: true },
      { id: "yumi-047", name: "Double Yumi Special Burger", image: "assets/food/chicken_burger.jpg", category: "Regular Burgers", description: "Beef burger costs an additional ৳30.", price: 240, available: true },

      // Add Ons
      { id: "yumi-048", name: "Extra Mayonnaise", image: "assets/food/chicken_burger.jpg", category: "Add Ons", description: "", price: 30, available: true },
      { id: "yumi-049", name: "Cheese Sauce", image: "assets/food/chicken_burger.jpg", category: "Add Ons", description: "", price: 40, available: true },
      { id: "yumi-050", name: "Egg", image: "assets/food/chicken_burger.jpg", category: "Add Ons", description: "", price: 30, available: true },

      // Sticky Whippy Drinks
      { id: "yumi-051", name: "Passion Fruit", image: "assets/food/chicken_burger.jpg", category: "Sticky Whippy Drinks", description: "", price: 160, available: true },
      { id: "yumi-052", name: "Taro", image: "assets/food/chicken_burger.jpg", category: "Sticky Whippy Drinks", description: "", price: 140, available: true },
      { id: "yumi-053", name: "Cappuccino", image: "assets/food/chicken_burger.jpg", category: "Sticky Whippy Drinks", description: "", price: 180, available: true },
      { id: "yumi-054", name: "Chocolate", image: "assets/food/chicken_burger.jpg", category: "Sticky Whippy Drinks", description: "", price: 160, available: true },

      // Cold Drinks & Refreshers
      { id: "yumi-055", name: "Strawberry Shake", image: "assets/food/chicken_burger.jpg", category: "Cold Drinks & Refreshers", description: "", price: 100, available: true },
      { id: "yumi-056", name: "Lemon Mint", image: "assets/food/chicken_burger.jpg", category: "Cold Drinks & Refreshers", description: "", price: 80, available: true },
      { id: "yumi-057", name: "Blue Mojito", image: "assets/food/chicken_burger.jpg", category: "Cold Drinks & Refreshers", description: "", price: 180, available: true },

      // Soft Drinks
      { id: "yumi-058", name: "Pepsi", image: "assets/food/chicken_burger.jpg", category: "Soft Drinks", description: "", price: 30, available: true },
      { id: "yumi-059", name: "7UP", image: "assets/food/chicken_burger.jpg", category: "Soft Drinks", description: "", price: 30, available: true },
      { id: "yumi-060", name: "Mineral Water", image: "assets/food/chicken_burger.jpg", category: "Soft Drinks", description: "", price: 20, available: true },

      // Cold Coffee
      { id: "yumi-061", name: "Cold Coffee", image: "assets/food/chicken_burger.jpg", category: "Cold Coffee", description: "", price: 110, available: true },

      // Desserts
      { id: "yumi-062", name: "Blueberry Cheesecake", image: "assets/food/chicken_burger.jpg", category: "Desserts", description: "Creamy cheesecake with blueberry topping.", price: 180, available: true },
      { id: "yumi-063", name: "Pistachio Cheesecake", image: "assets/food/chicken_burger.jpg", category: "Desserts", description: "Smooth cheesecake with pistachio cream.", price: 200, available: true },
      { id: "yumi-064", name: "Nutella Cheesecake", image: "assets/food/chicken_burger.jpg", category: "Desserts", description: "Rich cheesecake with Nutella spread.", price: 180, available: true },
      { id: "yumi-065", name: "Biscoff Cheesecake", image: "assets/food/chicken_burger.jpg", category: "Desserts", description: "Creamy cheesecake with Biscoff cookie spread.", price: 220, available: true },
      { id: "yumi-066", name: "Tiramisu", image: "assets/food/chicken_burger.jpg", category: "Desserts", description: "Classic Italian tiramisu with rich mascarpone cream and espresso-soaked ladyfingers.", price: 220, available: true },
      { id: "yumi-067", name: "Blackwoods Cake", image: "assets/food/chicken_burger.jpg", category: "Desserts", description: "Moist chocolate sponge layered with whipped cream and chocolate shavings.", price: 160, available: true },
      { id: "yumi-068", name: "Nutella Mochi", image: "assets/food/chicken_burger.jpg", category: "Mochi", description: "", price: 150, available: true },
      { id: "yumi-069", name: "Blueberry Mochi", image: "assets/food/chicken_burger.jpg", category: "Mochi", description: "", price: 150, available: true },
      { id: "yumi-070", name: "Pistachio Mochi", image: "assets/food/chicken_burger.jpg", category: "Mochi", description: "", price: 150, available: true },
      { id: "yumi-071", name: "Mango Mochi", image: "assets/food/chicken_burger.jpg", category: "Mochi", description: "", price: 140, available: true }
    ]
  },
  {
    id: "rest-005",
    name: "WITTY - Iᴛᴀʟɪᴀɴ Pɪᴢᴢᴀ & Mᴏʀᴇ",
    image: "restu/witty.png",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 4.2,
    menu: [
  { id: "witty-001", name: "Margherita 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 360, available: true },
  { id: "witty-002", name: "Margherita 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 460, available: true },
  { id: "witty-003", name: "Grilled Vegetable Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 420, available: true },
  { id: "witty-004", name: "Grilled Vegetable Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 520, available: true },
  { id: "witty-005", name: "Beef Pepperoni 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 480, available: true },
  { id: "witty-006", name: "Beef Pepperoni 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 580, available: true },
  { id: "witty-007", name: "Beef Kala Bhuna Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 520, available: true },
  { id: "witty-008", name: "Beef Kala Bhuna Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 620, available: true },
  { id: "witty-009", name: "Butter Chicken Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 490, available: true },
  { id: "witty-010", name: "Butter Chicken Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 600, available: true },
  { id: "witty-011", name: "BBQ Chicken Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 490, available: true },
  { id: "witty-012", name: "BBQ Chicken Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 590, available: true },
  { id: "witty-013", name: "Mushroom Sausage Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 460, available: true },
  { id: "witty-014", name: "Mushroom Sausage Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 550, available: true },
  { id: "witty-015", name: "Chicken Pepperoni 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 440, available: true },
  { id: "witty-016", name: "Chicken Pepperoni 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 540, available: true },
  { id: "witty-017", name: "Chicken Tikka Masala 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 460, available: true },
  { id: "witty-018", name: "Chicken Tikka Masala 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 560, available: true },
  { id: "witty-019", name: "Tuna SH Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 450, available: true },
  { id: "witty-020", name: "Tuna SH Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 650, available: true },
  { id: "witty-021", name: "Witty Special Pizza 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 600, available: true },
  { id: "witty-022", name: "Witty Special Pizza 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza", description: "", price: 800, available: true },

  { id: "witty-023", name: "Chicken Add On 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 70, available: true },
  { id: "witty-024", name: "Chicken Add On 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 90, available: true },
  { id: "witty-025", name: "Cheese Add On 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 70, available: true },
  { id: "witty-026", name: "Cheese Add On 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 90, available: true },
  { id: "witty-027", name: "Chicken Pepperoni Add On 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 70, available: true },
  { id: "witty-028", name: "Chicken Pepperoni Add On 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 90, available: true },
  { id: "witty-029", name: "Beef Pepperoni Add On 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 70, available: true },
  { id: "witty-030", name: "Beef Pepperoni Add On 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 90, available: true },
  { id: "witty-031", name: "Beef Bacon Add On 9\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 70, available: true },
  { id: "witty-032", name: "Beef Bacon Add On 12\"", image: "assets/food/chicken_burger.jpg", category: "Pizza Add Ons", description: "", price: 90, available: true },

  { id: "witty-033", name: "Chicken Burger", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 150, available: true },
  { id: "witty-034", name: "Crispy Chick Burger", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 200, available: true },
  { id: "witty-035", name: "Chicken With Cheese", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 180, available: true },
  { id: "witty-036", name: "Double Decker Chicken", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 250, available: true },
  { id: "witty-037", name: "Beef With Cheese", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 190, available: true },
  { id: "witty-038", name: "Beef & Sausage", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 230, available: true },
  { id: "witty-039", name: "Beef BBQ Bacon", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 250, available: true },
  { id: "witty-040", name: "Double Decker Beef", image: "assets/food/chicken_burger.jpg", category: "Burger", description: "", price: 280, available: true },

  { id: "witty-041", name: "Cheese", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 40, available: true },
  { id: "witty-042", name: "Egg", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 40, available: true },
  { id: "witty-043", name: "BBQ Sauce", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 30, available: true },
  { id: "witty-044", name: "Beef Bacon", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 60, available: true },
  { id: "witty-045", name: "Mayonnaise", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 30, available: true },
  { id: "witty-046", name: "Chicken Patty", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 100, available: true },
  { id: "witty-047", name: "Beef Patty", image: "assets/food/chicken_burger.jpg", category: "Burger Add Ons", description: "", price: 120, available: true },

  { id: "witty-048", name: "Chicken Sub", image: "assets/food/chicken_burger.jpg", category: "Sub", description: "", price: 200, available: true },
  { id: "witty-049", name: "Beef Sub", image: "assets/food/chicken_burger.jpg", category: "Sub", description: "", price: 230, available: true },
  { id: "witty-050", name: "Hunter Beef Sub", image: "assets/food/chicken_burger.jpg", category: "Sub", description: "", price: 320, available: true },

  { id: "witty-051", name: "Chicken Shawarma Wrap", image: "assets/food/chicken_burger.jpg", category: "Shawarma", description: "", price: 190, available: true },
  { id: "witty-052", name: "Cheesy Chicken Shorma", image: "assets/food/chicken_burger.jpg", category: "Shawarma", description: "", price: 260, available: true },

  { id: "witty-053", name: "Chicken Tenders - 5 Pcs", image: "assets/food/chicken_burger.jpg", category: "Chickens", description: "", price: 200, available: true },
  { id: "witty-054", name: "Buffalo Wings - 6 Pcs", image: "assets/food/chicken_burger.jpg", category: "Chickens", description: "", price: 180, available: true },
  { id: "witty-055", name: "Naga Wings - 6 Pcs", image: "assets/food/chicken_burger.jpg", category: "Chickens", description: "", price: 190, available: true },
  { id: "witty-056", name: "Crispy Wings - 5 Pcs", image: "assets/food/chicken_burger.jpg", category: "Chickens", description: "", price: 190, available: true },

  { id: "witty-057", name: "Pasta Basta Small", image: "assets/food/chicken_burger.jpg", category: "Pasta", description: "", price: 180, available: true },
  { id: "witty-058", name: "Pasta Basta Large", image: "assets/food/chicken_burger.jpg", category: "Pasta", description: "", price: 250, available: true },
  { id: "witty-059", name: "Naga Pasta Small", image: "assets/food/chicken_burger.jpg", category: "Pasta", description: "", price: 190, available: true },
  { id: "witty-060", name: "Naga Pasta Large", image: "assets/food/chicken_burger.jpg", category: "Pasta", description: "", price: 260, available: true },

  { id: "witty-061", name: "Masala Wedges", image: "assets/food/chicken_burger.jpg", category: "Potatoes", description: "", price: 150, available: true },
  { id: "witty-062", name: "French Fry", image: "assets/food/chicken_burger.jpg", category: "Potatoes", description: "", price: 130, available: true },

  { id: "witty-063", name: "Classic Chicken Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 250, available: true },
  { id: "witty-064", name: "Naga Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 280, available: true },
  { id: "witty-065", name: "BBQ Cheesy Chicken Meat Box", image: "assets/food/chicken_burger.jpg", category: "Meat Box", description: "", price: 310, available: true },

  { id: "witty-066", name: "Orange Mocktail", image: "assets/food/chicken_burger.jpg", category: "Drinks", description: "", price: 190, available: true },
  { id: "witty-067", name: "Cold Drinks", image: "assets/food/chicken_burger.jpg", category: "Drinks", description: "", price: 30, available: true },
  { id: "witty-068", name: "Water", image: "assets/food/chicken_burger.jpg", category: "Drinks", description: "", price: 20, available: true },

  { id: "witty-069", name: "Strawberry Shake Small", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 100, available: true },
  { id: "witty-070", name: "Strawberry Shake Large", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 150, available: true },
  { id: "witty-071", name: "Choco Cold Coffee Small", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 100, available: true },
  { id: "witty-072", name: "Choco Cold Coffee Large", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 150, available: true },
  { id: "witty-073", name: "Strawberry Boba", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 180, available: true },
  { id: "witty-074", name: "Chocolate Boba", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 190, available: true },
  { id: "witty-075", name: "Hot Coffee", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 130, available: true },
  { id: "witty-076", name: "Black Coffee", image: "assets/food/chicken_burger.jpg", category: "Coffee & Beverage", description: "", price: 90, available: true }
    ]
  },

  {
    id: "rest-006",
    name: "Motto Food",
    image: " restu/motto.png",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
   // Motto Food Restaurant Data
    // ================= BURGER =================
    { id: 1, name: "Double Down", category: "Burger", price: 290 },
    { id: 2, name: "GP Burger", category: "Burger", price: 160 },
    { id: 3, name: "Chick Room Burger", category: "Burger", price: 180 },
    { id: 4, name: "Premium BBQ Burger", category: "Burger", price: 250 },
    { id: 5, name: "Mr. Motto Burger", category: "Burger", price: 200 },
    { id: 6, name: "Beef Cheese Burger", category: "Burger", price: 180 },
    { id: 7, name: "Beef BBQ Burger", category: "Burger", price: 200 },
    { id: 8, name: "Beef Supreme Burger", category: "Burger", price: 290 },
    { id: 9, name: "Crunchy Gur Burger", category: "Burger", price: 220 },
    { id: 10, name: "Naga Chicken Fighter", category: "Burger", price: 230 },
    { id: 11, name: "Chicken Toast Burger", category: "Burger", price: 230 },

    // ================= ADD ONS =================
    { id: "add-1", name: "Cheese", category: "Add Ons", price: 40 },
    { id: "add-2", name: "Egg", category: "Add Ons", price: 30 },
    { id: "add-3", name: "BBQ Sauce", category: "Add Ons", price: 30 },
    { id: "add-4", name: "Naga Sauce", category: "Add Ons", price: 20 },
    { id: "add-5", name: "Mayonnaise", category: "Add Ons", price: 20 },
    { id: "add-6", name: "Chicken Patty", category: "Add Ons", price: 100 },
    { id: "add-7", name: "Beef Patty", category: "Add Ons", price: 130 },

    // ================= SUB =================
    { id: 12, name: "Chicken Sub", category: "Sub", price: 190 },
    { id: 13, name: "Mexican Chicken Sub", category: "Sub", price: 200 },
    { id: 14, name: "Beef Sub", category: "Sub", price: 220 },

    // ================= PASTA =================
    { id: 15, name: "Pasta Basta", category: "Pasta", price: { small: 180, large: 250 } },
    { id: 16, name: "Pasta Achari", category: "Pasta", price: { small: 190, large: 270 } },
    { id: 17, name: "Naga Pasta", category: "Pasta", price: { small: 190, large: 270 } },

    // ================= SHAWARMA =================
    { id: 18, name: "Chicken Shawarma", category: "Shawarma", price: 180 },
    { id: 19, name: "Beef Shawarma", category: "Shawarma", price: 210 },

    // ================= PIZZA =================
    { id: 20, name: "Regular Pizza", category: "Pizza", price: 350 },
    { id: 21, name: "Naga Pizza", category: "Pizza", price: 360 },

    // ================= FRY =================
    { id: 22, name: "Chicken Strips (5 Pcs)", category: "Fry", price: 190 },
    { id: 23, name: "Fish Chips (5 Pcs)", category: "Fry", price: 220 },
    { id: 24, name: "Fish and Meat", category: "Fry", price: 210 },
    { id: 25, name: "French Fries", category: "Fry", price: 130 },
    { id: 26, name: "Wedges", category: "Fry", price: 150 },

    // ================= MEAT BOX =================
    { id: 27, name: "Regular Meat Box", category: "Meat Box", price: 250 },
    { id: 28, name: "Naga Meat Box", category: "Meat Box", price: 270 },
    { id: 29, name: "Moto Box", category: "Meat Box", price: 280 },
    { id: 30, name: "Cheese Motka Meat", category: "Meat Box", price: 290 },
    { id: 31, name: "Dry Fry Box", category: "Meat Box", price: 280 },

    // ================= WINGS =================
    { id: 32, name: "Crunchy Wings (5 Pcs)", category: "Wings", price: 190 },
    { id: 33, name: "Buffalo Wings (6 Pcs)", category: "Wings", price: 180 },
    { id: 34, name: "Naga Wings (6 Pcs)", category: "Wings", price: 190 },

    // ================= PLATER =================
    { 
      id: "plater-1", 
      name: "Petuk", 
      category: "Plater", 
      price: 320, 
      items: ["Chicken Cutlet", "Chicken Sausage", "Fries", "Cold Coffee"] 
    },
    { 
      id: "plater-2", 
      name: "Hungry Man", 
      category: "Plater", 
      price: 350, 
      items: ["Burger", "Meat Ball", "Fries", "Soft Drinks"] 
    },
    { 
      id: "plater-3", 
      name: "Moto Couple (2 person)", 
      category: "Plater", 
      price: 500, 
      items: ["Two Medium Meat Box", "Burger", "Fries", "Wings"] 
    },

    // ================= HOT AND COLD =================
    { id: "bev-1", name: "Cold Strawberry", category: "Hot and Cold", price: { small: 80, large: 130 } },
    { id: "bev-2", name: "Cold Coffee", category: "Hot and Cold", price: { small: 90, large: 150 } },
    { id: "bev-3", name: "Mango Lassi", category: "Hot and Cold", price: { small: 90, large: 150 } },
    { id: "bev-4", name: "Hot Coffee", category: "Hot and Cold", price: 130 },
    { id: "bev-5", name: "Black Coffee", category: "Hot and Cold", price: 90 },

    // ================= DRINKS =================
    { id: "drink-1", name: "Soft Drinks", category: "Drinks", price: 30 },
    { id: "drink-2", name: "Fresh Water", category: "Drinks", price: 20 }
    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },

  {
    id: "rest-005",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [
     
    ]
  },

  {
    id: "rest-006",
    name: "Bismillah Mini Chinese and Fast Food",
    image: "assets/restaurants/college_gate_cafe.jpg",
    category: "Fast Food & Snacks",
    location: "College Gate",
    description: "Open:10 AM-10 PM.",
    rating: 3.9,
    menu: [

    ]
  },
  
];

