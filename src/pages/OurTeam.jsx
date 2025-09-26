    // src/pages/OurTeam.jsx
    import { User, Phone, Briefcase } from "lucide-react";

    export default function OurTeam() {
    const team = [
        {
        name: "MR. ABHAY SALUNKHE",
        designation: "PROPRIETOR / ADMINISTRATION",
        experience: "",
        contact: "+919172371817",
        pic: "",
        },{
        name: "MR. KIRAN SAWANT",
        designation: "EXPERT (CIVIL & MAINTENANCE)",
        experience: "IRRIGATION DEPT. GOV. OF INDIA",
        contact: "+919579848766",
        pic: "",
        },
        {
        name: "MR. GANESH POL",
        designation: "SR. SITE ENGINEER",
        experience: "",
        contact: "",
        pic: "",
        },{
        name: "MR. ASHISH TALEKAR",
        designation: "SITE SUPERWISER",
        experience: "",
        contact: "+919833946192",
        pic: "",
        },{
        name: "MR. AKSHAY SALUNKHE",
        designation: "ACCOUNT DEPARTMENT",
        experience: "",
        contact: "+919833946192",
        pic: "",
        },{
        name: "MR. TEJAS PADALE",
        designation: "MEDIA OPERATOR",
        experience: "",
        contact: "",
        pic: "",
        },
    ];

    return (
        <section id="ourteam" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
                <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
                >
                {/* Profile Picture or User Icon */}
                {member.pic ? (
                    <img
                    src={member.pic}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-200"
                    />
                ) : (
                    <div className="bg-green-100 p-4 rounded-full mb-4">
                    <User className="w-12 h-12 text-green-600" />
                    </div>
                )}

                {/* Name & Designation */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                    {member.designation}
                </p>

                {/* Experience */}
                {member.experience && (
                    <p className="text-gray-600 flex items-center justify-center mb-2">
                    <Briefcase className="w-4 h-4 text-gray-500 mr-2" />
                    {member.experience}
                    </p>
                )}

                {/* Contact */}
                {member.contact && (
                    <p className="text-gray-600 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    {member.contact}
                    </p>
                )}
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }
