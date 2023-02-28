import { IService } from "@/types";

export interface PropsServiceCard {
  service: IService;
}

const ServiceCard = ({ service }: PropsServiceCard) => {
  const { Icon, title, about } = service;

  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h5 className="font-bold">{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
