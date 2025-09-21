import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  title: string;
}

const PDFViewer = ({ isOpen, onClose, pdfUrl, title }: PDFViewerProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen p-2 sm:p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-hidden transform transition-all text-left">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <h3 className="font-inria text-lg sm:text-xl font-light text-primary">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-6 h-80 sm:h-[60vh] md:h-[70vh] overflow-y-auto flex items-center justify-center">
                <iframe
                  src={pdfUrl}
                  title={title}
                  className="w-full h-full border rounded-lg shadow-sm"
                  style={{ minHeight: '16rem' }}
                />
              </div>

              {/* Fallback para mobile */}
              <div className="block sm:hidden text-center text-xs text-muted-foreground px-4 pb-2">
                Caso o PDF não carregue, <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="underline text-primary">clique aqui para baixar</a>.
              </div>

              {/* Footer */}
              <div className="flex justify-end p-3 sm:p-4 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="font-kumbh px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PDFViewer;
