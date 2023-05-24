export interface IRoomsModalProps {
  isModalOpen: boolean;
  id: string;
  userId: string;
  hotelName: string;
  hotelRegion: string;
  closeModal: () => void;
}
