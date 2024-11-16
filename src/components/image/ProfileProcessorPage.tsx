import ProfileImageProcessor from "./ProfileImageProcessor";

const ProfileProcessorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[#5D4A82] mb-8 text-center">
            Profile Image Processor
          </h1>
          <ProfileImageProcessor />
        </div>
      </div>
    </div>
  );
};

export default ProfileProcessorPage;
